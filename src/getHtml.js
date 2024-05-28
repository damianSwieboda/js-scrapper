const DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36",
  "Accept-Language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6",
};

const getHTML = async (url, useDefaultHeaders = true) => {
  const options = {
    headers: useDefaultHeaders ? DEFAULT_HEADERS : {},
  };
  
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch URL, status code: ${response.status}`);
  }

  return await response.text();
};



module.exports = getHTML;
