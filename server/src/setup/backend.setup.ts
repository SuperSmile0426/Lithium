// import node modules
import express, { Express } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import 'dotenv/config';

// import routes
import appRoutes from '../routes';

// import constants
import { MESSAGES } from '../constants';

const port = process.env.PORT || 5000;

const backendSetup = (app: Express) => {
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.json());

    app.use('/api/v1', appRoutes);

    // Health check
    app.use('/*', (req, res) => {
        res.send('Welcome to Lithium Backend');
    });


    app.listen(port, () => {
        console.info(MESSAGES.SERVER_RUN_SUCCESS);
    });
};

export default backendSetup;
