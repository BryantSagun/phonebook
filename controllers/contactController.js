const ReactDOMServer = require('react-dom-server')
const ReactApp = require('../src/App')
const path = require('path');
const fs = require('fs');

exports.getContacts = (req, res) => {
     const app = ReactDOMServer.renderToString(<ReactApp />);
     const indexFile = path.resolve('./build/index.html');

     fs.readFile(indexFile, 'utf8', (err, data) => {
     if (err) {
          console.error('Something went wrong:', err);
          return res.status(500).send('Oops, better luck next time!');
     }

     return res.send(
          data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
     );
     });
}

exports.createContact = (req, res) => {
     console.log("Router is working")
}