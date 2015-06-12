/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppConstants =require('../../../constants/AppConstants');

var Input = require('../../sheetParts/input/Input');
var TextArea = require('../../sheetParts/textarea/TextArea');
var Radio = require('../../sheetParts/radio/Radio');

var ShowPanel = React.createClass({

	render: function() {
        var controls = [];

        this.props.items.forEach(function (item, index) {
            switch (item.type) {
                case AppConstants.PART_TYPE.INPUT_CONTROL:
                    controls.push(<Input data={item} key={index}/>);
                    break;
                case AppConstants.PART_TYPE.TEXTAREA_CONTROL:
                    controls.push(<TextArea data={item} key={index}/>);
                    break;
                case AppConstants.PART_TYPE.RADIO_CONTROL:
                    controls.push(<Radio data={item} key={index}/>);
                    break;
            }
        });

		return (
            <div className="col-md-6">
                <h2>控件展示面板</h2>
                <ul>
                    {controls}
                </ul>
            </div>
		);
	}

});

module.exports = ShowPanel;