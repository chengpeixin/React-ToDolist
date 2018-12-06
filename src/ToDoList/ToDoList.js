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

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDeleteClick = this.handleItemDeleteClick.bind(this);
    }
    render (){
        return (
            <Fragment>
                <div>
                    <label htmlFor="input">输入内容</label>
                    <input id="input" value={this.state.inputValue} onChange={this.handleInputChange} /><button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    { this.getListItem()}
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
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:""
        }))
    }
    handleItemDeleteClick(index){
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index,1)
            return {list};
        })
    }
    getListItem(){
        return (
            this.state.list.map((item,index)=>{
                return (
                    <TodoItem item={item} index={index} deleteItem={this.handleItemDeleteClick} key={item+index} />
                )
            })
        )
    }
}

export default ToDoList;