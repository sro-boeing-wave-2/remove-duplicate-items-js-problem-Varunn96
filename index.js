/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const newset = new Set(items);
  const output = Array.from(newset);
  return output;
};

module.exports = removeDuplicateItems;
