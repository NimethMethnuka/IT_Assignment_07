import {Customer} from "../models/customer.js";

export class CustomerController {
    constructor() {
        $('#new-customer').click(this.handleSaveCustomer);
        $('#update-customer').click(this.handleUpdateCustomer);
        $('#delete-customer').click(this.handleDeleteCustomer);
    }

    handleSaveCustomer() {
        console.log("Handle Save Customer!");
    }
    handleUpdateCustomer() {
        console.log("Handle Update Customer!");
    }
    handleDeleteCustomer() {
        console.log("Handle Delete Customer!");
    }

}

new CustomerController();
/*
const data = "DATA"; //local storage saved key
var cust_array = []; //customer temp array
*/
