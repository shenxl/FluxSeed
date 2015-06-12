/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var PartIcon = require('./PartIcon');

var ChoosePanel = React.createClass({

	render: function() {
		var icons = this.props.items.map(function (item) {
			return (
				<div className="col-md-6"  key={item.id}>
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
        </div>
		);
	}

});

module.exports = ChoosePanel;