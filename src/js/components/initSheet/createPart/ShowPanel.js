/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppConstants = require('../../../constants/AppConstants');
var AppAction = require('../../../actions/AppAction');
var AppStore = require('../../../stores/AppStore');
var StoreWatchMixin = require('../../../mixins/storeWatchMixin');

var ShowPartPanel = require('../../sheetParts/panel/ShowPartPanel');

var Input = require('../../sheetParts/input/Input');
var TextArea = require('../../sheetParts/textarea/TextArea');
var Radio = require('../../sheetParts/choose/Radio');
var DatePicker = require('../../sheetParts/date/DatePicker');

function getShowItems(){
   return {
       items : AppStore.getShowItems()
   }
}

var ShowPanel = React.createClass({
    mixins:[StoreWatchMixin(getShowItems)],

    componentDidMount: function () {
        $("#sortable-basic").kendoSortable({
            handler: ".handler",
            hint: function (element) {
                return element.clone().addClass("hint");
            },
            placeholder: "<li class='item'><div class='placeholder'>放置到此处</div></li>",
            change: this.handlerChange
        });
    },

    handlerChange: function (e) {
        var newIndex = e.newIndex,
            oldIndex = e.oldIndex;
        AppAction.sortPartsItem(newIndex, oldIndex);
        return false;
    },
    forceIt:function(){
      this.forceUpdate();
    },

    render: function () {
        var controls = [];
        this.state.items.forEach(function (item, index) {
            switch (item.type) {
                case AppConstants.PART_TYPE.INPUT_CONTROL:
                    controls.push(<ShowPartPanel
                        itemId={item.id}
                        key={item.id}
                        node={<Input data={item} index={index} />}
                        />);
                    break;
                case AppConstants.PART_TYPE.TEXTAREA_CONTROL:
                    controls.push(<ShowPartPanel
                        itemId={item.id}
                        key={item.id}
                        node={<TextArea data={item}  index={index}/>}
                        />);
                    break;
                case AppConstants.PART_TYPE.RADIO_CONTROL:
                    controls.push(<ShowPartPanel
                        itemId={item.id}
                        key={item.id}
                        node={<Radio data={item}  index={index} />}
                        />);
                    break;
                case AppConstants.PART_TYPE.CHECKBOX_CONTROL:
                    controls.push(<ShowPartPanel
                        itemId={item.id}
                        key={item.id}
                        node={<Radio data={item}  index={index} />}
                        />);
                    break;
                case AppConstants.PART_TYPE.DATE_CONTROL:
                    controls.push(<ShowPartPanel
                        itemId={item.id}
                        key={item.id}
                        node={ <DatePicker data={item}  index={index} />}
                        />);
                    break;
            }
        });

        return (
            <div className="col-md-6">
                <h2>控件展示面板</h2>
                <button onClick={this.forceIt}>刷新一下试试</button>
                <ul id="sortable-basic">
                    {controls}
                </ul>
            </div>
        );
    }

});

module.exports = ShowPanel;