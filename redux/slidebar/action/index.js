import {SIDEBAR_SHOW,SIDEBAR_HIDE} from '../types'

export const ShowSidebar =()=>{
    return (dispatch)=>{
        dispatch({
            type:SIDEBAR_SHOW
        })
    }
}
export const HideSidebar =()=>{
    return (dispatch)=>{
        dispatch({
            type:SIDEBAR_HIDE
        })
    }
}