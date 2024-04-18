## hexo-theme-solitude

<div class="img_container">

![已接入文章摘要](https://bu.dusays.com/2024/04/18/6620a11060052.webp)
<style>
  .img_container p {
    display: flex; 
    gap: 8px;
  };
</style>
</div>

详细配置信息前往 [Solitude 文档](https://solitude-docs.efu.me/third_party/tianliai) 查看。

```yaml
# 文章摘要AI
# post abstract AI
post_ai:
  enable: false
  # 右侧显示的模型名称
  # Model name displayed on the right
  modelName: GPT 4
  # key
  # 具体获取方法见文档
  # Specific acquisition method, see the document
  key:
  # 自介
  # talk
  talk: # 我是 Efu 开发的摘要生成助理EfuGPT，EfuGPT在静态部署时进行摘要的撰写，并且在访客访问时通过EfuCorrection转译后的文本摘要实现工具。我在这里只负责已经生成的摘要显示，你无法与我直接沟通，但我可以回答一些预设的问题。
  # 随机文章按钮
  # Random post button
  randomPost: false
  # 举报链接，不填不显示
  # Report link, do not fill in and do not display
  report: https://efu.me/
  # 底部提示
  # Bottom tip
  tips: # 此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
```
