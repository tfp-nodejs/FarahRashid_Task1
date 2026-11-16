function filterCostum(postArray) {
  const result = [];
  for (let i = 0; i < postArray.length; i++) {
    if (postArray[i].title.length < 25) {
      result.push(postsArray[i]); 
    }
  }  
  return result;
}
export { filterCostum };
