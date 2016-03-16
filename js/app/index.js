var Mn = require('backbone.marionette');
var AppView = require('app/view');
var RotaryView = require('components/rotary/view');

module.exports = Mn.Application.extend({
    initialize: function () {
        this.rootView = new AppView({ el: 'body' });
        this.rootView.getRegion('workspace').show(new RotaryView(), {});
    }
});