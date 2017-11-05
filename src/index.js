
import React from "react";
import ReactDOM from "react-dom";
import TaskMenu from './App';

//var taskLists = TaskMenu;
var taskLists = [];
var tl = [];

function createNewTaskList(name) {
   // let taskList = prompt("Write the name of your new tasklist", "");
   let taskList = name;
   taskLists.push(taskList);        
}



createNewTaskList("Pidorasticheskie istorii");
createNewTaskList("Utinie istorii");
createNewTaskList("Kaban istorii");
createNewTaskList("Pidore istorii");

//function renderTasksLists() {
    var taskLists = taskLists.map(function(tasklistname) {
        return <TaskMenu tasks={[]}name={tasklistname}key={tasklistname}/>;
      });
    //return taskLists.forEach(()=>{<TaskMenu tasks={[]}name={"hui"}/>});
//}
console.log(taskLists);

ReactDOM.render(
    <div> {taskLists}</div>, document.getElementById('root')
)




export default TaskMenu;