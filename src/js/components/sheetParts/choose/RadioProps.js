/**
 * Created by ios_Mac on 15-6-12.
 */
var React = require('react');
var RadioItem = require('./RadioItem');
var AddItem = require('./AddItem');
var RemoveItem = require('./RemoveItem');
var DeleteBtn = require('../DeleteBtn');
var SelectBtn = require('../SelectBtn');

var AppAction = require('../../../actions/AppAction');

var RadioProps = React.createClass({

    handleChange:function(itemId,radioId,e){
        var value = e.target.value;
        AppAction.changeRaidoLabel(itemId,radioId,value);
    },
    render: function() {
        var itemList = [];
        var itemId = this.props.data.id;
        var that = this;
        var length = this.props.data.itemsData.length;

        this.props.data.itemsData.forEach(function (item, index){
            var removeItem = null;
            if(length > 1){
                removeItem = (<RemoveItem itemId={itemId} index={index}/>);
            }
            itemList.push(
                <span key={index} className="col-md-12">
                    <RadioItem itemId={itemId} item={item} flag={'_props'}/>
                    <input type="text"
                           value={item.value}
                           onChange={that.handleChange.bind(null,itemId,item.id)} />
                    <AddItem itemId={itemId} index={index}/>
                    {removeItem}
                </span>
            )
        });

        return (
            <li>
                <label>选项</label>
                <br/>
                <div className="row">
                    {itemList}
                </div>
            </li>
        );
    }

});

module.exports = RadioProps;