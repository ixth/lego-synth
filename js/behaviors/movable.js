var Backbone = require('backbone');

module.exports = require('./draggable').extend({
    onDragStart: function () {
        Backbone.$(document.body).css('cursor', '-webkit-grabbing');
        this.offset = this.$el.offset();
        this.$el.appendTo(this.$el.parent());
    },

    onDragEnd: function (e) {
        Backbone.$(document.body).css('cursor', '');
        this.$el
            .css('transform', '')
            .offset({
                left: this.offset.left + e.deltaX,
                top: this.offset.top + e.deltaY
            });
    },

    onDrag: function (e) {
        this.$el.css('transform', 'translate(' + e.deltaX + 'px, ' + e.deltaY + 'px)');
    }
});