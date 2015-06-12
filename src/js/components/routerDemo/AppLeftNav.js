/**
 * Created by Administrator on 2015/6/11.
 */

var React = require('react'),

    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Link = Router.Link,

    mui = require('material-ui'),
    LeftNav = mui.LeftNav,
    MenuItem = mui.MenuItem,

    styles = mui.Styles,

    Typography = styles.Typography,
    Spacing = styles.Spacing,
    Colors = styles.Colors,
    ThemeManager = new styles.ThemeManager();


var menuItems = [
    { route: 'home', text: 'Home' },
    { route: 'index', text: 'Index' }
];

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
        };
    },

    getStyles : function() {
        return {
            cursor: 'pointer',
            //.mui-font-style-headline
            fontSize: '24px',
            color: Typography.textFullWhite,
            lineHeight: Spacing.desktopKeylineIncrement + 'px',
            fontWeight: Typography.fontWeightLight,
            backgroundColor: Colors.cyan500,
            paddingLeft: Spacing.desktopGutter,
            paddingTop: '0px',
            marginBottom: '8px'
        };
    },

    toggle:function() {
        this.refs.leftNav.toggle();
    },

    _getSelectedIndex:function() {
        var currentItem;

        for (var i = menuItems.length - 1; i >= 0; i--) {
            currentItem = menuItems[i];
            if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
        }
    },

    _onLeftNavChange:function(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    },

    _onHeaderClick:function() {
        this.context.router.transitionTo('app');
        this.refs.leftNav.close();
    },

	render: function() {

        var header = (
            <div style={this.getStyles()}  onTouchTap={this._onHeaderClick}>
                App Tester
            </div>
        );

		return (
            <div>
                <LeftNav
                    ref="leftNav"
                    docked={false}
                    isInitiallyOpen={false}
                    header={header}
                    menuItems={menuItems}
                    selectedIndex={this._getSelectedIndex()}
                    onChange={this._onLeftNavChange} />
            </div>
		);
	}
});

module.exports = Master;