import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./ActionTypes"
const initialstate = {
    listTasks : [
        {id: Math.random(), text: 'Task 1',description: 'Task 1',  isDone: false},
        {id: Math.random(), text: 'Task 2',description: 'Task 2', isDone: true},
        {id: Math.random(), text: 'Task 3',description: 'Task 3', isDone: false},
    ],
    
}
const todoReducer = (state= initialstate, {type, payload}) =>{
    switch(type){
        case DONE_TASK :
            return {
                ...state, listTasks: state.listTasks.map((el)=>
                el.id === payload ? {...el, isDone : !el.isDone} : el)
            }

        case DELETE_TASK : 
            return {
                ...state, listTasks: state.listTasks.filter((el)=>
                el.id !== payload)
            }

        case EDIT_TASK : 
            return {
                ...state, listTasks: state.listTasks.map((el)=>
                el.id === payload.id? {...el, text: payload.newText, description: payload.newDescription} : el)
            }
        
        case ADD_TASK : 
            return {
                ...state, listTasks: [...state.listTasks, payload]
            }

        default :
            return state
    }
}

export default todoReducer