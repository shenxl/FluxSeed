/**
 * Created by Shenxl on 2015/6/15.
 */
var React = require('react');
var AppAction = require('../../../actions/AppAction');

var ShowPartPanel = React.createClass({
    handleChick:function(){
        AppAction.selectItem(this.props.itemId);
    },

	render: function() {
		return (
        <li onClick={this.handleChick} className="item sortable">
            <div className="row">
                <div className="col-md-11">{this.props.node}</div>
                <div className="col-md-1"><sapn className="glyphicon glyphicon-align-justify handler"></sapn></div>
            </div>
        </li>
		);
	}

});

module.exports = ShowPartPanel;