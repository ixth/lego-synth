var InputModel = require('components/input/model');

module.exports = InputModel.extend({
    validate: function (attributes) {
        if (0 > attributes.value || attributes.value > 1) {
            return 'Value should be between 0 and 1';
        }
    }
});