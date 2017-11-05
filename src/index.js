
import React from "react";
import ReactDOM from "react-dom";
import TaskMenu from './App2';
//import Todo from './Test';
//import './index.css';

//import PropTypes from 'prop-types';

//var createReactClass = require('create-react-class');

 //var tl = ["Task 1", "Task 2", "task3"];
 var tl = [];

ReactDOM.render(
  // <div> <TaskMenu tasks = {tl} /><TaskMenu tasks = {tl}/> </div> , document.getElementById('root')
   <div> <TaskMenu tasks={tl}/>  </div> , document.getElementById('root')
);

export default TaskMenu;