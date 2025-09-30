// .vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({

  base: '/practice/',
  title: "崔恩荣",
  description: "韩国作家",
  
  themeConfig: {
    outlineTitle:"目录",
    outline:[2,6],
    logo:"/头像.png",
    nav: [
      { text: '首页', link: '/' },
      { text: '即使不努力', link: '/即使不努力' },
      { text: '明亮的夜晚', link: '/明亮的夜晚' }
    ],

    sidebar: [
      {
        text: '作品集',
        items: [
          { text: '即使不努力', link: '/即使不努力' },
          { text: '明亮的夜晚', link: '/明亮的夜晚' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gsh-sxdd/practice2' }
    ],
    
    footer: {
      message: '版权所有',
      copyright: 'Copyright © 2025 gsh-sxdd'
    }
  }
})