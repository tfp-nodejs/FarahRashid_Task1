function filterItems(items, condition) {
  let newArray = [];

  for (let index = 0; index < items.length; index++) {
    const currentItem = items[index];

    if (condition(currentItem, index, items)) {
      newArray[newArray.length] = currentItem;
    }
  }

  return newArray;
}

module.exports = { customFilter: filterItems };
