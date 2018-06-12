基于React.js实现的评论app.  
组件结构如下图：  
![Alt text](http://huzidaha.github.io/static/assets/img/posts/DAFA784B-6AD3-474B-9A87-316E5741DED6.png)

V1：数据无法持久化-刷新页面数据会消失2018/6/10。  
V2:  
1. 页面加载完成自动聚焦到评论输入框。2018/6/12  
2. 把用户名持久化，存放到浏览器的 LocalStorage 中。页面加载时会把用户名加载出来显示到输入框，用户就不需要重新输入用户名了。2018/6/12  
