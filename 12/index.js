module.exports = Collection;

function Collection() {
    this.arr = [];
}


// collection methods
Collection.prototype.values = function () {
    return this.arr;
};

Collection.prototype.at = function() {
    if ((arguments[0] > 0) && (arguments[0] <= this.arr.length)) {
        return this.arr[arguments[0] - 1];
    }
    else {
        return null;
    }
};

Collection.prototype.append = function () {
    if (arguments[0] instanceof Collection) {
        this.arr = this.arr.concat(arguments[0].values());
    } else {
        this.arr = this.arr.concat(arguments[0]);
    }

    return this.arr;
};

Collection.prototype.removeAt = function() {
    if ((arguments[0] > 0) && (arguments[0] <= this.arr.length)) {
        this.arr.splice(arguments[0] - 1, 1);
        return true;
    } else {
        return false;
    }

};


Collection.prototype.count = function() {
    if (this.arr.length > 0){
        return this.arr.length;
    } else {
        return 0;
    }

};


// create collection from the array

Collection.from = function () {
    let collection = new Collection();

    for (let i=0; i<arguments.length; i++) {
        collection.arr = collection.arr.concat(arguments[i]);
    }

    //}

    return collection;

};