// 定义vp站点的全局设置，配置文件应该默认导出一个对象
// 该数据结构可通过TypeScript中的声明语句进行查看

// 辅助函数，参数为一个配置对象，函数的返回值也是一个配置对象，只是多了选项提示
import { DefaultTheme, defineConfig} from 'vitepress'
import { sidebar } from './theme-config/sidebar'
import { nav } from './theme-config/nav'
import { search } from './theme-config/search'

// 默认导出
export default defineConfig({

  title: "不愉的笔记本",

  head: [
    // 引入图标库
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],

  cleanUrls:true,
 
  // 主题相关配置
  themeConfig: {

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fcbyk/docs' }
    ],

    // 把页面默认的英文改中文
    darkModeSwitchLabel:"夜间模式",
    sidebarMenuLabel:"文档",
    returnToTopLabel:"返回顶部",
    outlineTitle:"目录",

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 配置侧边栏
    sidebar,

    nav,

    search,
  }
})
