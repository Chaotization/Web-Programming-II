import express from 'express';
import configRoutes from './routes/index.js';
import redis from 'redis';
import { checkString } from './validator.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const client =  redis.createClient();
client.connect().then(() => {});


app.use('/api/rockets/:id', async (req, res, next) => {
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }

    if(req.originalUrl !== '/api/rockets/history' && req.method === 'GET'){
        let exist = await client.exists(id);
        if(exist){
            console.log('Rocket in cache');
            let rocket = await client.get(id);
            await client.lPush('history', rocket);
            return res.status(200).json(rocket);
        }else{
            next();
        }
    }else{
        next();
    }
});

app.use('/api/launches/:id', async (req, res, next) => {
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }

    let exist = await client.exists(id);
    if(exist){
        console.log('Launches in cache');
        let launches = await client.get(id);
        return res.status(200).json(launches);
    }else{
        next();
    }
});

app.use('/api/capsules/:id', async (req, res, next) => {
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }

    let exist = await client.exists(id);
    if(exist) {
        console.log('Capsules in cache');
        let capsules = await client.get(id);
        return res.status(200).json(capsules);
    }else{
        next();
    }
});

app.use('/api/capsules', async(req, res, next) => {
    if(req.originalUrl === '/api/capsules'){
        let exists = await client.get('capsulesList');
        if(exists){
            console.log('Capsules List From Cache');
            return res.status(200).json(exists);
        }else{
            next();
        }
    }else{
        next();
    }

});

app.use('/api/launches', async(req, res, next) => {
    if(req.originalUrl === '/api/launches'){
        let exists = await client.get('launchesList');
        if(exists){
            console.log('Launches List From Cache');
            return res.status(200).json(exists);
        }else{
            next();
        }
    }else {
        next();
    }
});

app.use('/api/rockets', async(req, res, next) => {
    if(req.originalUrl === '/api/rockets'){
        let exists = await client.get('rocketsList');
        if(exists){
            console.log('Rockets List From Cache');
            return res.status(200).json(exists);
        }else{
            next();
        }
    }else{
        next();
    }

});

configRoutes(app);

app.listen(3000, async () => {
    console.log("We've now got a server!");
    console.log('Your routes will be running on http://localhost:3000');
})


