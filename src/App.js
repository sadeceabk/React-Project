import React, { Component } from 'react';
import {Todolist} from './todolist'; //COMPONENTLERİN BAŞ HARFİ HEP BÜYÜK OLUR!!!
import {Todoform} from "./todoform";
import {Header} from "./inc/header";
import {Footer} from "./inc/footer";



class App extends Component {
    /*constructor(){ //çalışan ilk method!!
        super();
        document.write("constructor çalıştı!<hr />")
    }
    //önce willmount çalışır ardından didmount çalışır her zaman.
    componentWillMount(){ //component real doma bağlanmadan hemen öncesinde çalışıyor.
        document.write("will mount çalıştı! <hr />")
    }
    componentDidMount(){//real doma yani render edilken sonra çalışıyor.
        document.write("did mount çalıştı <hr />")
    }

    componentWillUnmount(){
        //yokedilmeden hemen önce.
    }*/

    constructor(){
        super();
        this.state = {myTasks:[
                {text:"yapılacak ilk iş",status:"passive"},
                {text:"ikinci iş",status:"passive"},
                {text:"okula gitmek",status:"passive"},
                {text:"işe gitmek",status:"passive"}
            ]};
        this.addTask = this.addTask.bind(this);
        this.doneTask = this.doneTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }


    addTask(val){
        //this.state.myTasks.push(val);//component ın haberi yok böyle olursa.

        let updatedList = this.state.myTasks;
        updatedList.push({text:val,status:"passive"});
        this.setState({myTasks: updatedList});
        //myTasks.push(val);

    }
    doneTask(task_id){
        task_id = task_id.replace('task_','');
        let updatedList = this.state.myTasks;
        let newStatus = 'active';
        let currentStatus = updatedList[task_id].status;
        if(currentStatus==='active'){
            newStatus = 'passive';
        }
        updatedList[task_id].status = newStatus;
        this.setState({myTask: updatedList});

    }

    removeTask(task_id){
        task_id = task_id.replace('task_','');
        let updatedList = this.state.myTasks;
        updatedList.splice(task_id,1);
        this.setState({myTask : updatedList});

    }
  render(){
    return(
      <div className={"content"}>
          <Header/>
          <Todoform addTask={this.addTask}/>
          <Todolist myTasks={this.state.myTasks}
                    doneTask = {this.doneTask}
                    removeTask = {this.removeTask}/>
          <Footer/>

      </div>
    );
  };
}

export default App;
