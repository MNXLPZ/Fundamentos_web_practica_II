import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import greetingRouter from './greetingRouter.js';

const app = express();
console.log('la ruta es  '+__dirname);
app.set('views', __dirname + '/../views'); //configuraciones .settings para variables (<-- views.)
app.set('view engine', 'mustache'); //motor de plantilla
app.engine('mustache', mustacheExpress());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname)); //dirname devuelve la ruta de la carpeta en la que estamos (src), la función devuelve la ruta de public
console.log('la ruta express static es  '+__dirname);

app.use('/', greetingRouter);

app.listen(3000, () => console.log('Listening on port 3000!'));