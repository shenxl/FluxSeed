/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
var Template = require('./components/routerSample/Template');
var Home = require('./components/routerSample/Home');
var Index = require('./components/routerSample/Index');
var Message = require('./components/routerSample/Message');
var InitSheet = require('./components/initSheet/InitSheet');


var AppRoutes = (
    <Route name="app" path="/" handler={Template}>
        <Route name="home" handler={Home}/>
        <Route name="initSheet" handler={InitSheet}/>
        <Route name="index" handler={Index}>
            <Route name="message" path="messages/:id" handler={Message}/>
        </Route>
        <DefaultRoute handler={Home}/>
    </Route>
);

module.exports = AppRoutes;