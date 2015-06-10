/**
 * Created by Shenxl on 2015/6/9.
 */
var React = require('react');
var AppStore = require('../stores/AppStore');



var StoreWatchMixin = function(callback){

    return {
        getInitialState: function() {
            return callback(this);
        },

        componentWillMount: function() {
            AppStore.addChangeListener(this._onChange);
        },

        componentWillUnmount: function() {
            AppStore.removeChangeListener(this._onChange);
        },

        _onChange:function(){
            this.setState(callback(this));
        }
    }
};

module.exports = StoreWatchMixin;