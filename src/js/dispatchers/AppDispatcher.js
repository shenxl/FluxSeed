/**
 * Created by Shenxl on 2015/6/8.
 */
var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher, {
    handleViewAction: function(action){
        console.log(action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action:action
        })
    }
});

module.exports = AppDispatcher;