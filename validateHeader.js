const http = require('http');
const https = require('https');

const validateHeaders = (url, maxPageSizeInMegabytes) => {
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
      
      const contentLength = parseInt(response.headers['content-length']);
      if (isNaN(contentLength)) {
        // COMMENT FOR RECRUITER: I am uncertain about handling when there is no Content-Length in headers.
        // I have read that this is rare, but I have encountered websites that did not have this header when creating this scrapper.
        // For example: https://rebus.community/
        return resolve(true); // Resolving successfully as improvised solution
      }  

    

      const maxPageSizeInBytes = maxPageSizeInMegabytes * 1024 * 1024
        if (contentLength > maxPageSizeInBytes) {
          return reject(new Error(`Page size exceeds the maximum limit of ${maxPageSizeInMegabytes} MB.`));
        }

      return resolve(true);
    };
  
    const request = client.request(url, { method: 'HEAD' }, handleResponse);
    request.on('error', (err) => reject(err));
    request.end();
  });
};

module.exports = validateHeaders;
