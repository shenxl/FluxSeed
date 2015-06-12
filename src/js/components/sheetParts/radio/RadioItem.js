/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');

var RadioItem = React.createClass({
    handleChange:function(){

    },
    render: function () {
        return (
            <span>
                <input
                    id={this.props.item.id}
                    type="radio"
                    checked={this.props.item.checked}
                    name={this.props.item.name}
                    value={this.props.item.value}
                    onChange={this.handleChange}/>
                <label>{this.props.item.value}</label>
            </span>
        );
    }

});

module.exports = RadioItem;