import {Router} from 'express';
import redis from 'redis';
import axios from 'axios';
import { checkString } from '../validator.js';
const router = Router();
const client = redis.createClient();
client.connect().then(() => {});

router.route('/rockets/history').get(async (req, res) => {
    try {
        let rocketList = await client.lRange('history', 0, 19);

        if(rocketList.length === 0) return res.status(200).json(rocketList);

        while (rocketList.length < 20) {
            const repeatCount = Math.min(20 - rocketList.length, rocketList.length);
            if(repeatCount > 0) {
                rocketList = rocketList.concat(...Array.from({length: repeatCount}, () => [...rocketList]));
            }
        }

        return res.status(200).json(rocketList.slice(0, 20));
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

router
    .route('/rockets')
    .get(async (req, res) => {
        console.log('Rocket List Not Cached');
        try {
            let rocketsList = await axios.get('http://api.spacexdata.com/v4/rockets');
            await client.set('rocketsList', JSON.stringify(rocketsList.data));
            return res.status(200).json(rocketsList.data);
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    });

router
.route('/rockets/:id')
.get(async (req, res) => {
    console.log('Rocket not in cache');
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }
    try{
        let rocket = await axios.get(`http://api.spacexdata.com/v4/rockets/${id}`);
        await client.set(id, JSON.stringify(rocket.data));
        await client.lPush('history', JSON.stringify(rocket.data));
        return res.status(200).json(rocket.data);
    }catch(e){
        return res.status(e.response.status).json({error: e.message});
    }
});

router
.route('/launches')
.get(async (req, res) => {
    console.log('Launches List Not Cached');
    try {
        let launchesList = await axios.get('http://api.spacexdata.com/v4/launches');
        await client.set('launchesList', JSON.stringify(launchesList.data));
        return res.status(200).json(launchesList.data);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

router
.route('/launches/:id')
.get(async (req, res) => {
    console.log('Launches not in cache');
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }
    try{
        let launches = await axios.get(`http://api.spacexdata.com/v4/launches/${id}`);
        await client.set(id, JSON.stringify(launches.data));
        return res.status(200).json(launches.data);
    }catch(e){
        return res.status(e.response.status).json({error: e.message});
    }
});

router
.route('/capsules')
.get(async (req, res) => {
    console.log('Capsules List Not Cached');
    try {
        let capsulesList = await axios.get('http://api.spacexdata.com/v4/capsules');
        await client.set('capsulesList', JSON.stringify(capsulesList.data));
        return res.status(200).json(capsulesList.data);
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
});

router
.route('/capsules/:id')
.get(async (req, res) => {
    console.log('Capsules not in cache');
    let id;
    try{
        id = checkString(req.params.id);
    }catch(e){
        return res.status(400).json({error: e});
    }
    try{
        let capsules = await axios.get(`http://api.spacexdata.com/v4/capsules/${id}`);
        await client.set(id, JSON.stringify(capsules.data));
        return res.status(200).json(capsules.data);
    }catch(e){
        return res.status(e.response.status).json({error: e.message});
    }
});




export default router;