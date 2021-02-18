# Plant🌳APP
## 该项目是基于React Native(expo)+JS / TS的植物售卖展示APP

- 项目UI画板地址：
	- 链接: https://pan.baidu.com/s/1AB_200sfedRCNgZFjqk-QA  密码: hvwc


![在这里插入图片描述](https://img-blog.csdnimg.cn/20210217163125589.png)

## 目录介绍
### . /
- DOCS：项目有关说明文档和知识要点记录
- appJS：`expo init appJS` blank的JS初始项目
- appTS：` expo init appTS `blank(TypeScript) 的TS初始项目
- PlantAppJS：Plant APP的JavaScript项目
- PlantAppTS：Plant APP的TypeScript项目

### DOCS
[Typescript在ReactNative中的具体应用](https://github.com/SiriusZHT/PlantApp/blob/main/%20DOCS/Typescript%E5%9C%A8ReactNative%E4%B8%AD%E7%9A%84%E5%85%B7%E4%BD%93%E5%BA%94%E7%94%A8.md)

[ReactNative知识点](https://github.com/SiriusZHT/PlantApp/blob/main/%20DOCS/ReactNative%E7%9F%A5%E8%AF%86%E7%82%B9.md)

[Typescript代码整洁之道](https://github.com/SiriusZHT/PlantApp/blob/main/%20DOCS/Typescript%E4%BB%A3%E7%A0%81%E6%95%B4%E6%B4%81%E4%B9%8B%E9%81%93.md)

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

## Install向导
- clone加速
```shell
git clone https://github.com.cnpmjs.org/SiriusZHT/PlantApp.git 
```
- install dependencies
```shell
cd PlantAppJS && yarn 
```
- run

```shell
yarn run ios
```

🕷前提是您提前安装了expo-cli工具 `npm install --global expo-cli`
⚠️本项目由于React Native兼容性原因暂不支持Android；web端可能会有兼容问题。