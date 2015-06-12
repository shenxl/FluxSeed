/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Redirect = Router.Redirect;
var DefaultRoute = Router.DefaultRoute;

// Here we define all our material-ui ReactComponents.
var Master = require('./components/routerDemo/master');
var Home = require('./components/routerDemo/home');
var Index = require('./components/routerDemo/Index');
var Message = require('./components/routerDemo/Message');


var AppRoutes = (
    <Route name="app" path="/" handler={Master}>
        <Route name="home" handler={Home}/>
        <Route name="index" handler={Index}>
            <Route name="message" path="messages/:id" handler={Message}/>
        </Route>
        <DefaultRoute handler={Home}/>
    </Route>
);

module.exports = AppRoutes;