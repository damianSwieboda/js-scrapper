const parseArgs = require('./src/parseArgs');
const validateURL = require('./src/validateURL');
const validateHeader = require('./src/validateHeader');
const getHTML = require('./src/getHtml');
const findLastListItem = require('./src/findLastListItem');

(async () => {
  const { 
    url,
    disableCustomHeaders,
    maxPageSizeInMegabytes,
    verbose
  } = parseArgs();

  const log = (message) => {
    if (verbose) {
      console.log(message);
    }
  };

  try {
    log('Validating URL...');
    const validatedURL = validateURL(url);
    log(`Validated URL: ${validatedURL}`);

    log('Validating headers...');
    await validateHeader(validatedURL, maxPageSizeInMegabytes);
    log('Headers validated successfully.');

    log('Fetching HTML content...');
    const html = await getHTML(validatedURL, !disableCustomHeaders);
    log('HTML content fetched successfully.');
    
    log('Finding the last list item...');
    const lastListItem = findLastListItem(html);
    if (lastListItem) {
      console.log('Last list item:', lastListItem);
    } else {
      console.log('No unordered list found or last list element is empty.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
})();
