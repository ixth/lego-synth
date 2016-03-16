var Mn = require('backbone.marionette');

module.exports = Mn.ItemView.extend({
    template: '#param-view-template',

    behaviors: [
        {
            behaviorClass: require('behaviors/movable')
        }
    ]
});