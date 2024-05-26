---
layout: doc
outline: [2,3]
---
<script lang="ts" setup>
import NavigationBar1 from "./components/NavigationBar1.vue"
import NavigationBar2 from "./components/NavigationBar2.vue"
import NavigationBar3 from "./components/NavigationBar3.vue"
</script>


### 弹性导航栏

<NavigationBar1/>

<!-- 以下为伪代码，[点击此处查看源码]() -->

::: code-group

```html [结构]
<nav>
  <!-- nav元素下有两种类型的元素，选项div根据需要添加多个 -->
  <div class="item active">选项元素</div>
  <div class="tab" ref="tab">滑动元素</div>
</nav>
```

```Typescript [逻辑]
const handleClick = (item: string) => {
  // 两个逻辑(点击事件实现)
  // 更改滑动元素的定位 -> 更改css的left
  // 更改选项字体颜色 -> 更改元素的class属性
};
```

```scss [样式]
nav {
  // 形状：[高度宽度,边框圆角的半径,内边距，外边距]
  // [背景颜色,阴影]
  // 字体设置: [行高,字体大小,颜色,字重,不可选，居中显示]
  // 子元素布局：[弹性盒子，对齐方式]
  // 定位:[相对定位]

  .item {
    // 形状: [宽高]
    // 定位: [弹性盒子设置]
    // 显示方式: [z轴，溢出处理，鼠标样式]
  }

  .tab {
    // 形状: [宽高,圆角半径]
    // 定位: [绝对定位，偏移]
    // 外观（纯色背景）和过渡效果
  }

  .active {
      // 字体颜色，过渡
  }
}
```
:::

<div class="code-box">
    <div class="be-from"><a href="https://www.bilibili.com/video/BV1Jq4y1y7uy/" target="_blank">源于</a></div>
    <div class="vue-code"><a href="https://github.com/fcbyk/docs/blob/main/docs/.vitepress/components/NavigationBar1.vue" target="_blank">vue3组件实现</a></div>
</div>

### 侧边导航栏

<NavigationBar2/>

::: code-group

```html [结构]
<nav>
    <!-- 两列表嵌套 -->
    <ul class="menus">
        <li class="li">
            <!-- 图标库,名称 -->
            <i class="fa fa-comment"></i> 名称

            <!-- 子列表隐藏->宽度设为0 -->
            <ul><li>内容</li></ul>
        </li>
    </ul>
</nav>
```

```scss [样式]
nav {
	//形状与定位方式
    .menus {
        // 字体设置
        .li {
            &:hover {
				// 鼠标悬浮时，列表项背景颜色改变，
                ul {
                    // 子列表宽度变化
                }
            }
            .fa { // 图标设置 }
            ul {
                // 子列表形状与定位方式，过渡效果
                li {
                    // 列表项设置
                    &:hover {
                        // 背景颜色变化
                    }
                }
            }
        }
    }
}
```
:::

<div class="code-box">
    <div class="be-from"><a href="https://www.bilibili.com/video/BV1kb4y1J7L9/" target="_blank">源于</a></div>
    <div class="vue-code"><a href="https://github.com/fcbyk/docs/blob/main/docs/.vitepress/components/NavigationBar2.vue" target="_blank">vue3组件实现</a></div>
</div>

### 可下拉导航栏

<NavigationBar3/>

::: code-group

```html [结构]
<!-- 两个无序列表嵌套 -->
<ul class="nav">
    <li>
        <span>消息</span>
        <ul><li>回复我的</li></ul>
    </li>
</ul>
```

```scss [样式]
.nav {
    // 弹性盒子
    li {
        // 长宽设置，字体设置等
        &:hover {
            // 颜色变化
            li {
                // 控制高度，透明度等
            }
        }
        // 次列表项
        ul {
            li {
                // 透明度为0，高度为0等设置
                &:hover {
                   // 颜色变化
                }
            }
        }
    }
}
```
:::

<div class="code-box">
    <div class="be-from"><a href="https://www.bilibili.com/video/BV1S44y147oV/" target="_blank">源于</a></div>
    <div class="vue-code"><a href="https://github.com/fcbyk/docs/blob/main/docs/.vitepress/components/NavigationBar3.vue" target="_blank">vue3组件实现</a></div>
</div>