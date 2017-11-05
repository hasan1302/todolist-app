import React, { Component } from 'react';

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
        backgroundColor: "gray",
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
}

class TaskMenu extends Component {
        constructor(props) {
          super(props);
          this.state = {active: true, myTasks: this.props.tasks, name: this.props.name}
          this.addNewTask = this.addNewTask.bind(this);
          this.up = this.up.bind(this);
          this.removeTask = this.removeTask.bind(this);
          this.sortTasks = this.sortTasks.bind(this);
          };

        addNewTask() {
            let task = prompt('What to write ?', "");
            task = (task !== null ? task : "")
            if (task !== "") {
                this.state.myTasks.push(task);
            } else {
                alert("Empty Task Name!!!");
            }
            this.setState({active : !this.state.active});
        }

        removeTask(e) {
            this.setState(this.state.myTasks.splice(e.target.getAttribute("data-index2"), 1));
        }

        sortTasks() {
            this.setState(this.state.myTasks.sort());
        }

        up(e) {
            var index = e.target.getAttribute("data-index3");
                var elem = this.state.myTasks[index];
                this.state.myTasks.splice(index,1);
                this.state.myTasks.unshift(elem);
                this.setState({active : !this.state.active});
            
        }

        render() {//<AddButton /> 
              return <div> 
                  <h1>{this.state.name}</h1>
                   <button onClick={this.addNewTask}>Click on me to add a new Task! </button>
                   <button style={styles.buttonStyleUp} onClick={this.sortTasks}>SORT</button>
                   <ul>
                   {this.state.myTasks.map((task, i)=>
                   <li key={i}>
                       {this.state.myTasks[i]}
                        <TaskButton data-index={i} taskText={this.state.myTasks[i]}/>
                        <button data-index2={i} style={styles.buttonStyleX} onClick={this.removeTask}>✖</button>
                        <button data-index3={i} style={styles.buttonStyleUp} onClick={this.up}>▲</button> 
                        
                   </li>
                   )}
                   </ul>
                   </div>
                }
        }         


class TaskButton extends Component {
    constructor(props) {
        super(props);
        this.changeTask = this.changeTask.bind(this);
        this.done = this.done.bind(this);
        this.state = {name: this.props.taskText, done: false};
    };

    changeTask() {
        let text = prompt('What to write ?', "");
          if (this.state.done === true) {
              this.setState({done: false});
          }
        this.setState({name: text})
    }

    done() {
        this.setState({done: !this.state.done});
    }

    render() { 
        var buttonStyle = ( this.state.done === true 
            ? styles.buttonStyleDone 
            : styles.buttonStyleNormal)

        if (this.state.name !== "") {
        return (
        <div>
            <button onClick={this.changeTask} style={buttonStyle}> {this.props.taskText} </button>

            <button style={styles.buttonStyleOk} onClick={this.done}>✔</button>
            
        </div>
        )
        } else { return null}

    }
}



  export default TaskMenu;