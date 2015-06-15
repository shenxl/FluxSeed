/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var InputProps = React.createClass({

	handleChange:function(e){
		var value = e.target.value;
		AppAction.changeDefault(value);
	},
	render: function() {
		return (
			<li>
				<label>默认值</label>
				<br/>
				<input value={this.props.data.default} type="text" onChange={this.handleChange} />
			</li>
		);
	}

});

module.exports = InputProps;