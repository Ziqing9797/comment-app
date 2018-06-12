import React, { Component } from 'react'
import PropTypes from 'prop-types'

//构建评论框组件
class CommentInput extends Component {
  //组件参数验证
  static propTypes = {
    onSubmit: PropTypes.func //必须接收一个func类型的参数
  }

  constructor (){
    super()
    //初始化一个 state 来保存用户名和评论这两个状态
    this.state = {
      username:'',
      content: ''
    }
  }
  //获取textarea Dom的焦点
  componentDidMount () {
    this.textarea.focus()
  }

  //组件挂载时加载用户名
   componentWillMount () {
    this._loadUsername()
  }
  _loadUsername () {//从浏览器加载用户名
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({ username })
    }
  }

  //保存用户输入的内容到LocalStorage中
  _saveUsername (username) {  //私有方法以 _ 开头
    localStorage.setItem('username', username)
  }
  //输入框失去焦点的时候
  handleUsernameBlur (event) {
    this._saveUsername(event.target.value)
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
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea 
              ref={(textarea) => this.textarea = textarea}
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
