import { createStore, combineReducers} from 'redux'
import numbersReducer from '../Reducers/numbersReducers'

const configurationStore = () =>{
    const store = createStore(combineReducers({
        numbers : numbersReducer
    }))

    return store
}

export default configurationStore