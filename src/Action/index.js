import React from 'react';

export const CHANGE_TOOLTIP_TO_TOP = 'CHANGE_TOOLTIP_TO_TOP';
export const CHANGE_TOOLTIP_TO_BOTTOM = 'CHANGE_TOOLTIP_TO_BOTTOM';
export const CHANGE_TOOLTIP_TO_LEFT = 'CHANGE_TOOLTIP_TO_LEFT';
export const CHANGE_TOOLTIP_TO_RIGHT = 'CHANGE_TOOLTIP_TO_RIGHT';
export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';

 
export function changeToolTip(value){
    switch(value){
      case 'top':
        return{
            type:CHANGE_TOOLTIP_TO_TOP,
            value,
        }
       case 'bottom':
        return{
            type:CHANGE_TOOLTIP_TO_BOTTOM,
            value,
        }
       case 'left':
        return{
            type:CHANGE_TOOLTIP_TO_LEFT,
            value,
        }
       case 'right':
        return{
            type:CHANGE_TOOLTIP_TO_RIGHT,
            value,
        }
        default:
            return{
                type:CHANGE_TOOLTIP_TO_TOP,
                value,
            }
    }
}

export function changeVisibility(value){
    return {
        type:SHOW_TOOLTIP,
        value,
    }
}