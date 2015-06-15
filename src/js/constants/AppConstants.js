/**
 * Created by Shenxl on 2015/6/8.
 */

var keymirror = require('keymirror');
var Constants = {
    'CHANGE_EVENT' :  "change",
    'VIEW_ACTION':keymirror({
        'ADD_PART' : null,
        'SORT_PARTS_ITEM':null,
        'SELECT_ITEM':null,
        'DELETE_ITEM':null,
        'COPY_ITEM':null,
        'UPDATE_NAME':null,
        'CHANGE_RADIO_STATUE':null,
        'CHANGE_RADIO_LABEL':null,
        'ADD_CHOOSE_ITEM':null,
        'REMOVE_CHOOSE_ITEM':null,
        'CHANGE_DEFAULT':null
    }),
    'PART_TYPE':keymirror({
        'CHECKBOX_CONTROL' : null,
        'DATE_CONTROL' : null,
        'IMAGE_CONTROL' : null,
        'INPUT_CONTROL' : null,
        'MAP_CONTROL' : null,
        'RADIO_CONTROL' : null,
        'TEXTAREA_CONTROL' : null,
        'TIME_CONTROL' : null,
        'UPLOAD_CONTROL' : null
    })
};

module.exports = Constants ;