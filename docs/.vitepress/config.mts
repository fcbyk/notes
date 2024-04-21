// 定义vp站点的全局设置，配置文件应该默认导出一个对象
// 该数据结构可通过TypeScript中的声明语句进行查看

// 辅助函数，参数为一个配置对象，函数的返回值也是一个配置对象，只是多了选项提示
import { defineConfig } from 'vitepress'

// 默认导出
export default defineConfig({

  title: "小屋文档",
 
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
    }
  }
})