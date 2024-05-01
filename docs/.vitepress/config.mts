// 定义vp站点的全局设置，配置文件应该默认导出一个对象
// 该数据结构可通过TypeScript中的声明语句进行查看

// 辅助函数，参数为一个配置对象，函数的返回值也是一个配置对象，只是多了选项提示
import { defineConfig } from 'vitepress'

// 默认导出
export default defineConfig({

  title: "小屋文档",

  head: [
    // 引入图标库
    ['link', { rel: 'stylesheet', href: 'https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }]
  ],
 
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
    sidebar:{
      "/frontend/":[
        {
          text:"练习",
          items:[
            {
              text: "导航栏",
              link: "/frontend/navigation-bar",
            },
            {
              text: "时钟",
              link: "/frontend/clock",
            },
            {
              text: "动画",
              link: "/frontend/animation",
            }
          ]
        }
      ],
      "/":[
        {
          text: "关于本站",
          link: "/",
        },
        {
          text: "域名由来",
          link: "/name",
        }
      ]
    },

    nav:[
      {
        text: "前端",
        link: "/frontend/navigation-bar"
      },
      {
        text: "书签",
        link: "/bookmarks/"
      }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
