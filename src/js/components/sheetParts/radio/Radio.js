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
        this.props.data.itemsData.forEach(function (item, index){
            itemList.push(
                <RadioItem item={item} key={index}/>
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