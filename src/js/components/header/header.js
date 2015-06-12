/**
 * Created by ios_Mac on 15-6-8.
 */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="home">Home</Link></li>
                            <li><Link to="index">Index</Link></li>
                            <li><Link to="initSheet">创建表单</Link></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </form>
                    </div>
                </div>
            </nav>

        );
    }

});
module.exports = Header;