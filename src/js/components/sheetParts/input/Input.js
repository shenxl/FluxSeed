/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var SelectBtn = require('../SelectBtn');

var Input = React.createClass({
	render: function() {
		return (
            <li>
                <label>{this.props.data.name}</label>
                <SelectBtn itemId={this.props.data.id}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                <input type="text"/>
            </li>
		);
	}

});

module.exports = Input;