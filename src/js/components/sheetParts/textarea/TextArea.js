/**
 * Created by Shenxl on 2015/6/12.
 */
/**
 * Created by Shenxl on 2015/6/12.
 */
var React = require('react');
var DeleteBtn = require('../DeleteBtn');
var CopyBtn = require('../CopyBtn');

var TextArea = React.createClass({

    render: function() {
        return (
            <div>
                <label>{this.props.data.name}</label>
                <CopyBtn itemId={this.props.data.id} index={this.props.index}/>
                <DeleteBtn itemId={this.props.data.id}/>
                <br/>
                <textarea value={this.props.data.default}  name="" cols="55" rows="4" readOnly="readOnly"></textarea>
            </div>
        );
    }

});

module.exports = TextArea;