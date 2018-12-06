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