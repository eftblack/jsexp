
/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    let dateObject = {
        _value: null,
        get value() {
            return this + "";
        },
        facade: function(date) {
            if(date instanceof Date) this._value = date;
            else {
                let dateArr = date.split(/[\s:-]/);
                this._value = new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3], dateArr[4]));
            }
            return this;
        },
        add: function(value, type) {
            if (value > 0 && type in this.method) {
                return this.setValue(value, this.method[type]);
            } else {
                throw new TypeError("Передано неверное значение");
            }
        },
        subtract: function(value, type) {
            if (value > 0 && type in this.method) {
                return this.setValueSubtract(value, this.method[type]);
            } else {
                throw new TypeError("Передано неверное значение");
            }
        },
        method: {
            "years": "FullYear",
            "months": "Month",
            "days": "Date",
            "hours": "Hours",
            "minutes": "Minutes"
        },
        setValue: function(value, method) {
            this._value['setUTC' + method](value + this._value['getUTC' + method]());
            return this;
        },
        setValueSubtract: function(value, method) {
            this._value['setUTC' + method](-value + this._value['getUTC' + method]());
            return this;
        },
        valueOf: function() {
            let year = this._value.getFullYear();
            let month = this._value.toLocaleString("ru",{timeZone : "UTC",month: '2-digit'});
            let day = this._value.toLocaleString("ru",{timeZone : "UTC",day: '2-digit'});
            let time = this._value.toLocaleString("ru",{timeZone : "UTC", hour: '2-digit', minute: '2-digit' });
            let dates = year + "-" + month + "-" + day + " " + time;
            return dates;
        },
        toString: this.valueOf,
    };
    return dateObject.facade(date);
};



