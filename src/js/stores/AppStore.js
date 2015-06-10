/**
 * Created by Shenxl on 2015/6/8.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = AppConstants.CHANGE_EVENT;


var AppStore = assign({},EventEmitter.prototype,{
    emitChange : function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback)
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback)
    },

    dispatcherIndex:AppDispatcher.register(function(payload){
        var action = payload.action; // this is our action from handleViewAction
        switch(action.actionType){
            // todo 根据action不同类型，执行相应的动作
        }
        AppStore.emitChange();
        return true;
    })
});

module.exports = AppStore;
