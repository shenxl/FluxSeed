/**
 * Created by ios_Mac on 15-6-13.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var RemoveItem = React.createClass({

	handleChick:function(){
		AppAction.removeChooseItem(this.props.itemId,this.props.index);
	},
	render: function() {
		return (
            <button onClick={this.handleChick}>-</button>
		);
	}

});
module.exports = RemoveItem;