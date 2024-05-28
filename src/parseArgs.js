const parseArgs = () => {
  if (process.argv.includes('--help')) {
    displayHelpInformations();
    process.exit(0);
  }

  const args = process.argv.slice(2);
  const DISABLE_CUSTOM_HEADERS = args.includes('--disable-custom-headers');
  const MAX_PAGE_SIZE_IN_MEGABYTES_INDEX = args.indexOf('--max-page-size-in-megabytes');
  const VERBOSE = args.includes('--verbose');

  const url = args[args.length - 1];
  if (!url || !url.startsWith('http')) {
    throw new Error('Please provide a valid URL as the last argument.');
  } 

  let maxPageSizeInMegabytes = 15;  // default
  if (MAX_PAGE_SIZE_IN_MEGABYTES_INDEX !== -1 && args[MAX_PAGE_SIZE_IN_MEGABYTES_INDEX + 1]) {
    maxPageSizeInMegabytes = parseFloat(args[MAX_PAGE_SIZE_IN_MEGABYTES_INDEX + 1]);
    if (!maxPageSizeInMegabytes) {
      throw new Error('Please provide a valid number for --max-page-size-in-megabytes.');
    }
  }
  
  return {
    url,
    disableCustomHeaders: DISABLE_CUSTOM_HEADERS,
    maxPageSizeInMegabytes,
    verbose: VERBOSE
  };
};

function displayHelpInformations() {
  console.log('Usage:');
  console.log('  node main.js --max-page-size-in-megabytes 3 https://someDomain.com/');
  console.log('  -- or -----------------------------------------------------------------');
  console.log('  node main.js --disable-custom-headers --max-page-size-in-megabytes 0.2 https://someDomain.com/');
  console.log('');

  console.log('Options:');

  const options = [
    {
      Option: '--help',
      Description: 'Display this help message',
    },
    {
      Option: '--disable-custom-headers',
      Description: 'By default, custom headers are enabled. Pass this flag to disable custom headers, which may result in different scraping results.',
    },
    {
      Option: '--max-page-size-in-megabytes',
      Description: 'Set the maximum page size in megabytes (default is 15 MB). Accepts integers and floats: 1, 0.1, 15, 0.06.',
    },
    {
      Option: '--verbose',
      Description: 'Enable detailed output, showing additional information about the execution process. Useful for debugging.',
    },
  ];

  console.table(options);
}
  
module.exports = parseArgs;


