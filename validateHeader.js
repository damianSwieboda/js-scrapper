const http = require('http');
const https = require('https');

const validateHeaders = (url) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    const handleResponse = (response) => {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        return reject(new Error(`Failed to fetch headers, status code: ${response.statusCode}`));
      }  
        
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.includes('text/html')) {
        return reject(new Error('Unsupported content type'));
      } 
      
      // TODO check content length, what if there is no content length?
      const contentLength = parseInt(response.headers['content-length']);         
      const maxPageSize = 15 * 1024 * 1024
      if (contentLength > maxPageSize) {
        return reject(new Error(`Page size exceeds the maximum limit of ${maxPageSize/1048576} MB.`));
      }

      return resolve(true);
    };
  
    const request = client.request(url, { method: 'HEAD' }, handleResponse);
  
    request.on('error', (err) => reject(err));
    request.end();
  });
};

module.exports = validateHeaders;
