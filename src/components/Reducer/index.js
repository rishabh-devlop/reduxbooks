import {combineReducers} from 'redux'
import {contactReducer} from './reducerContact'


export default combineReducers({
    contact: contactReducer
})