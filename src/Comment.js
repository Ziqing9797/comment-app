import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
   static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }
 
  constructor () {
    super() 
    this.state = { timeString: ''}
  }

  componentWillMount () {
    this._updateTimeString()

    //每隔5秒刷新一次
    this._timer=setInterval(
      this._updateTimeString.bind(this), 
      5000)
  }

   //在评论组件销毁的时候清除定时器
  componentWillUnmount () {
    clearInterval(this._timer)
  }

  //计算时间间隔
  _updateTimeString () {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime ) / 1000
    this.setState({
     //自己改的一个三目运算符改成了三种情况
      timeString: duration > 60 
        ?(duration >3600 
          ? `${Math.round(duration / 3600 )}小时前`
          :`${Math.round(duration / 60 )}分钟前`
          )
        :`${Math.round(Math.max(duration, 1))}秒前`
        
    })
  }

  //显示代码块处理
  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  //删除用户评论
  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render () {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span className='comment-username'>
            {comment.username} 
          </span>：
        </div>  
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(comment.content)
        }} />
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span 
          onClick = {this.handleDeleteComment.bind(this)}
          className='comment-delete'>
            删除
        </span>
      </div>
    )
  }
}

export default Comment