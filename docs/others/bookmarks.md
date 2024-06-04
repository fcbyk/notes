---
layout: doc
layoutClass: bookmarks
# sidebar: false
# outline: false
prev: false
next: false
---

<script lang="ts" setup>
import NavLinkGroup from './../.vitepress/components/NavLinkGroup.vue'
import NAV_DATA from './../.vitepress/model/bookmark'
</script>

# 浏览器书签

<NavLinkGroup v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<p 
style="
margin-top: 2rem;
margin-right: 2rem;
color: rgb(73, 73, 73);
font-size:0.9rem;
font-style: italic;
">
-> 该页面搭建参考自 <a href="https://juejin.cn/post/7204860462239498296" target="_blank">掘金文章</a>
</p>


<br />