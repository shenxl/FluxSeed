/**
 * Created by ios_Mac on 15-6-8.
 * 
 */
var React = require('react');
var Header = require('./../header/header');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Template = React.createClass({

	render: function() {
		return (
		<div>
			<Header />
			<div className="container-fluid">
				<RouteHandler />
			</div>
		</div>
		);
	}

});
module.exports = Template;