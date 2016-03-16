var Mn = require('backbone.marionette');

module.exports = Mn.Behavior.extend({
    events: {
        'mousedown': 'dragStart'
    },

    dragStart: function (e) {
        this.addMouseHandler();
        this.dragOrigin = {
            x: e.pageX,
            y: e.pageY
        };
        this.view.triggerMethod('dragStart', e);
    },

    dragEnd: function (e) {
        this.view.triggerMethod('dragEnd', this.addDelta(e));
        this.removeMouseHandler();
    },

    handleDrag: function (e) {
        this.view.triggerMethod('drag', this.addDelta(e));
    },

    addDelta: function (e) {
        return Backbone.$.extend(e, {
            deltaX: e.pageX - this.dragOrigin.x,
            deltaY: e.pageY - this.dragOrigin.y
        });
    },

    addMouseHandler: function () {
        this._handleDrag = this.handleDrag.bind(this);
        this._dragEnd = this.dragEnd.bind(this);
        Backbone.$(window).on({
            'mousemove': this._handleDrag,
            'mouseup': this._dragEnd
        });
    },

    removeMouseHandler: function () {
        Backbone.$(window).off({
            'mousemove': this._handleDrag,
            'mouseup': this._dragEnd
        });
    }
});