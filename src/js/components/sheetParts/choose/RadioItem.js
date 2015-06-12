/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var RadioItem = React.createClass({
    handleChange:function(e){
        AppAction.changeRadioStatus(this.props.itemId,this.props.item.id,e.target.checked)
    },
    render: function () {
        var name = this.props.item.name;
        if(this.props.flag){
            name += this.props.flag;
        }
        return (
                <input
                    id={this.props.item.id}
                    type={this.props.item.type}
                    checked={this.props.item.checked}
                    name={name}
                    value={this.props.item.value}
                    onChange={this.handleChange} />
        );
    }

});

module.exports = RadioItem;