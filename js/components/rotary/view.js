var Backbone = require('backbone');
var InputView = require('components/input/view');
var RotaryModel = require('./model');

require('./style.css');

module.exports = InputView.extend({
    tagName: 'div',

    className: 'rotary',

    sensivity: 255,

    template: '#rotary-view-template',

    ui: {
        'knob': '.rotary__knob'
    },

    behaviors: [
        {
            behaviorClass: require('behaviors/draggable')
        }
    ],

    initialize: function () {
        this.model = new RotaryModel({ value: options.value });
        this.bindEntityEvents(this.model, this.getOption('modelEvents'));
    },

    setValue: function (fraction) {
        this.ui.knob.css('transform', 'rotate(' + (fraction * 3/4) + 'turn)')
    },

    onDragStart: function () {
        Backbone.$(document.body).css('cursor', '-webkit-grabbing');
        this.prevDelta = 0;
    },

    onDragEnd: function () {
        Backbone.$(document.body).css('cursor', '');
    },

    onDrag: function (e) {
        var delta = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY) / this.sensivity;
        var newValue = this.model.get('value') + (this.prevDelta - delta);
        this.model.set('value', Math.max(0, Math.min(newValue, 1)));
        this.prevDelta = delta;
    }
});