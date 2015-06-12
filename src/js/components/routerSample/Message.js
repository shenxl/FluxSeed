/**
 * Created by Administrator on 2015/6/11.
 */
var React = require('react');
var Message = React.createClass({

    render: function() {
        return (
            <div>
                <h1>I`m Message</h1>
                <h2>from  {this.props.params.id}</h2>
            </div>
        );
    }

});

module.exports = Message;