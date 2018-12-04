import React, {
    Component,
    Fragment
} from 'react'


class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }
    render(){
        return (
            <div>
                <span>{this.props.item}</span>
                <button onClick={this.handleRemoveClick}>删除</button>
            </div>
        )
    }
    handleRemoveClick(){
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;