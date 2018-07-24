import React from 'react';

export class Todoform extends React.Component{
    constructor(){
        super();
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        e.preventDefault();
        const inp = document.getElementById('todoInput');
        const val = inp.value;
        inp.value = '';
        this.props.addTask(val);
    }

    render(){
        return <div>
            <div className="todo type1">
                <form className="input-wrapper" onSubmit={this.addTask}>
                    <input id="todoInput" type="text" className="add-todo" autoComplete="off" placeholder="whats need to be"/>
                </form>
                <button type="button" className="add-btn" onClick={this.addTask}/>
            </div>
        </div>
    }

}