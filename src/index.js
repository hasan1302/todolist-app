
import React from "react";
import ReactDOM from "react-dom";
import TaskMenu from './App';

 var tl = [];

ReactDOM.render(
  // <div> <TaskMenu tasks = {tl} /><TaskMenu tasks = {tl}/> </div> , document.getElementById('root')
   <div> <TaskMenu tasks={tl}/>  </div> , document.getElementById('root')
   
);

export default TaskMenu;