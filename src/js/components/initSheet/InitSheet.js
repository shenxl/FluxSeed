/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var ChoosePanel = require('./createPart/ChoosePanel');
var ShowPanel = require('./createPart/ShowPanel');
var PropPanel = require('./createPart/PropPanel');
var AppStore = require('../../stores/AppStore');
var StoreWatchMixin = require('../../mixins/storeWatchMixin');

function getInitPart(){
    return {
        initItems : AppStore.getInitPart(),
        showItems : AppStore.getShowItems(),
        selectItem :AppStore.getSelectItem()
    }
}

var InitSheet = React.createClass({
    mixins:[StoreWatchMixin(getInitPart)],
	render: function() {
		return (
        <div>
            <ChoosePanel  items={this.state.initItems}/>
            <ShowPanel  items={this.state.showItems}/>
            <PropPanel  item={this.state.selectItem}/>
        </div>
		);
	}

});

module.exports = InitSheet;