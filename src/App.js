import React, { Component } from 'react';
import ReactDOM from "react-dom";

var tasksDone = 0;

class TaskMenu extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        tasks: [["Нажми чтобы добавить", false, "control"]],
        active: false
      };

      this.addTask = this.addTask.bind(this);
      this.removeTask = this.removeTask.bind(this);
      this.up = this.up.bind(this);
      this.done = this.done.bind(this);
      this.sort = this.sort.bind(this);
    }

    addTask(e){
      var task = prompt('What to write ?', "");
      var index = e.target.getAttribute("data-index");
      console.log(this.state.tasks);
      if (!task == "") {                                //если ввод не пустой то добавляем
        this.state.tasks[index] = [task, true];
        this.setState({
            tasks: 
            +index=== this.state.tasks.length-1 
            ? [["Нажми чтобы добавить", false, "control"] , ...this.state.tasks]
           // ? [...this.state.tasks, ["Нажми чтобы добавить", false, "control"]]       /// TUT SPROSI U VOVI CHE DELAT!!!!!
            : [...this.state.tasks]
        });
      }
      console.log(this.state.tasks[this.state.tasks.length-1]);
     // if (this.state.tasks[this.state.tasks.length-1][2] == "control") {
       // this.state.tasks.unshift(this.state.tasks[this.state.tasks.length-1]);
     //   this.setState(this.state.tasks.shift(this.state.tasks[this.state.tasks.length-1]));
     // }

    };

    removeTask(e) {

        var index = e.target.getAttribute("data-index");
        console.log(this.state.tasks[index][1]);

        if (this.state.tasks[index][1] === true) {
            this.state.tasks.splice(index,1);     
            this.setState([this.state.tasks[index][1] == false]);
        };
    };

    up(e) {
        var index = e.target.getAttribute("data-index");
        if (this.state.tasks[index][1] === true) {
            var elem = this.state.tasks[index];
            this.state.tasks.splice(index,1);
            this.state.tasks.unshift(elem);
            this.setState([this.state.active=true]);
        };
    }

    done(e) {
        var index = e.target.getAttribute("data-index");
        if (this.state.tasks[index][1] === true) {
            if (this.state.tasks[index][2] != "done") {
                this.setState([this.state.tasks[index][2] = "done"]);
                tasksDone +=1;
            };
        };
    }

    sort(e) {
        var index = e.target.getAttribute("data-index");
        if (this.state.tasks[index][2] === "control") {
           this.setState(this.state.tasks.sort());
        };
    }

    render() {
      return (
          
        <ul>
          {this.state.tasks.map((task, i)=>
            <li key={i}> 


                <button style={ this.state.tasks[i][2] == "done" 
                ? styles.buttonStyleDone 
                : styles.buttonStyleNormal}         onClick={this.addTask}         data-index={i}>{task[0]}</button> 

                { //Done Button
                    this.state.tasks[i][2] == "control" ? null : 
                    <button style={styles.buttonStyleOk} onClick={this.done}        data-index={i}>✔</button> 
                }


                { //Remove Button
                    this.state.tasks[i][2] == "control" ? null : 
                    <button style={styles.buttonStyleX}  onClick={this.removeTask}  data-index={i}>✖</button> 
                }
               
               { //Up Button
                    this.state.tasks[i][2] == "control" ? null : 
                    <button style={styles.buttonStyleUp} onClick={this.up}          data-index={i}>▲</button> 
                }
 

                { //Sort Button
                    this.state.tasks[i][2] != "control" ? null : 
                    <button style={styles.buttonStyleUp} onClick={this.sort}        data-index={i}>SORT</button>
                }

                { //Counter
                    this.state.tasks[i][2] != "control" ? null : 
                    <h1> Counter: {tasksDone}</h1>
                }
                 
  
            </li>
            
          )}
        </ul>

       
        
      )

    }


  }



  const styles = {
    buttonStyleOk: {
    backgroundColor: "green"
    },
    buttonStyleX: {
        backgroundColor: "red"
        },
    buttonStyleUp: {
        backgroundColor: "cyan"
    },
    buttonStyleNormal: {
        backgroundColor: "#EFFBFB"
    },
    buttonStyleDone: {
        backgroundColor: "gray"
    }
    }
  
  ReactDOM.render(
      <TaskMenu />,
      document.getElementById("root")
  );

    export default TaskMenu;