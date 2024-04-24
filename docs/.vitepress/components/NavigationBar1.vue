<template>
  <nav>
    <div v-for="(tab, index) in tabs" :key="index" :class="{ item: true, active: selectedTab === tab.value }"
      @click="handleClick(tab.value)">
      {{ tab.label }}
    </div>
    <div class="tab" ref="tab"></div>
  </nav>

</template>

<script setup lang="ts">
import { ref } from "vue";

const tab = ref<HTMLElement | null>(null);
const selectedTab = ref<string>("0");

const tabs = ref([
  { label: "First", value: "0" },
  { label: "Second", value: "20%" },
  { label: "Third", value: "40%" },
  { label: "Fourth", value: "60%" },
  { label: "Fifth", value: "80%" }
]);

const handleClick = (item: string) => {
  tab.value.style.left = item;
  selectedTab.value = item;
};
</script>

<style scoped lang="scss">
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
</style>