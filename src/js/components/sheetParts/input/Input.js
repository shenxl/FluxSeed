/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var CopyBtn = require('../CopyBtn');

var Input = React.createClass({
	render: function() {
		return (
            <div>
                <label>{this.props.data.name}</label>
                <CopyBtn itemId={this.props.data.id} index={this.props.index}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                <input value={this.props.data.default} type="text" readOnly="readOnly"/>
            </div>
		);
	}

});

module.exports = Input;