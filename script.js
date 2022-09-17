let products = [
  [1, "אננס", 20],
  [2, "אבטיח", 10],
  [3, "מלון", 20],
  [4, "בננה", 10],
];
let shoppingCart = [];
function addToCart(product) {
  shoppingCart.push(products[product - 1]); //  מכניס ערך למערך של עגלת הקניות מתוך מערך מוצרים
  renderCartFromArray(); //מפעיל פוקנציה עגלת קניות מעודכנת
}

function renderCartFromArray() {
  document.getElementById("shoppingCart").innerHTML = ""; //removes all the HTML content.//מסיר את כל התוכן שבדף
  for (let i = 0; i < shoppingCart.length; i++) {
    let productHTML = document.createElement("div"); //המיקום שבו הפלט יוצג
    let productDescription = document.createTextNode(
      shoppingCart[i][1] + " מחיר " + shoppingCart[i][2] + "$" //מה הפלט שהיה כתוב בעגלת קניות בדף
    );
    let removeBtn = document.createElement("button"); //מוסיף כפתור של הסרה

    removeBtn.setAttribute(
      "onclick",
      "removeProduct(" + shoppingCart[i][0] + ")"
    ); //sets an attribute to the button  //מעדכן את הפעולות שהכפתור יבצע
    removeBtn.textContent = "הסרה";
    productHTML.appendChild(productDescription); //מכניס את תיאור המוצר למיקום בדף
    productHTML.appendChild(removeBtn); //מכניס את הכפתור הסרה למיקום בדף
    document.getElementById("shoppingCart").appendChild(productHTML); //מכניס את כל הפרמטרים לעגלת קניות
  }
}

function removeProduct(product) {
  let j = 0;
  for (let i = 0; i < shoppingCart.length && j < 1; i++) {
    if (shoppingCart[i][0] == product) {
      // הלולאה מחפשת את המוצר שמחקנו במערך
      shoppingCart.splice(i, 1); //removes the array item i. מוחקת אותו מהמערך
      renderCartFromArray(); //מפעיל פוקנציה עגלת קניות מעודכנת
      j++;
    }
  }
}
