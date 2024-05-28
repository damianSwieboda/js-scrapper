<h1 align="center">Web Scrapper</h1>

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Customization Options](#customization-options)
6. [Stay in Touch](#stay-in-touch)

## Overview
This Node.js application is designed for web scraping purposes. It fetches HTML content from a specified URL, analyzes the structure to find the primary unordered list with direct children, and retrieves the last list item.

## Installation
Ensure you have Node.js installed on your machine. Clone the repository and install dependencies using npm:

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

--disable-custom-headers: Disable custom headers for fetching HTML.
--max-page-size-in-megabytes <value>: Set the maximum page size in megabytes (default is 15 MB).
--verbose: Enable detailed output for debugging purposes.

Example usage:
```bash
node main.js --max-page-size-in-megabytes 5 https://www.example.com/
```

## Features
- HTML Fetching: Retrieves HTML content from a specified URL.
- Validation: Validates the URL format and custom headers.
- Data Extraction: Identifies and returns the last list item from the primary unordered list found on the page.
- Configurability: Offers command-line options for adjusting scraping parameters.

## Customization Options
Command-Line Options
--disable-custom-headers: By default, custom headers are enabled. Use this flag to disable them, potentially altering the scraping results.
--max-page-size-in-megabytes <value>: Sets a limit on the page size in megabytes for fetching HTML content. Accepts both integers and floats.
--help: Provides usage instructions and details about available options for running the application.

## Stay in touch
- Author Damian Świeboda
- [Linkedin profile](https://www.linkedin.com/in/damian-%C5%9Bwieboda/)
- [GitHub repository](https://github.com/damianSwieboda/js-scrapper)

Feel free to reach out for any questions or feedback regarding this project.
