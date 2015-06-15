/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var RadioItem = require('./RadioItem');
var DeleteBtn = require('../DeleteBtn');
var CopyBtn = require('../CopyBtn');

var Radio = React.createClass({
	render: function() {
        var itemList = [];
        var itemid = this.props.data.id;
        this.props.data.itemsData.forEach(function (item, index){
            itemList.push(
                <span key={index} >
                    <RadioItem itemId={itemid} item={item} readonly={true}/>
                    <label>{item.value}</label>
                </span>
            )
        });

		return (
            <div>
                <label>{this.props.data.name}</label>
                <CopyBtn itemId={this.props.data.id} index={this.props.index}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                {itemList}
            </div>
		);
	}

});

module.exports = Radio;