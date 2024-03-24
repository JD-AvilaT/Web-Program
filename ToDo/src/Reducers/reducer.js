import { ACTIONS } from "../const/actions";

export const reducer = ( tasks, action ) => {
    if(action.type===ACTIONS.CREATE_TASK){
        const newTask = {
            id: crypto.randomUUID(),
            title: action.payload,
            done: false,
            };
            return [...tasks, newTask]
    }else if(action.type===ACTIONS.DELETE_TASK){
        return tasks.filter(task => task.id !== action.payload);
    }else if(action.type===ACTIONS.CHECKBOX_CHANGE){
        return tasks.map(task =>
            task.id === action.payload ? { ...task, done: !task.done } : task);
    }else if(action.type===ACTIONS.HANDLE_DELETE_COMPLETED){
        return tasks.filter(task => !task.done);
    }else{
        return tasks
    }
}