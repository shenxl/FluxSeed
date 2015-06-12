/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppAction = require('../../actions/AppAction');
var DeleteBtn = React.createClass({
	handleClick:function(){
		AppAction.delectItem(this.props.itemId);
	},
	render: function() {
		return (
            <button onClick={this.handleClick}>删除</button>
		);
	}

});

module.exports = DeleteBtn;