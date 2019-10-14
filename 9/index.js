function query(collection) {
    let emptyMass = [].slice.call(arguments);
    let result = arguments[0];

    for (let i = 1; i < emptyMass.length; i++) {
        if (emptyMass[i].name === 'filterIn') {
            result = emptyMass[i].action(result);
        }
    }

    for (let i = 1; i < emptyMass.length; i++) {
        if (emptyMass[i].name === 'select') {
            result = emptyMass[i].action(result);
        }
    }
    return result;
}

function select() {
    let massLib = [].slice.call(arguments);

    return {
        name: 'select',
        action: function (inputArr) {
            let outputArr = [];
            inputArr.forEach(function (objItem, i, arr) {
                let outputObject = {};
                massLib.forEach(function (argItem, i, arr) {
                    if (!objItem.hasOwnProperty(argItem)){
                        return;
                    }
                    outputObject[argItem] = objItem[argItem];
                });
                outputArr.push(outputObject);
            });
            return outputArr;
        }
    }
}

function filterIn(property, values) {
    let filterMass = [].slice.call(arguments);
    return {
        name: 'filterIn',
        action: function (inputArr) {
            let outputArr = [];
            inputArr.forEach(function (objItem) {
                let check = false;
                for (let i = 0; i < filterMass.length; i = i + 2) {
                    let nextkey = filterMass[i];
                    let keysVal = filterMass[i + 1];

                    check = keysVal.some(
                        function (value) { return value === objItem[nextkey] }
                    );
                    if (!check) {
                        break;
                    }
                }

                if (check) {
                    outputArr.push(objItem)
                }
            });
            return outputArr;
        }
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
