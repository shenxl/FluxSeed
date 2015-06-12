/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var AppActions = require('../../../actions/AppAction');

var PartIcon = React.createClass({

    handleClick:function(){
        AppActions.addPart(this.props.item);
    },
	render: function() {
		return (
            <button className="choosepanel" onClick={this.handleClick}>
                <span {...this.props} ></span>
                {this.props.label}
            </button>
		);
	}

});

module.exports = PartIcon;