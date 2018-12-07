import React, {
    Component,
    Fragment
} from 'react'

import PropTypes from 'prop-types';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }
    render(){
        const {item} = this.props;
        return (
            <div>
                <span>{item}</span>
                <button onClick={this.handleRemoveClick}>删除</button>
            </div>
        )
    }
    // 从父组件接受了参数
    // 第一次存在于父组件,不执行
    // 存在后才执行
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')
    }
    // 组件在页面中剔除后执行
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    handleRemoveClick(){
        const {index} = this.props;
        this.props.deleteItem(index)
    }
}

TodoItem.propTypes = {
    index:PropTypes.number,
    item:PropTypes.string
}
export default TodoItem;