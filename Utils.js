
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

function mapItems(items, transform) {
  const newItems = [];

  let position = 0;

  while (position < items.length) {
    newItems[newItems.length] = transform(
      items[position],
      position,
      items
    );

    position++;
  }

  return newItems;
}

function reduceItems(items, callback, initialValue) {
  let position = 0;
  let result = initialValue;

  if (arguments.length < 3) {
    if (items.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    result = items[0];
    position = 1;
  }

  while (position < items.length) {
    result = callback(result, items[position], position, items);
    position++;
  }

  return result;
}

module.exports = {
  filterItems,
  mapItems,
  reduceItems
};
