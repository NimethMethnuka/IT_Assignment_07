export class Customer {
    constructor(id, fName, lName, address) {
        this._id = id; //we use an underscore to denote that the attribute is private
        this._fName = fName;
        this._lName = lName;
        this._address = address;
    }

    get id () {
        return this._id;
    }

    set id (id) {
        this._id = id;
    }

    get fName () {
        return this._fName;
    }

    set fName (fName) {
        this._fName = fName;
    }

    get lName () {
        return this._lName;
    }

    set lName (lName) {
        this._lName = lName;
    }

    get address () {
        return this._address;
    }

    set address (address) {
        this._address = address;
    }
}