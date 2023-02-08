// import node modules
import express from 'express';

import {
    backendSetup,
    // databaseSetup
} from './setup';

const app = express();

// databaseSetup(async () => {
backendSetup(app);
// });