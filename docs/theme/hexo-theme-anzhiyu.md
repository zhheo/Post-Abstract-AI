# hexo-theme-anzhiyu

![原生支持文章摘要](https://bu.dusays.com/2024/04/18/6620a11060052.webp)

以下内容来自[安知鱼主题文档](https://docs.anheyu.com/advanced/#ai-%E6%91%98%E8%A6%81)

# 文章顶部ai摘要

```yaml
post_head_ai_description:
  enable: true
  gptName: AnZhiYu
  mode: local # 默认模式 可选值: tianli/local
  switchBtn: false # 可以配置是否显示切换按钮 以切换tianli/local
  btnLink: https://afdian.net/item/886a79d4db6711eda42a52540025c377
  randomNum: 3 # 按钮最大的随机次数，也就是一篇文章最大随机出来几种
  basicWordCount: 1000 # 最低获取字符数, 最小1000, 最大1999
  key: xxxx
  Referer: https://xx.xx/
1
```

配置完成以后在文章的Front-matter配置ai: true 使用 tianli gpt 需将 mode 改为tianli 然后在需要 ai 摘要的文章的Front-matter配置ai: true

如果使用local,需要按照以下方式配置

```markdown
---
title: AnZhiYu主题快速开始
ai:
  - 本教程介绍了如何在博客中安装基于Hexo主题的安知鱼主题，并提供了安装、应用主题、修改配置文件、本地启动等详细步骤及技术支持方式。教程的内容针对最新的主题版本进行更新，如果你是旧版本教程会有出入。
  - 本文真不错
---
```