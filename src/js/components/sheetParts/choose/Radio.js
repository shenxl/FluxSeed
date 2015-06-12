/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var RadioItem = require('./RadioItem');
var DeleteBtn = require('../DeleteBtn');
var SelectBtn = require('../SelectBtn');

var Radio = React.createClass({

	render: function() {
        var itemList = [];
        var itemid = this.props.data.id;
        this.props.data.itemsData.forEach(function (item, index){
            itemList.push(
                <span key={index} >
                    <RadioItem itemId={itemid} item={item}/>
                    <label>{item.value}</label>
                </span>
            )
        });

		return (
            <li>
                <label>{this.props.data.name}</label>
                <SelectBtn itemId={this.props.data.id}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                {itemList}
            </li>
		);
	}

});

module.exports = Radio;