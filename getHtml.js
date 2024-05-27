const http = require('http');
const https = require('https');


const getHTML = (url) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

  
    client.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(data);
      });

    }).on('error', (err) => {
      reject(err);
    });
  });
};

module.exports = getHTML;
