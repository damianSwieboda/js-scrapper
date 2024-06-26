## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Stay in Touch](#stay-in-touch)

## Overview
Application is designed for web scraping purposes. It fetches HTML content from a specified URL, analyzes the structure to find the primary unordered list with direct children, and retrieves the last list item. The implementation adheres strictly to using the standard JavaScript libraries available in the Node.js runtime environment.

## Installation
Ensure you have Node.js (version >= 20.11.1) and npm (version >= 10.2.4) installed on your machine. Clone the repository using npm:

```bash
$ git clone https://github.com/damianSwieboda/js-scrapper.git
$ cd js-scrapper
$ npm install
```

## Usage
To run the application, use the following command structure:

```bash
node main.js [options] <URL>
```
Replace [options] with any of the following flags and <URL> with the URL of the website you want to scrape:

- --disable-custom-headers: By default, custom headers are enabled. Use this flag to disable them, potentially altering the scraping results.
- --max-page-size-in-megabytes <value>: Sets a limit on the page size in megabytes for fetching HTML content (default is 15 MB). Accepts both integers and floats.
- --verbose: Enable detailed output for debugging purposes.
- --help: Provides usage instructions and details about available options for running the application.
  
Example usage:
```bash
node main.js --max-page-size-in-megabytes 5 https://www.example.com/
```

## Features
- Validation: Validates the URL and custom headers.
- HTML Fetching: Retrieves HTML content from a specified URL.
- Data Extraction: Identifies and returns the last list item from the primary unordered list found on the page.
- Configurability: Offers command-line options for adjusting scraping parameters.

## Stay in touch
- Author Damian Świeboda
- [Linkedin profile](https://www.linkedin.com/in/damian-%C5%9Bwieboda/)
- [GitHub repository](https://github.com/damianSwieboda/js-scrapper)

Feel free to reach out for any questions or feedback regarding this project.
