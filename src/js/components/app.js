/**
 * Created by Shenxl on 2015/6/8.
 */

var React = require('react');
var Template = require('./routerDemo/template');
var Router = require('react-router-component');

var Locations = Router.Locations;
var Location = Router.Location;



var App = React.createClass({

    render: function() {
        return (
            <Template>
                <Locations>

                </Locations>
            </Template>
        );
    }

});

module.exports = App ;