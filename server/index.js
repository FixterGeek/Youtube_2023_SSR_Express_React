import express, { request } from 'express';
import App from '../components/App.jsx';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
  // Get component
  const html = renderToString(<App />);
  // get index.html to inject root
  const indexFile = path.resolve('./server/public/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Algo salió mal 🚨', err);
      return res.status(500).send('Ups!, suerte para la próxima');
    }
    // sending a response
    return res.send(
      // actually injecting
      data.replace(`<div id="root"></div>`, `<div id="root">${html}</div>`)
    );
  });
});

app.use(express.static('./server/public'));

app.listen(PORT, () => {
  console.log(`🚀 El servidor escucha en: http://localhost:${PORT}`);
});
