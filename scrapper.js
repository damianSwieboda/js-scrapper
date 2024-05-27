const getHTML = require('./getHtml')
const findLastListItem = require('./findLastListItem')

const main = async () => {

  const url = process.argv[2];
  if (!url) {
    console.error('Please provide a URL as a command line argument.');
    process.exit(1);
  }


  try {

    const html = await getHTML(url);
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
