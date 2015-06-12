/**
 * Created by ios_Mac on 15-6-10.
 */
var React = require('react');
var mui = require('material-ui');
var styles = mui.Styles;
var Spacing = styles.Spacing;
var Home = React.createClass({

    getStyles: function () {
        return {
            root: {
                paddingTop: Spacing.desktopKeylineIncrement + 5 + 'px'
            }
        }
    },

    render: function () {
        var styles = this.getStyles();
        return (
            <div style={styles.root}>
                <div className="container">
                    <h1>I`m Home</h1>
                </div>
            </div>
        );
    }

});
module.exports = Home;