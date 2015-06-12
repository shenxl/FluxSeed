/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


var Index = React.createClass({

    render: function () {
        return (
            <div>
                <h1>I`m Index</h1>
                <br/>
                <Link to="message" params={{id : "123"}}><input type="button" value="Show Message" className="btn btn-success"/></Link>
                <RouteHandler />
            </div>
        );
    }

});

module.exports = Index;