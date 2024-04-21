// 主题入口文件创建的位置 .vitepress/theme/index.ts
// 主题入口文件需要将主题（一个对象）作为默认导出

import { h } from 'vue' // 导入h函数，用于创建虚拟节点
import { useData } from 'vitepress' // useData函数是vp中用于获取页面数据的钩子函数
import Theme from 'vitepress/theme' // 这里较模糊，官方文档的Theme是一个接口
import "../style/layout.css" // 导入样式文件
import { DefaultTheme } from 'vitepress'

// 导出一个Theme对象
// 该数据结构可查看 https://vitepress.dev/zh/guide/custom-theme
export default Object.assign({}, Theme, {

  // 每个页面的根布局组件，Layout 属性是必须的
  Layout: () => {

    const props: Record<string, any> = {}

    // 获取页面的frontmatter
    const { frontmatter } = useData()

    // 如果页面frontmatter存在layoutClass属性，添加自定义class
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    // 创建虚拟节点
    return h(Theme.Layout, props)
  }
})

