import React from 'react';
import {combineReducers} from 'redux'

import {
    CHANGE_TOOLTIP_TO_TOP,
    CHANGE_TOOLTIP_TO_BOTTOM,
    CHANGE_TOOLTIP_TO_LEFT,
    CHANGE_TOOLTIP_TO_RIGHT,
    SHOW_TOOLTIP
} from '../Action';


// css intial property for tooltip

const intialState = {
        visibility: "hidden",
        position: "absolute",
        backgroundColor: "rgb(46, 44, 44)",
        color:"white",
        borderRadius: "5px",
        width:"100%",
        height:"100%",
        padding:"30px",
        boxSizing: "border-box",
        top:"-110%",
        left:'0'
}

export default combineReducers({
    change
})
// changing the tooltip position property from here

export function change(state=intialState,action){
    switch(action.type){
        case CHANGE_TOOLTIP_TO_TOP:
            return {
               ...state,
               top:"-110%",
               left:'0',
            }
        case CHANGE_TOOLTIP_TO_BOTTOM:
            return {
              ... state,
              top:"110%",
              left:'0'
            }
        case CHANGE_TOOLTIP_TO_LEFT:
            return {
                ...state,
                top:'0%',
                left:"-105%"
            }
        case CHANGE_TOOLTIP_TO_RIGHT:
            return{
               ...state,
               ...state,
                top:'0%',
                left:"105%"
            }
        case SHOW_TOOLTIP:  /// changing the visibility of tooltip according to action
            return{
                ...state,
                visibility:action.value
                 
            }
        default:
            return state
           
    }
}