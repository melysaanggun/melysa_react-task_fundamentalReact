import Header from "./components/Header"
import List from "./components/List"

export default function ToDoList(lists){
    return (
    <>
    <Header text="To Do App"/>
    <ToDoList list={lists[0]} />
    <List />
    </>
    
    )
}