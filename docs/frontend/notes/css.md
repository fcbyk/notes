---
layout: doc
outline: [2,3]
---

## grid 布局

> 相关资料：
[后盾人](https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/css/11%20%E6%A0%85%E6%A0%BC%E7%B3%BB%E7%BB%9F.html)   [菜鸟教程](https://www.runoob.com/css3/css-grid.html)    [MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

网格布局的逻辑基于网格容器和网格项两个主要概念。

**网格容器**：通过设置 `display: grid;` 属性，将一个元素声明为网格容器。网格容器可以包含一个或多个网格项，它定义了整个网格布局的范围。

**网格项**：网格容器内的子元素称为网格项。每个网格项可以跨越一个或多个网格单元格，其位置和大小由网格布局的规则决定。

网格布局的核心概念是将网格划分为行和列，然后将网格项放置在这些行和列的交叉点上。开发者可以使用 `grid-template-columns` 和 `grid-template-rows` 属性定义网格的列和行的大小和数量，也可以使用 `grid-template-areas` 属性以区域名称的方式定义网格的布局。

在放置网格项时，可以使用 `grid-column` 和 `grid-row` 属性指定网格项所占的列和行的起始和结束位置，也可以使用 `grid-area` 属性直接指定网格项所在的区域名称。

通过这些属性的组合使用，开发者可以创建出复杂的网格布局，实现灵活的页面设计。

`grid-column-gap` 和 `grid-row-gap`：定义网格列和行之间的间隔大小。

`grid-gap`：同时定义列和行之间的间隔大小，等同于 `grid-column-gap` 和 `grid-row-gap` 的缩写。

`justify-items` 和 `align-items`：定义网格项在网格单元格内的对齐方式。

`justify-content` 和 `align-content`：定义网格容器内所有网格项的对齐方式。