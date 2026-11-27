function filterItems(items, condition) {
  const selectedItems = [];

  let position = 0;

  while (position < items.length) {
    const currentItem = items[position];

    if (condition(currentItem, position, items)) {
      selectedItems[selectedItems.length] = currentItem;
    }

    position++;
  }

  return selectedItems;
}

module.exports = { filterItems };
