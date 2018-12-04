import React, {
    Component,
    Fragment
} from 'react'

import TodoItem from './TodoItem'

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'ASDAS',
            list:[]
        }
    }
    render (){
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input id="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /><button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <TodoItem item={item} index={index} deleteItem={this.handleItemDeleteClick.bind(this)}/>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:""
        })
    }
    handleItemDeleteClick(index){
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    handleItemUpdateClick(index){
        const list = [...this.state.list]
        console.log(index)
    }
}

export default ToDoList;