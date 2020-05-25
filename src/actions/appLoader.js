import actions from "../shared/actionTypes";

export const showAppLoader=()=>(console.log('SHOW LOADER'),{
    type: actions.SHOW_APP_LOADER,
}) 

export const hideAppLoader=()=>({
    type: actions.HIDE_APP_LOADER,
}) 

