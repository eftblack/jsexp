/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    if (operations.length === 0) {
        callback(null, []);
    }

    let result = [];
    let done = 0;
    let error = false;

    operations.forEach(function (operation, index) {
        operation(function next(err, data) {
            if (error) {
                return;
            }

            if (err) {
                callback(err);
                error = true;

                return;
            }

            result[index] = data;
            done++;

            if (done === operations.length) {
                callback(null, result);
            }
        });
    });
};