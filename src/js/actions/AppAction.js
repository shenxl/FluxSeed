/**
 * Created by Shenxl on 2015/6/8.
 */
var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

var AppActions = {

    /*
    * todo 定义不同的Action类型，传入dispatcher中。供页面或WebAPI调用，并由store逻辑执行
    * 具体调用实例：
    * doSomething:function(arg1,arg2){
    *   AppDispatcher.handleViewAction({
    *       actionType : AppConstants.VIEW_ACTION.doSomething,
    *       arg1 : arg1
    *       arg2 : arg2
    *   })
    * }
    */

    addPart : function(item){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.VIEW_ACTION.ADD_PART,
            item:item
        })
    },

    selectItem : function(id){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.VIEW_ACTION.SELECT_ITEM,
            id:id
        })
    },

    delectItem : function(id){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.VIEW_ACTION.DELETE_ITEM,
            id:id
        })
    },

    updateName: function(value){
        AppDispatcher.handleViewAction({
            actionType : AppConstants.VIEW_ACTION.UPDATE_NAME,
            value:value
        })
    }


};

module.exports  = AppActions;