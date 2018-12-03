import React, {
    Component,
    Fragment
} from 'react'


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
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} /><button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index}>
                                    {item}
                                    <button onClick={this.handleItemDeleteClick.bind(this,index)}>删除</button>
                                    <button onClick={this.handleItemUpdateClick.bind(this,index)}>修改</button>
                                </li>
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