const validateHeaders = async (url, maxPageSizeInMegabytes) => {
  const response = await fetch(url, { method: 'HEAD' });

  if (!response.ok) {
    throw new Error(`Failed to fetch headers, status code: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('text/html')) {
    throw new Error('Unsupported content type');
  }
  
  const contentLength = parseInt(response.headers.get('content-length'));
  if (!contentLength) {
    // Handling case where there is no Content-Length header
    // You can decide what to do here; returning true might be appropriate depending on your application logic
    return true;
  }
  
  const maxPageSizeInBytes = maxPageSizeInMegabytes * 1024 * 1024;
  if (contentLength > maxPageSizeInBytes) {
    throw new Error(`Page size exceeds the maximum limit of ${maxPageSizeInMegabytes} MB.`);
  }

  return true;
};

module.exports = validateHeaders;