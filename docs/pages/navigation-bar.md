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
  // 形状
  width: 90%;
  height: 40px;
  border-radius: 35px;
  padding: 0;
  
  // 背景颜色与阴影
  background-color: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  
  // 字体设置
  line-height: 40px;
  font-size: 1rem;
  font-weight: 500;
  user-select: none;

  // 子元素定位
  display: flex;
  position: relative;
  margin: 2rem 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  .item {
    flex: 1;
    width: 100%;
    position: relative;
    cursor: pointer;
    z-index: 1;
    color: #333;
    overflow: hidden;
  }

  .tab {
    position: absolute;
    height: 100%;
    width: 20%;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(to right, #f09819, #ff5858);
    border-radius: 35px;
    transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .active {
    color: #fff;
    transition: 0.6s;
  }
}
```

