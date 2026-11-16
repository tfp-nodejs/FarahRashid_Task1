function filterCostum(postArray) {
  const result = [];
  for (const post of postArray) {
    if (post.title.length < 25) {
      result.push(post);
    }
  }
  return result;
}
export { filterCostum };
