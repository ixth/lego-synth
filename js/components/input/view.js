var Mn = require('backbone.marionette');

var InputModel = require('./model');

module.exports = Mn.ItemView.extend({
    tagName: 'input',

    template: false,

    modelEvents: {
        'change:value': function (model, value) {
            this.triggerMethod('change', value);
        }
    },

    initialize: function () {
        this.model = new InputModel({ value: options.value });
        this.bindEntityEvents(this.model, this.getOption('modelEvents'));
    },

    setValue: function (value) {
        this.$el.val(value);
    },

    onChange: function (value) {
        this.setValue(value);
    }
});