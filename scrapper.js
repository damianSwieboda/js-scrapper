const validateURL = require('./validateURL')
const validateHeader = require('./validateHeader')
const getHTML = require('./getHtml')
const findLastListItem = require('./findLastListItem')

const main = async () => {

  const args = process.argv.slice(2);
  const DISABLE_CUSTOM_HEADERS = args.includes('--disable-custom-headers');
  const MAX_PAGE_SIZE_IN_MEGABYTES_INDEX = args.indexOf('--max-page-size-in-megabytes');

  const url = args[args.length - 1];
  if (!url || !url.startsWith('http')) {
    console.error('Please provide a valid URL as the last argument.');
    process.exit(1);
  }

  let validatedURL;
  try {
    validatedURL = validateURL(url);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  let maxPageSizeInMegabytes = 15  //default
  if (MAX_PAGE_SIZE_IN_MEGABYTES_INDEX !== -1 && args[MAX_PAGE_SIZE_IN_MEGABYTES_INDEX + 1]) {
    maxPageSizeInMegabytes = parseFloat(args[MAX_PAGE_SIZE_IN_MEGABYTES_INDEX + 1]);
  }

  try {
    await validateHeader(validatedURL, maxPageSizeInMegabytes)
    const html = await getHTML(validatedURL, !DISABLE_CUSTOM_HEADERS);
    const lastListItem = findLastListItem(html);
    if (lastListItem) {
      console.log('Last list item:', lastListItem);
    } else {
      console.log('No unordered list found or list is empty.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

main();
