---
layout: doc
outline: [2,3]
---
<script lang="ts" setup>
import NavigationBar1 from "../.vitepress/components/NavigationBar1.vue"
</script>


### 弹性导航栏

<NavigationBar1/>

[以下为伪代码，点击此处可查看源码](https://github.com/fcbyk/docs/blob/main/docs/.vitepress/components/NavigationBar1.vue)

结构

```html
<nav>
  <!-- nav元素下有两种类型的元素，选项div根据需要添加多个 -->
  <div class="item active">选项元素</div>
  <div class="tab" ref="tab">滑动元素</div>
</nav>
```

逻辑

```javascript
const handleClick = (item: string) => {
  // 两个逻辑(点击事件实现)
  // 更改滑动元素的定位 -> 更改css的left
  // 更改选项字体颜色 -> 更改元素的class属性
};
```

样式

```scss
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

