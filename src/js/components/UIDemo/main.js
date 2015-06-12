/**
 * Created by ios_Mac on 15-6-10.
 */
var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    styles = mui.Styles,
    ThemeManager = new mui.Styles.ThemeManager(),
    Link = require('react-router').Link;

var MyAwesomeReactComponent = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <div style={styles.container}>
                <Link to="home">
                    <RaisedButton label="Home" primary={true}></RaisedButton>
                </Link>
            </div>
        );
    }
});

module.exports = MyAwesomeReactComponent;