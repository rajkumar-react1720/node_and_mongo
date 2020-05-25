import actions from "../shared/actionTypes";
import apiURL from '../shared/constants';
import axios from 'axios';



export const fetchUserDetails=()=>({
    type: actions.FETCH_USER_DETAILS,          // SAGA ACTION
}) 


// export function fetchUserDetails(){             // THUNK ACTION
//      return function(dispatch) {
//         return axios.get(apiURL.fetchUserDetailsUri)
//         .then((response)=>dispatch({
//             type: actions.FETCH_USER_DETAILS_SUCCESS,
//             response: response
//         }))
//         .catch((err) => dispatch({
//             type: actions.FETCH_USER_DETAILS_FAILURE,
//             error: err
//         }))
//     }
// }

export default fetchUserDetails;