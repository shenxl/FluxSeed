/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var PartIcon = require('./PartIcon');
var AppStore = require('../../../stores/AppStore');

var ChoosePanel = React.createClass({
	handlerClick:function(){
		console.log(AppStore.getSaveItem());
	},

	render: function() {
		var icons = this.props.items.map(function (item) {
			return (
				<div className="col-md-8"  key={item.id}>
					<PartIcon label={item.label} item={item} className={item.icon}/>
				</div>
			);
		})

		return (
        <div className="col-md-2">
			<h2>控件选择面板</h2>
			<div className="row">
				{icons}
			</div>
			<button onClick={this.handlerClick}>保存</button>
        </div>
		);
	}

});

module.exports = ChoosePanel;