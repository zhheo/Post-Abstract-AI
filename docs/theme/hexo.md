# Hexo插件

<div class="img_container">

![已接入PostChat](/img/PostChat认证.svg) ![已接入文章摘要](/img/文章摘要认证.svg)

<style>
  .img_container p {
    display: flex; 
    gap: 8px;
  }
</style>
</div>

目前PostChat已支持Hexo插件进行安装。

## 插件安装

### 使用NPM进行安装

使用命令行工具或终端cd进入你的Hexo博客根目录。

```
cd /Users/这是一个例子/HexoDemo
```

然后在博客根目录下执行

```
npm install hexo-plugin-postchat --save
```

然后根据下面的插件配置进行配置即可。

## 插件配置

编辑根目录下的`_config.yaml`，在`plugins`中添加`hexo-plugin-postchat`：

```yaml
plugins:
  - hexo-plugin-postchat
```

然后在配置文件最后添加配置项目：

::: tip 你需要额外注意配置postURL参数
PostChat插件默认的postURL参数为Hexo默认的路由。如果你使用了持久化的简短的文章地址，你需要更改这个值为你的文章链接路由规则。这个值支持通配符，也支持正则表达式。[查看详情](https://postchat.zhheo.com/summary.html#tianligpt-posturl)
:::

```yaml
postchat:
  account:
    key: "70b649f150276f289d1025508f60c5f58a" # 使用PostChat的用户请前往 https://ai.tianli0.top/ 获取 KEY，只使用文章摘要的用户前往 https://summary.zhheo.com/ 获取 KEY 。示例的Key不支持文章摘要和自定义的知识库问答，但可以使用作者的知识库对话
  summary:
    enableSummary: true # 开启文章摘要需要在 https://summary.zhheo.com/ 绑定你的网站
    postSelector: "#postchat_postcontent" # 文章选择器，用于选择文章内容。如果没有正常显示摘要，你需要访问 https://postsummary.zhheo.com/theme/custom.html#%E8%8E%B7%E5%8F%96tianligpt-postselector 学习获取，也可以联系 zhheo@qq.com 发送你的网站地址后获取
    title: "文章摘要" # 摘要标题，用于显示在摘要顶部的自定义内容
    summaryStyle: "https://ai.tianli0.top/static/public/postChatUser_summary.min.css" # 摘要样式css地址，如果你需要自定义摘要的css样式，可以自行修改。
    postURL: "/^https?://[^/]+/[0-9]{4}/[0-9]{2}/[0-9]{2}/" # 在符合url条件的网页执行文章摘要功能，默认的配置为Hexo的默认文章路由，如果你自定义了文章的地址格式，那么需要修改。https://postchat.zhheo.com/summary.html#tianligpt-posturl
    blacklist: "" # 填写相关的json地址，帮助文档：https://postsummary.zhheo.com/parameters.html#tianligpt-blacklist
    wordLimit: "1000" # 危险操作！如果没有在文章摘要中开启url绑定，更改此变量损失已消耗过的key，因为你提交的内容发生了变化。（PostChat用户无影响，因为摘要数量是无限的）可以设置提交的字数限制，默认为1000字。，帮助文档：https://postsummary.zhheo.com/parameters.html#tianligpt-wordlimit
    typingAnimate: true # 智能的打字效果，模拟流处理的感觉
  chat:
    enableAI: true # 开启PostChat智能对话，添加按钮点击对话的功能，如果你并非PostChat用户，而是仅文章摘要用户，建议关闭此功能
    backgroundColor: "#3e86f6" # 按钮背景颜色
    fill: "#FFFFFF" # 按钮填充颜色
    bottom: "16px" # 按钮底部距离
    left: "16px" # 按钮左边距离
    width: "44px" # 按钮宽度
    frameWidth: "375px" # 聊天界面框架宽度
    frameHeight: "600px" # 聊天界面框架高度
    defaultInput: true # 默认输入
    upLoadWeb: true # 上传网站
    showInviteLink: true # 显示邀请链接
    userTitle: "PostChat" # 界面标题
    userDesc: "如果你对网站的内容有任何疑问，可以来问我哦～" # 聊天界面描述
    addButton: true # 是否显示按钮

```