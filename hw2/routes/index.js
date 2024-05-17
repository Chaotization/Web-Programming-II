import speceX from './spaceX.js';

const constructorMethod = (app) => {
    app.use('/api', speceX);

    app.use('*', (req, res) => {
        res.status(404).json({error: 'Route Not Found'});
    })
}

export default constructorMethod;