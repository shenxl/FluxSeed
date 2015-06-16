/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppAction = require('../../actions/AppAction');
var DeleteBtn = React.createClass({
	handleClick:function(e){
		AppAction.delectItem(this.props.itemId);
		e.stopPropagation();
	},
	render: function() {
		return (
            <button className="btn btn-danger" onClick={this.handleClick}>删除</button>
		);
	}

});

module.exports = DeleteBtn;