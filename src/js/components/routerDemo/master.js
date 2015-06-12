/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var AppLeftNav = require('./AppLeftNav');
var mui = require('material-ui');

var Colors = mui.Styles.Colors;
var Typography = mui.Styles.Typography;
var ThemeManager = new mui.Styles.ThemeManager();

var AppBar = mui.AppBar;
var AppCanvas = mui.AppCanvas;
var Menu = mui.Menu;
var IconButton= mui.IconButton;

var Master = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    contextTypes :{
        router: React.PropTypes.func
    },

    getChildContext:function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        }
    },

    getStyles:function() {
        var darkWhite = Colors.darkWhite;
        return {
            footer: {
                backgroundColor: Colors.grey900,
                textAlign: 'center'
            },
            a: {
                color: darkWhite
            },
            p: {
                margin: '0 auto',
                padding: '0',
                color: Colors.lightWhite,
                maxWidth: '335px'
            },
            iconButton: {
                color: darkWhite
            }
        };
    },

    render:function() {
        var styles = this.getStyles();
        var title =
            this.context.router.isActive('home') ? 'Home' :
                this.context.router.isActive('index') ? 'Index' :
                    this.context.router.isActive('components') ? 'Components' : '';

        var githubButton = (
            <IconButton
                iconStyle={styles.iconButton}
                iconClassName="muidocs-icon-custom-github"
                href="https://github.com/shenxl/FluxSeed"
                linkButton={true} />
        );

        return (
            <AppCanvas>
                <AppBar
                    onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap}
                    title={title}
                    iconElementRight={githubButton}/>
                <AppLeftNav ref="leftNav" />
                <RouteHandler />
            </AppCanvas>
        );
    },

    _onLeftIconButtonTouchTap:function() {
        this.refs.leftNav.toggle();
    }
});

module.exports = Master;