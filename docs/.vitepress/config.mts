import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TianliGPT",
  description: "文章摘要生成工具",
  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }]
  ],

  lastUpdated: true,
  sitemap: {
    hostname: 'https://postsummary.zhheo.com'
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/introduction' },
      { text: '价格', link: '/price'},
      { text: '用户', link: 'https://summary.zhheo.com/static/matrix.html'},
      { text: '文章', link: 'https://summary.zhheo.com/static/matrix-posts.html'},
      { text: '反馈', link: 'https://support.qq.com/product/600565'},
      { text: '登录后台', link: 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=102056038&redirect_uri=https%3A%2F%2Fsummary.zhheo.com%2Fqq&scope=get_unionid'}
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于TianliGPT构建，由张洪Heo与Tianli设计与开发',
      copyright: 'Copyright © 2024 张洪Heo 京ICP备19051325号-2'
    },

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '简介', link: '/introduction' },
          { text: '安装', link: '/install' }
        ]
      },
      {
        text: '主题适配',
        items: [
          {text: '通用教程', link: '/theme/custom'},
          {text: 'Halo博客', link: '/theme/halo'},
          {text: 'Discuz论坛', link: '/theme/discuz'},
          {text: 'Butterfly', link: '/theme/hexo-theme-butterfly'},
          {text: 'Fluid', link: '/theme/hexo-theme-fluid'},
          {text: 'Argon', link: '/theme/wordpress-argon'},
          {text: '子比主题', link: '/theme/wordpress-zibi'},
          {text: '安知鱼', link: '/theme/hexo-theme-anzhiyu'},
          {text: 'Hao', link: '/theme/halo-theme-hao'},
          {text: 'Solitude', link: '/theme/hexo-theme-solitude'}
        ]
      },
      {
        text: '高级',
        items: [
          {text: '配置参数', link: '/parameters'},
          {text: 'API文档', link: '/api'},
          { text: '更多项目', link: '/more'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhheo/Post-Abstract-AI' }
    ]
  }
})
