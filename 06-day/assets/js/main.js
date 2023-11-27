const btnAddList = document.getElementById("btn-add");
const btnEditList = document.getElementById("btn-edit");
const btnDeleteList = document.getElementById("btn-delete");


// Adding List
const addList = () => {
    console.log("Adding List Clicked");
}

// Edit List
const editList = () => {
    console.log("Edit List Clicked");
}

// Delete List
const delteList = () => {
    console.log("Delete List Clicked");
}

btnAddList.addEventListener('click', addList);
btnEditList.addEventListener('click', editList);
btnDeleteList.addEventListener('click', delteList);

