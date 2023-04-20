import { intializeApp } from "https://fir-app-50117-default-rtdb.firebaseio.com/";
import { getDatebase, ref, push} from "https://fir-app-50117-default-rtdb.firebaseio.com/";

const appSettings ={
    databaseURL: "https://fir-app-50117-default-rtdb.firebaseio.com/"
}

const app = intializeApp(appSettings)
const database = getDatebase(app)
const shoppingListInDB = ref(database, 'shoppingList')

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', function() {
    let inputValue = inputField.value

    push(shoppingListInDB, inputvalue)
    console.log(inputField.value)
}) 