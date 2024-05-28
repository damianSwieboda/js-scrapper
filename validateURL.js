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
  
  // TODO Add SSRF protection? 

  // Basic XSS protection
  const params = parsedURL.searchParams;
  params.forEach((value, key) => {
    // Check for potential XSS attacks
    if (containsXSS(value)) {
      throw new Error(`Potential XSS attack detected in parameter '${key}'.`);
    }
  });

  return parsedURL.toString();
};

function containsXSS(input) {
  // reggex match common XSS patterns
  const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  return regex.test(input);
}

module.exports = validateURL