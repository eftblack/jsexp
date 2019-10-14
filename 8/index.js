module.exports = function (date) {
    let dateObject = {
        dateValue: null,
        get value() {
            return this + "";
        },
        facade: function(date) {
            if(date instanceof Date) this.dateValue = date;
            else {
                let dateArr = date.split(/[\s:-]/);
                this.dateValue = new Date(Date.UTC(dateArr[0], dateArr[1] - 1, dateArr[2], dateArr[3], dateArr[4]));
            }
            return this;
        },
        add: function(value, type) {
            if (value > 0 && type in this.method) {
                return this.setValue(value, this.method[type]);
            } else {
                throw new TypeError("Invalid input");
            }
        },
        subtract: function(value, type) {
            if (value > 0 && type in this.method) {
                return this.setValueSubtract(value, this.method[type]);
            } else {
                throw new TypeError("Invalid input");
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
            this.dateValue['setUTC' + method](value + this.dateValue['getUTC' + method]());
            return this;
        },
        setValueSubtract: function(value, method) {
            this.dateValue['setUTC' + method](-value + this.dateValue['getUTC' + method]());
            return this;
        },
        valueOf: function() {
            let year = this.dateValue.getFullYear();
            let month = this.dateValue.toLocaleString("ru",{timeZone : "UTC",month: '2-digit'});
            let day = this.dateValue.toLocaleString("ru",{timeZone : "UTC",day: '2-digit'});
            let time = this.dateValue.toLocaleString("ru",{timeZone : "UTC", hour: '2-digit', minute: '2-digit' });
            return year + "-" + month + "-" + day + " " + time;
        },
        toString: this.valueOf,
    };
    return dateObject.facade(date);
};