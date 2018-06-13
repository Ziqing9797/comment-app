基于React.js实现的评论app.  
组件结构如下图：  
![Alt text](http://huzidaha.github.io/static/assets/img/posts/DAFA784B-6AD3-474B-9A87-316E5741DED6.png)

V1：
数据无法持久化-刷新页面数据会消失2018/6/10。  
V2:  
1. 页面加载完成自动聚焦到评论输入框。2018/6/12  
2. 把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。2018/6/12  
V2总结：这次更新用到了React.js生命周期中的componentWillMount与MountcomponentDidMount 。其中componentWillMount用于无Dom节点操作的时候，这里通过该组件实现加载本地浏览器用户信息；MountcomponentDidMount用户加载组件时，获取输入框焦点。这次更新还用到了propTypes进行参数验证，在大型项目中经常见到哦！ 

组件的编写内容顺序如下：  
1. static 开头的类属性，如 defaultProps、propTypes。  
2. 构造函数，constructor。  
3. getter/setter（还不了解可以暂时忽略）。  
4. 组件生命周期。  
5. _ 开头的私有方法。  
6. 事件监听方法，handle*。  
7. render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。  
8. render() 方法。  
