import { defineConfig } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
import { getNotes } from './sidebar/getNotes';
import { getTools } from './sidebar/getTools';
import { getDemos } from './sidebar/getDemos';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  title: 'martin 工作随笔',
  description: '记录开发过程中的一些随笔',
  base: '/menotes/', // 部署到github上时访问的根目录
  lastUpdated: true, // 页面上展示最后更新的时间
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
  head: [
    ['link', { rel: 'icon',  href: '/menotes/favicon.png' }], // 也是放在/public目录中
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      {
        text: '自我提升',
        activeMatch: '/enhance',
        items: [
          { text: '学习体系', link: '/enhance/study-tree' },
          { text: '最近计划', link: '/enhance/plan' },
        ],
      },
      { text: '笔记', link: '/notes/start-index', activeMatch: '/notes' },
      { text: '工具管理', link: '/tools/start', activeMatch: '/tools' },
      { text: '有趣的小demo', link: '/demos/start', activeMatch: '/demos' },

      // ...
    ],
    // 配置github地址
    socialLinks: [{ icon: "github", link: "https://github.com/chaxus/ran" }],
    sidebar: {
      'enhance':{
        base: '/enhance/',
        items: [],
      },
      '/notes': {
        base: '/notes/',
        items: getNotes(),
      },
      '/tools': {
        base: '/tools/',
        items: getTools(),
      },
      '/demos': {
        base: '/demos/',
        items: getDemos(),
      },
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: {
      label: '页面导航',
    },
    search: {
      provider: 'local'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },
});
