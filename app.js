
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import config from './config.js';
import statusRoute from './routes/statusRoute.js';
import liveViewRoute from './routes/liveViewRoute.js';
import phaseRoute from './routes/phaseRoute.js';
import monitoringRoute from './routes/monitoringRoute.js';
const __dirname = path.resolve();



// Swagger API Doc
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "SAM-Q-NET API",
			version: "1.0.0",
			description: "SAM-Q-NET (and all NG-1 based audio monitors) will use a REST API for internal communication between the front panel and control server.",
		},
		servers: [
			{
				url: "http://localhost:8080",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);


// Connection URL
const apiUrl = '/v1_0';
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
//enables cors
app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],   
    'preflightContinue': false
}));

app.use(bodyParser.json());
app.use(apiUrl + '/status', statusRoute);
app.use(apiUrl + '/liveView', liveViewRoute);
app.use(apiUrl + '/phaseMeter', phaseRoute);
app.use(apiUrl + '/monitoring', monitoringRoute);

/*app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../build/index.html`));
});
app.get('/', (req, res) =>{
    res.send('/../build/index.html');
});*/


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) =>{
    res.send('build/index.html');
})

app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:8080');
});