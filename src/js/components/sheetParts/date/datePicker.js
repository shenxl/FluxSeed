/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var CopyBtn = require('../CopyBtn');

var datepicker = null;
var DatePicker = React.createClass({

    componentDidMount: function() {
        $(React.findDOMNode(this.refs.datePicker)).kendoDatePicker({
            format:"yyyy-MM-dd"
        });
        datepicker = $(React.findDOMNode(this.refs.datePicker)).data("kendoDatePicker");
        datepicker.readonly();
    },
    componentWillReceiveProps:function(nextProps){
        datepicker = $(React.findDOMNode(this.refs.datePicker)).data("kendoDatePicker");
        datepicker.value(nextProps.data.default);
    },
	render: function() {
		return (
        <div>
            <label>{this.props.data.name}</label>
            <CopyBtn itemId={this.props.data.id} index={this.props.index}/>
            <DeleteBtn itemId={this.props.data.id}/>
            <br/>
            <input type="text" ref="datePicker"/>
        </div>

		);
	}

});

module.exports = DatePicker;