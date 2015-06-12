/**
 * Created by Shenxl on 2015/6/8.
 */
var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = AppConstants.CHANGE_EVENT;

// mork一些数据，后续做后台访问逻辑
var _initParts = [
    {
        'id': 1,
        'type': AppConstants.PART_TYPE.INPUT_CONTROL,
        'icon': 'glyphicon glyphicon-heart',
        'label': '单行文字',
        'partData': {
            'name': '未命名',
            'default': '',
            'tooltip': '',
            'validate': {
                'isRequire': false,
                'isDuplicate': false,
                'minLenght': 0,
                'maxLenght': 1000
            }
        }
    }, {
        'id': 2,
        'type': AppConstants.PART_TYPE.TEXTAREA_CONTROL,
        'icon': 'glyphicon glyphicon-pencil',
        'label': '多行文字',
        'partData': {
            'name': '未命名',
            'default': '',
            'tooltip': '',
            'validate': {
                'isRequire': false,
                'isDuplicate': false,
                'minLenght': 0,
                'maxLenght': 1000
            }
        }
    }, {
        'id': 3,
        'type': AppConstants.PART_TYPE.RADIO_CONTROL,
        'icon': 'glyphicon glyphicon-tag',
        'label': '单项选择',
        'partData': {
            'name': '未命名',
            'default': '',
            'tooltip': '',
            'itemsData':[
                {
                    type:'radio',
                    checked: true
                },
                {
                    type: 'radio',
                    checked: false
                },
                {
                    type:'radio',
                    checked: false
                },
                {
                    type:'radio',
                    checked: false
                }],
            'validate': {
                'isRequire': false,
                'isDuplicate': false,
                'minLenght': 0,
                'maxLenght': 1000
            }
        }
    }, {
        'id': 4,
        'type': AppConstants.PART_TYPE.CHECKBOX_CONTROL,
        'icon': 'glyphicon glyphicon-facetime-video',
        'label': '多项选择',
        'partData': {
            'name': '未命名',
            'default': '',
            'tooltip': '',
            'itemsData':[
                {
                    type:'checkbox',
                    checked: true
                },
                {
                    type: 'checkbox',
                    checked: false
                },
                {
                    type:'checkbox',
                    checked: false
                },
                {
                    type:'checkbox',
                    checked: false
                }],
            'validate': {
                'isRequire': false,
                'isDuplicate': false,
                'minLenght': 0,
                'maxLenght': 1000
            }
        }
    }

];

var _showPart=[];
var _selectPart={};
var _addTimes = _showPart.length;

// 向页面中添加一个控件
function _addPart(item){
    var showItem = assign({},item.partData);
    showItem.id = item.id  + '_' +_addTimes;
    showItem.type = item.type;
    // 如果有附属属性，则添加附属属性的ID 与 Name 保证ID不唯一 Name 相同
    if( item.type === AppConstants.PART_TYPE.RADIO_CONTROL ||
        item.type === AppConstants.PART_TYPE.CHECKBOX_CONTROL ){

        var _itemcount = 0;
        var items = item.partData.itemsData.slice();
        showItem.itemsData = items.map(function(item){
            var _tempitem = assign({},item);
            _tempitem.id =  item.type + showItem.id +'_' +_itemcount;
            _tempitem.name = item.type + showItem.id;
            _tempitem.value = "选项" + (_itemcount + 1);
            _itemcount ++;
            return _tempitem;
        });
        showItem.mark = _itemcount;
    }
    _showPart.push(showItem);
    _addTimes ++;
    _selectPart = showItem;
}

function _selectItem(id){
    _showPart.forEach(function(item){
        if(item.id === id){
            _selectPart = item;
        }
    })
}

function _deleteItem(id){
    for(var i = _showPart.length; i--;) {
        if(_showPart[i].id === id) {
            _showPart.splice(i, 1);
        }
    }
}

function _updataName(value){
    _selectPart.name = value;
}

function _changeRadioStatue(itemId,radioId,value){
    var _changePart = null;
    _showPart.forEach(function(item){
        if (item.id === itemId){
            _changePart = item;
        }
    });
    _changePart.itemsData.forEach(function(item){
        if(item.type === 'radio'){
            item.checked = false;
        }
        if(item.id === radioId){
            item.checked = value;
        }
    })

}

function _changeRadioLabel(itemId,radioId,value){
    var _changePart = null;
    _showPart.forEach(function(item){
        if (item.id === itemId){
            _changePart = item;
        }
    });
    _changePart.itemsData.forEach(function(item){
        if(item.id === radioId){
            item.value = value;
        }
    })
}

function _addChooseItem(itemId,index){
    var _changePart = null;
    _showPart.forEach(function(item){
        if (item.id === itemId){
            _changePart = item;
        }
    });
    var oldItem = _changePart.itemsData[index];
    var mark = _changePart.mark;
    var addItem = {
        id : oldItem.name +'_' +mark,
        name : oldItem.name ,
        type : oldItem.type,
        value : "选项" + (mark + 1),
        checked : false
    };
    _changePart.mark = mark + 1;
    _changePart.itemsData.splice(index + 1, 0, addItem);
}

function _removeChooseItem(itemId,index){
    var _changePart = null;
    _showPart.forEach(function(item){
        if (item.id === itemId){
            _changePart = item;
        }
    });
    _changePart.itemsData.splice(index, 1);

}

var AppStore = assign({}, EventEmitter.prototype, {

    // 处理相关事件
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    },

    // 获得界面相关数据
    getInitPart: function () {
        return _initParts;
    },

    getShowItems: function () {
        return _showPart;
    },

    getSelectItem: function () {
        return _selectPart;
    },
    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action; // this is our action from handleViewAction
        switch (action.actionType) {
            // todo 根据action不同类型，执行相应的动作
            case  AppConstants.VIEW_ACTION.ADD_PART:
                _addPart(payload.action.item);
                break;
            case AppConstants.VIEW_ACTION.SELECT_ITEM:
                _selectItem(payload.action.id);
                break;
            case AppConstants.VIEW_ACTION.DELETE_ITEM:
                _deleteItem(payload.action.id);
                break;
            case AppConstants.VIEW_ACTION.UPDATE_NAME:
                _updataName(payload.action.value);
                break;
            case AppConstants.VIEW_ACTION.CHANGE_RADIO_STATUE:
                _changeRadioStatue(payload.action.itemId,
                    payload.action.radioId,payload.action.value);
                break;
            case AppConstants.VIEW_ACTION.CHANGE_RADIO_LABEL:
                _changeRadioLabel(payload.action.itemId,
                    payload.action.radioId,payload.action.value);
                break;
            case AppConstants.VIEW_ACTION.ADD_CHOOSE_ITEM:
                _addChooseItem(payload.action.itemId, payload.action.index);
                break;
            case AppConstants.VIEW_ACTION.REMOVE_CHOOSE_ITEM:
                _removeChooseItem(payload.action.itemId, payload.action.index);
                break;


        }
        AppStore.emitChange();
        return true;
    })
});

module.exports = AppStore;
