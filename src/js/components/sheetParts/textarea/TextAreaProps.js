/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var TextAreaProps = React.createClass({

	handleChange:function(e){
		var value = e.target.value;
		AppAction.changeDefault(value);
	},
	render: function() {
		return (
			<li>
				<label>默认值</label>
				<br/>
				<textarea value={this.props.data.default} name="" cols="65" rows="4" onChange={this.handleChange}></textarea>
			</li>
		);
	}

});

module.exports = TextAreaProps;