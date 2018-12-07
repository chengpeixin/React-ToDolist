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
        console.log('render')
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
    // 组件挂载之前执行
    componentWillMount(){
        console.log('componentWillMount')
    }
    // 组件挂载之后执行
    componentDidMount(){
        console.log('componentDidMount')
    }
    // 组件更新之前，返回结果true||false
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }

    // shouldComponentUpdate 之后执行，shouldComponentUpdate 返回false则不执行组件更新之前
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    // 组件更新后
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    // 组件在页面中剔除后执行
    componentWillUnmount(){
        console.log('componentWillUnmount')
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