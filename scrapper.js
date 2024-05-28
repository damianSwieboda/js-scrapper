const validateURL = require('./validateURL')
const validateHeader = require('./validateHeader')
const getHTML = require('./getHtml')
const findLastListItem = require('./findLastListItem')
const parseArgs = require('./parseArgs')

const main = async () => {
  const { url, disableCustomHeaders, maxPageSizeInMegabytes } = parseArgs();

  let validatedURL;
  try {
    validatedURL = validateURL(url);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

  try {
    await validateHeader(validatedURL, maxPageSizeInMegabytes)
    const html = await getHTML(validatedURL, !disableCustomHeaders);
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
