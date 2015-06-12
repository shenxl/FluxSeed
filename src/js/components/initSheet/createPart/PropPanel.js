/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppActions = require('../../../actions/AppAction');
var AppConstants = require('../../../constants/AppConstants');
var RadioProps = require('../../sheetParts/choose/RadioProps');

var PropPanel = React.createClass({

    handleChange :function(e){
        AppActions.updateName(e.target.value);
    },
    
	render: function() {
        var show = (<pre>当前未选择控件，请从左侧拖动</pre>);
        var selectItem = this.props.item;
        if(selectItem.id !== undefined){
            var _specialProps = null;
            switch(selectItem.type){
                case AppConstants.PART_TYPE.RADIO_CONTROL:
                    _specialProps = (<RadioProps data={selectItem} />);
                    break;
                case AppConstants.PART_TYPE.CHECKBOX_CONTROL:
                    _specialProps = (<RadioProps data={selectItem} />);
                    break;
            }
            show = (
                <div>
                    <label>标题</label><br/>
                    <input type="text" value={selectItem.name} onChange={this.handleChange} />
                    {_specialProps}
                </div>
            )
        }
		return (
            <div className="col-md-4 cPanel">
                <h2>控件属性面板</h2>
                {show}
            </div>
		);
	}

});

module.exports = PropPanel;