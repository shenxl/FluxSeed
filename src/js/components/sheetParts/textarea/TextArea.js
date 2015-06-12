/**
 * Created by Shenxl on 2015/6/12.
 */
/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var SelectBtn = require('../SelectBtn');

var TextArea = React.createClass({
    render: function() {
        return (
            <li>
                <label>{this.props.data.name}</label>
                <SelectBtn itemId={this.props.data.id}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                <textarea name="" cols="65" rows="4"></textarea>
            </li>
        );
    }

});

module.exports = TextArea;