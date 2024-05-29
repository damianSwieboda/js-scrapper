const findLastListItem = (html) => {
  const UL_REGEX = /<ul[^>]*>(.*?)<\/ul>/gs;
  const LI_REGEX = /<li[^>]*>(.*?)<\/li>/gs;

  const ulMatches = [...html.matchAll(UL_REGEX)];
  if (ulMatches.length === 0) {
    console.log('No <ul> found.');
    return null;
  }

  let maxChildren = 0;
  let targetUlInnerHTML = null;

  ulMatches.forEach(match => {
    const ulContent = match[1];
    const liMatches = [...ulContent.matchAll(LI_REGEX)];
    const childrenCount = liMatches.length;

    if (childrenCount > maxChildren) {
      maxChildren = childrenCount;
      targetUlInnerHTML = ulContent;
    }
  });

  if (!targetUlInnerHTML) {
    console.log('No <li> found in the <ul>.');
    return null;
  }

  const liMatches = [...targetUlInnerHTML.matchAll(LI_REGEX)];
  if (liMatches.length === 0) {
    console.log('No <li> found in the selected <ul>.');
    return null;
  }

  const lastLi = liMatches[liMatches.length - 1];
  const lastLiTextContent = retriveTextFromHTMLTags(lastLi[1]);
  
  return lastLiTextContent;
};

function retriveTextFromHTMLTags(htmlContent){
  const HTML_TAG_REGEX = /<[^>]*>/g;
  const retrivedText = htmlContent.replace(HTML_TAG_REGEX, '').trim();
  return retrivedText;
}

module.exports = findLastListItem;