import { intializeApp } from "https://www.gstatic.com/-default-rtdb.firebaseio.com/";
import { getDatebase, ref, push} from "https://fir-app-50117-default-rtdb.firebaseio.com/";

const appSettings = {
    databaseURL: "https://fir-app-50117-default-rtdb.firebaseio.com/"
}

const app = intializeApp(appSettings)
const database = getDatebase(app)
const shoppingListInDB = ref(database, 'shoppingList')

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button')
const shoppingList = document.getElementById('shopping-list')

addButton.addEventListener('click', function() {
    let inputValue = inputField.value

    push(shoppingListInDB, inputValue)

    function clearInputField() {
        inputField.value = ""
    }
    function appendItemToShoppingList(itemValue) {
    shoppingList.innerHTML += `<li>${inputValue}</li>`
    }
})    