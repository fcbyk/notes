import type { NavData, NavLink } from '../types'

const NAV_DATA: NavData[] = [
  {
    title: 'AI',
    items: [
      {
        icon: 'https://notes.fe-mm.com/icons/chatgpt.png',
        title: 'ChatGPT 官方',
        link: 'https://chat.openai.com/chat',
        desc: '需要魔法'
      },
      {
        icon: "https://aitopk.com/favicon.ico",
        title: '国内镜像站点1',
        link: 'https://oai.aitopk.com/',
        desc: '可使用4.0，不需要魔法'
      },
      {
        icon: "https://chat18.aichatos.xyz/favicon.ico",
        title: '国内镜像站点2',
        link: 'https://chat18.aichatos.xyz',
        desc: '可使用3.5，不需要魔法'
      },
      {
        icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
        title: '豆包',
        link: 'https://www.doubao.com/',
        desc: '字节跳动-云雀语言模型'
      },
      {
        icon: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/62fddf0fde45a8baedcc7ee5_847541504914fd33810e70a0ea73177e%20(2)-1.png",
        title: 'Discord',
        link: 'https://discord.com/',
        desc: '需要魔法，可以使用Midjourney机器人绘画的通讯平台'
      },
      {
        icon: "https://www.midjourney.com/favicon-32x32.png",
        title: 'Midjourney',
        link: 'https://www.midjourney.com/',
        desc: 'AI绘画'
      }
    ]
  },
  {
    title: '工具',
    items: [
      {
        icon: 'https://cdn.apifox.cn/logo/apifox-logo-256.png',
        title: 'Apifox',
        link: 'https://fcbykcom.apifox.cn/',
        desc: '云端mock非常好用'
      },
      {
        icon: 'https://img.js.design/assets/webImg/favicon.ico',
        title: '即时设计',
        link: 'https://js.design/workspace',
        desc: '不是设计师也可以画点草图'
      },
      {
        icon: 'https://res.wx.qq.com/t/fed_upload/6e074aae-e7af-490b-b421-362685ef2333/login_ic@2x.png',
        title: '微信传输助手',
        link: 'https://filehelper.weixin.qq.com/',
        desc: '手机电脑传文件'
      },
      {
        title: 'varbook',
        link: 'https://varbook.uiuing.com/',
        desc: '标识符助手'
      },
      {
        icon: 'https://man.niaoge.com/public/img/favicon.ico',
        title: 'Linux命令大全',
        link: 'https://man.niaoge.com/',
        desc: '查询您所需要的Linux命令教程和相关实例'
      },
    ]
  },
  {
    title: '视频',
    items: [
      {
        icon: 'https://www.bilibili.com/favicon.ico?v=1',
        title: '哔哩哔哩',
        link: 'https://www.bilibili.com/',
      },
      {
        icon: 'https://assets.fcbyk.com/icons/iqiyi.png',
        title: '爱奇艺',
        link: 'https://www.iqiyi.com/',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        link: 'https://v.qq.com/',
      },
      {
        icon: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico',
        title: '抖音',
        link: 'https://www.douyin.com/',
      },
      {
        icon: 'https://vip.diaoyu18.com/favicon.ico',
        title: '视频解析',
        link: 'https://vip.diaoyu18.com/',
      },
      {
        icon: 'https://www.iyf.tv/assets/images/player_logo.png',
        title: '爱壹帆',
        link: 'https://www.iyf.tv/',
        desc: '需要魔法'
      }
    ]
  },
  {
    title: '游戏',
    items: [
      {
        icon: 'https://store.steampowered.com/favicon.ico',
        title: 'steam官方',
        link: 'https://store.steampowered.com/'
      },
      {
        icon: 'https://pp.520ee.vip/wp-content/uploads/2023/05/1684632573-8f14e45fceea167.png',
        title: 'steam离线游戏',
        link: 'https://pp.520ee.vip/'
      }
    ]
  },
  {
    title: '笔记',
    items: [
      {
        icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original',
        title: '语雀',
        link: 'https://www.yuque.com/'
      }
    ]
  },
  {
    title: '前端',
    items: [
      {
        icon: 'https://v2.cn.vuejs.org/images/logo.svg',
        title: 'vue2 官网',
        link: 'https://v2.cn.vuejs.org/'
      },
      {
        icon: 'https://v2.cn.vuejs.org/images/logo.svg',
        title: 'vue3 官网',
        link: 'https://cn.vuejs.org/'
      },
      {
        icon: 'https://vitepress.dev/vitepress-logo-mini.svg',
        title: 'VitePress',
        link: 'https://vitepress.dev/zh/'
      }
    ]
  },
  {
    title: '未分类',
    items: [
      {
        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
        title: '阿里云',
        link: 'https://www.aliyun.com/'
      },
      {
        icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png',
        title: 'npm',
        link: 'https://www.npmjs.com/'
      },
      {
        icon: 'https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico',
        title: '百度网盘',
        link: 'https://pan.baidu.com/',
      },
      {
        icon: 'https://static.leetcode.cn/cn-mono-assets/production/assets/favicon-192x192.b678b282.png',
        title: 'leetcode',
        link: 'https://leetcode.cn/'
      },
      {
        icon: 'https://g.csdnimg.cn/static/logo/favicon32.ico',
        title: 'csdn',
        link: 'https://www.csdn.net/'
      },
      {
        icon: 'https://docs.gtimg.com/desktop/favicon2.ico',
        title: '腾讯文档',
        link: 'https://docs.qq.com/desktop/'
      },
      {
        icon: 'https://mms.pinduoduo.com/login/favicon.ico',
        title: '拼多多商家后台',
        link: 'https://mms.pinduoduo.com/'
      },
      {
        icon: 'https://regexr.com/assets/icons/favicon.ico',
        title: '正则表达式练习',
        link: 'https://regexr.com/'
      }
    ]
  },
]

// 编写Nav和NavSort类，可链式添加书签
class Nav {
  data: NavData[]
  constructor(NavData: NavData[]) {
    this.data = NavData
  }

  getSort(title: string): NavSort {
    const navItem = this.data.find(item => item.title === title);
    if (navItem) {
      return new NavSort(navItem);
    } else {
      return new NavSort({
        title,
        items: []
      }
      )
    }
  }

  result(): NavData[] {
    return this.data
  }
}

class NavSort {
  title: string;
  items: NavLink[];

  constructor(data: NavData) {
    this.title = data.title;
    this.items = data.items;
  }

  add(title: string, link: string, icon?: string | { svg: string }, desc?: string): NavSort {
    const newItem: NavLink = { title, link, icon, desc };
    this.items.push(newItem);
    return this;
  }

  addTo(nav: Nav): Nav {
    const sortIndex = nav.data.findIndex(item => item.title === this.title);
    if (sortIndex !== -1) {
      nav.data[sortIndex] = {
        title: this.title,
        items: this.items
      };
    } else {
      nav.data.push({
        title: this.title,
        items: this.items
      });
    }
    return nav;
  }
}

const nav = new Nav(NAV_DATA)

// 默认导出
export default nav

// .getSort("笔记")
// .add("notion", "https://www.notion.so/")
// .add("goodnotes", "https://www.goodnotes.com/zh-cn/features")
// .addTo(nav)

// .getSort("测试")
// .add("notion", "https://www.notion.so/")
// .add("goodnotes", "https://www.goodnotes.com/zh-cn/features")
// .addTo(nav)

.result()