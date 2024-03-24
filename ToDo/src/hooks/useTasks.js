import { useContext } from "react";
import { taskContext } from "../context/taskContext";

export const useTask = () =>{
    const contexts = useContext(taskContext)

    if(!contexts){
        throw new Error('Context doesn´t exist')
    }return{...contexts}
}