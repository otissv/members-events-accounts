'use strict';
import axios from 'axios';
import express from 'express';
import main from './../../backend/main.js';


export function expressStart (url) {
  axios.get(url)
    .then(response => response)
    .catch(response => {
      if (response.code === 'ECONNREFUSED') {
        const app = express();
        main(app, express);
        process.stdout.write(`Connecting express on ${url}`);
        return app;
      } else {
        process.stdout.write(`Express is connected on ${url}`);
      }
    });

}

export function expressExit () {
  process.exit();
}
