import React, { Component } from 'react'

//构建评论框组件
class CommentInput extends Component {
  constructor (){
    super()
    //初始化一个 state 来保存用户名和评论这两个状态
    this.state = {
      username:'',
      content: ''
    }
  }

  //通过监听输入框，来改变username的state的状态
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }
  //通过监听输入框，来改变content的state的状态
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {//判断是否传入了 onSubmit 属性
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    //清空用户输入的评论内容(为了用户体验，保留输入的用户名)
    this.setState({ content: '' })
  }

  render(){
    return(
        <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input 
              value={this.state.username} 
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              value={this.state.content} 
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button
            onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
      )
  }
}

export default CommentInput
