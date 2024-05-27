const findLastListItem = (html) => {
    const ulMatches = [...html.matchAll(/<ul[^>]*>(.*?)<\/ul>/gs)];

    let maxChildren = 0;
    let targetUlInnerHTML = null;
  
    ulMatches.forEach(match => {
      const ulContent = match[1];
      const liMatches = [...ulContent.matchAll(/<li[^>]*>(.*?)<\/li>/gs)];
      const childrenCount = liMatches.length;
  
      if (childrenCount > maxChildren) {
        maxChildren = childrenCount;
        targetUlInnerHTML = ulContent;
      }
    });
  
    if (targetUlInnerHTML) {
      const liMatches = [...targetUlInnerHTML.matchAll(/<li[^>]*>(.*?)<\/li>/gs)];
      const lastLi = liMatches[liMatches.length - 1];
      return lastLi ? lastLi[1].replace(/<[^>]*>/g, '').trim() : null;
    } else {
      return null;
    }
};

module.exports = findLastListItem;

