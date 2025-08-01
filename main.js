console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");
console.log(shoppingList);

function getShoppingListMsg(shoppingList) {
  return `Current Shopping List: ${shoppingList}`;
}

console.log(getShoppingListMsg(shoppingList));
