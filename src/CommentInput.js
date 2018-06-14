
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'


//构建评论框组件
class CommentInput extends Component {
  //组件参数验证
  static propTypes = { 
    onSubmit: PropTypes.func, //必须接收一个func类型的参数
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }

  constructor (props){
    super(props)
    //初始化一个 state 来保存用户名和评论这两个状态
    this.state = {
      username:props.data || '',
      content: ''
    }
  }
  //获取textarea Dom的焦点
  componentDidMount () {
    this.textarea.focus()
  }

  //输入框失去焦点的时候
  handleUsernameBlur (event) {
    this.props.saveData(event.target.value)
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
      // const { username, content } = this.state
      // this.props.onSubmit({username, content})
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date() //给发布的评论加上时间戳
      })
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


CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput
