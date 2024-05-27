const validateURL = (url) => {
    let parsedURL;

    try {
      parsedURL = new URL(url);
    } catch (err) {
      throw new Error('Invalid URL provided. Please ensure you provide a valid URL in the format "http://example.com" or "https://example.com".');
    }
  
    if (parsedURL.protocol !== 'http:' && parsedURL.protocol !== 'https:') {
      throw new Error('Invalid URL protocol. Only HTTP and HTTPS protocols are supported.');
    }
      
  return parsedURL.toString();
};

module.exports = validateURL