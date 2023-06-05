import {Item} from "../models/items.js";

export class ItemController {
    constructor() {
        $('#btn-save-item').click(this.handleSaveItem);
        $('#btn-update-item').click(this.handleUpdateItem);
    }

    handleSaveItem() {
        let code = $('#add-item-id').val();
        let name = $('#add-item-name').val();
        let price = $('#add-item-price').val();
        let quantity = $('#add-item-qty').val();

        //creates an item object
        let item = new Item(code, name, price, quantity);

        item_arr.push(item); //adds the item to the array
        updateLocalStorage(item_arr);
        addToItemTable();
    }
    handleUpdateItem() {}
    handleDeleteItem() {}
}

var item = null;

new ItemController();

const item_data = "item"; //key of the array of items in the local storage
let item_arr = [];

/*
$('#btn-save-item').on('click', (event) => {
    let code = $('#item-id').val();
    let name = $('#item-name').val();
    let price = $('#item-price').val();
    let quantity = $('#item-qty').val();

    //creates an item object
    let item = new Item(code, name, price, quantity);

    item_arr.push(item); //adds the item to the array
    updateLocalStorage(item_arr);
    addToItemTable();
});
*/

function updateLocalStorage(item_arr) {
    alert(item_arr[item_arr.length-1].name);
    localStorage.setItem(item_data, JSON.stringify(item_arr));
}

$('#item-table-body').on('click', 'tr', (event) => {
    let id = ($(event.target).closest('tr').find('td').eq(0).text());
    let name = ($(event.target).closest('tr').find('td').eq(1).text());
    let price = ($(event.target).closest('tr').find('td').eq(2).text());
    let qty = ($(event.target).closest('tr').find('td').eq(3).text());
    item = new Item(id, name, price, qty);

    selectRow();
    /*$('#txt-search').val(($(event.target).closest('tr').find('td').eq(0).text()));*/
})


$('#btn-update-item').on('click', () => {
    console.log(item.code);
    $('#update-item-id').val(item.code);
    $('#update-item-name').val(item.name);
    $('#update-item-price').val(item.price);
    $('#update-item-qty').val(item.qty);
})

/*
$('#btn-update-item').on('click', (event) => {
    let code = $('#item-id').val();
    let name = $('#item-name').val();
    let price = $('#item-price').val();
    let quantity = $('#item-qty').val();

    $(event.target).closest('tr').find(code);
})
*/

function clearItemTable(){
    $('#item-table tbody').empty();
}

function addToItemTable(){//loads the item data from the local storage to the table
    clearItemTable();
    /*
    let item_array = localStorage.getItem(item_data); //gives a string array of data in the item data array in the local storage
    item_arr = JSON.parse(item_array); //converts the string array to an object(item) array(**You can't give empty objects to JSON.parse())
     */
    if (JSON.parse(localStorage.getItem(item_data))) { //checks whether the array is empty or not
        item_arr = JSON.parse(localStorage.getItem(item_data));
        console.log(item_arr);
        item_arr.map(function (i){
            console.log(i._code);
            $('#item-table-body').append('<tr>' +
                '<td>' + i._code + '</td>' +
                '<td>' + i._name + '</td>' +
                '<td>' + i._price + '</td>' +
                '<td>' + i._qty + '</td></tr>')
        });
    } else {
        alert("No data found in local storage!");
    }
}

addToItemTable();

/*update button action listener*/
$('#btn-update-i').on('click', () => {
    let code = $('#update-item-id').val();
    let name = $('#update-item-name').val();
    let price = $('#update-item-price').val();
    let qty = $('#update-item-qty').val();

    let i = loop_array($('#update-item-id').val()); //returns the location where the element is in the array;
    console.log(i);

    if (i != -1) {
        var updated_item = new Item(code, name, price, qty);
        item_arr[i] = updated_item;
        updateLocalStorage(item_arr);
        alert("Updated Successfully!");
    } else {
        alert("Invalid entry");
    }
    addToItemTable();
})

/*delete button action listener*/
$('#btn-delete-item').on('click', () => {
    let code = $('#update-item-id').val();
    let name = $('#update-item-name').val();
    let price = $('#update-item-price').val();
    let qty = $('#update-item-qty').val();

    let i = loop_array($('#update-item-id').val());
    console.log(i);

    if (i != -1) {
        var updated_item = new Item(code, name, price, qty);
        item_arr[i] = updated_item;
        updateLocalStorage(item_arr);
        alert("Updated Successfully!");
    } else {
        alert("Invalid entry");
    }
    addToItemTable();
})

function loop_array (code) {
    for (let i = 0; i < item_arr.length; i++) {
        if (item_arr[i]._code == code) {
            return i;
        }
    }
    return -1;
}



// Add event listener to each row
function selectRow() {
    console.log('hello');
    const table = document.getElementById('item-table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', function() {
            // Remove the previously selected row's background color
            const previouslySelectedRow = table.getElementsByClassName('selected-row')[0];
            if (previouslySelectedRow) {
                previouslySelectedRow.classList.remove('selected-row');
            }

            // Set the background color of the clicked row
            this.classList.add('selected-row');
        });
    }
}

/*

$(document).on('click', function(event) {
    const table = document.getElementById('item-table');
    console.log('Clicked outside!')
    // Check if the click occurred outside the table
    const isClickedOutsideTable = !$(event.target).closest('#item-table').length;

    // If clicked outside the table, remove the background color from the selected row
    if (isClickedOutsideTable) {
        console.log('Selected');
        const selectedRow = table.getElementsByClassName('.selected-row');
        console.log(selectedRow.length);
        if (selectedRow.length) {
            console.log('Changed');
            selectedRow.removeClass('selected-row');
        }
    }
});

*/
