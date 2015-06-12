/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppAction = require('../../actions/AppAction');

var SelectBtn = React.createClass({
	handleClick:function(){
		AppAction.selectItem(this.props.itemId);
	},

	render: function() {
		return (
            <button onClick={this.handleClick}>选中</button>
		);
	}

});

module.exports = SelectBtn;