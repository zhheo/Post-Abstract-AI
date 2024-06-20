# hexo-theme-butterfly

## 安装教程

编辑`themes/butterfly/_config.yml`文件，找到`inject`属性

```YAML
inject:
  head:
    - <link rel="stylesheet" href="https://ai.tianli0.top/static/public/tianli_gpt.min.css">
  bottom:
    - <script>let tianliGPT_postSelector = '\#post \#article-container';let tianliGPT_key = '5Q5mpqRK5DkwT1X9Gi5e';</script>
    - <script src="https://ai.tianli0.top/static/public/tianli_gpt.min.js"></script>
```