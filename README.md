# PlantAPP
## 该项目是基于React Native(expo)+JS / TS的植物售卖展示APP

- 项目UI画板地址：
	- 链接: https://pan.baidu.com/s/1AB_200sfedRCNgZFjqk-QA  密码: hvwc


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210217163125589.png)

## 目录介绍
### . /
- appJS：`expo init appJS` blank的JS初始项目
- appTS：` expo init appTS `blank(TypeScript) 的TS初始项目
- PlantAppJS：Plant APP的JavaScript项目
- PlantAppTS：Plant APP的TypeScript项目

### PlantAppJS 	||  PlantAppTS
- assets resources of splash icons images
- components 工具组件主题样式预定义封装
	- Badge 图标样式（用于Browse页面的图标）
	- Block 样式预定义（用于优化RN的原生组件样式）
	- Button 按钮样式
	- Card Block的预定义（用于Browse页面的图标卡片）
	- Divider 隔板样式
	- Input 输入框样式
	- Progress 渐变样式
	- Search 搜索框样式
	- Text 文字样式
- constants 数据常量包裹层
	- mocks 模拟mocks的api数据引入（手动编造数据）
	- theme 主题样式
- navigation 顶部导航栏 路由配置
- screens 页面组件
	- Browse 种类展示页面
	- Explore 商品展示页面
	- Forgot 忘记密码
	- Login 登陆
	- Product 商品具体展示
	- Settings 用户设置
	- Signup 注册
	- Welcome 首屏页面
- App 入口文件 异步缓存静态资源