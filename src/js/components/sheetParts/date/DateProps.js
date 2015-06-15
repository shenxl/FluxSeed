/**
 * Created by Shenxl on 2015/6/15.
 */
/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var SelectBtn = require('../CopyBtn');
var AppAction = require('../../../actions/AppAction');

var datepicker = null;

var DateProps = React.createClass({

    componentDidMount: function() {
        $(React.findDOMNode(this.refs.datePicker)).kendoDatePicker({
            culture:"zh-CN",
            format:"yyyy-MM-dd",
            change:this.handleChange
        });
        datepicker = $(React.findDOMNode(this.refs.datePicker)).data("kendoDatePicker");
    },
    componentWillReceiveProps: function(nextProps) {
        datepicker = $(React.findDOMNode(this.refs.datePicker)).data("kendoDatePicker");
        datepicker.value(nextProps.data.default);
    },

    handleChange:function(){
        AppAction.changeDefault(datepicker.value());
    },

    render: function() {
        return (
            <li>
                <label>默认值</label>
                <br/>
                <input ref="datePicker" />
            </li>

        );
    }

});

module.exports = DateProps;