var Mn = require('backbone.marionette');

require('normalize-css');
require('./style.css');

module.exports = Mn.LayoutView.extend({
    regions: {
        workspace: '#workspace'
    }
});