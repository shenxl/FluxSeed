/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var ShowPartPanel = React.createClass({
    handleChick:function(){
        AppAction.selectItem(this.props.itemId);
    },

	render: function() {
		return (
        <li onClick={this.handleChick}>
            
        </li>
		);
	}

});

module.exports = ShowPartPanel;