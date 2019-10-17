import express from 'express';
import bodyParser from 'body-parser';
import serviceBroker from './serviceBroker/client';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));

// Importar las rutas
import IndexRoutes from './routes';

IndexRoutes(app);

serviceBroker.start().then( async () => {
  console.log('Service broker is connected');
  app.listen(3400, function() {
    console.log(`Server is listening on port 3400`)
  });
}).catch(err => {
  console.log('error: ', err);
})