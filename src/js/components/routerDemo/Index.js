/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var RaisedButton = mui.RaisedButton;
var Link = Router.Link;
var RouteHandle = Router.RouteHandler;

var styles = mui.Styles;
var Spacing = styles.Spacing;

var Index = React.createClass({

    getStyles: function () {
        return {
            root: {
                paddingTop: Spacing.desktopKeylineIncrement + 5 + 'px'
            }
        }
    },

    render: function() {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <div className="container">
                    <h1>I`m Index</h1>
                    <br/>
                    <Link to="message" params={{id : "123"}}><RaisedButton label="Show Message" primary={true} /></Link>
                    <RouteHandle/>
                </div>
            </div>

        );
    }

});

module.exports = Index;