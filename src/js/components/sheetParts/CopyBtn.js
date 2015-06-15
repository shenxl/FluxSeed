/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppAction = require('../../actions/AppAction');

var CopyBtn = React.createClass({
	handleClick:function(){
		AppAction.copyItem(this.props.itemId,this.props.index);
	},

	render: function() {
		return (
            <button className="btn btn-success" onClick={this.handleClick}>复制</button>
		);
	}

});

module.exports = CopyBtn;