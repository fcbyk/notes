<template>
  <div class="phone" ref="phone" @mousedown="startDrag" @mousemove="draggingHandler" @mouseup="endDrag"
    @mouseleave="endDrag">
    <div class="phone-title" style="cursor: move;"></div>
    <button class="close-btn-1" @click="closePhone"></button>
    <button class="close-btn-2"></button>
    <button class="close-btn-3"></button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const emits = defineEmits(['close']); // 声明 close 事件

const phone = ref<HTMLElement | null>(null);
const isDragging = ref(false);
let offsetX = 0;
let offsetY = 0;

const startDrag = (event: MouseEvent) => {
  isDragging.value = true;
  offsetX = event.clientX - phone.value!.offsetLeft;
  offsetY = event.clientY - phone.value!.offsetTop;
  document.addEventListener('mousemove', draggingHandler);
};

const draggingHandler = (event: MouseEvent) => {
  if (isDragging.value) {
    let newLeft = event.clientX - offsetX;
    let newTop = event.clientY - offsetY;
    // 边界检查
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    const maxWidth = window.innerWidth - phone.value!.offsetWidth;
    if (newLeft > maxWidth) newLeft = maxWidth;
    const maxHeight = window.innerHeight - phone.value!.offsetHeight;
    if (newTop > maxHeight) newTop = maxHeight;
    // 设置元素的位置
    phone.value!.style.left = newLeft + 'px';
    phone.value!.style.top = newTop + 'px';
  }
};

const endDrag = () => {
  isDragging.value = false;
  document.removeEventListener('mousemove', draggingHandler);
};

const closePhone = () => {
  emits('close'); // 调用 close 事件
};
</script>

<style lang="scss" scoped>
@mixin close-btn($left, $color, $content) {
  position: absolute;
  top: 7.5px;
  left: $left;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: $color;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    &::before {
      content: $content;
      color: white;
      font-size: 10px;
    }
  }
}

.phone {
  position: fixed;
  z-index: 100;
  width: 600px;
  height: 80vh;
  left: 30%;
  top: 10%;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, .4);
  transition: all 0.3s ease;
}

.close-btn-1 {
  @include close-btn(15px, #FF5F57, "×");
}

.close-btn-2 {
  @include close-btn(35px, #FFBD2E, "");
}

.close-btn-3 {
  @include close-btn(55px, #28C840, "");
}

.phone-title {
  pointer-events: auto;
  white-space: nowrap;
  padding: 0 80px 0 20px;
  border-bottom: 1px solid #F0F0F0;
  font-size: 14px;
  overflow: hidden;
  line-height: 30px;
  height: 30px;
  box-sizing: border-box;
  background: rgba(250, 250, 250, .9);
  padding-left: 120px;
  border-radius: 1rem 1rem 0 0;
  color: #333;
  text-align: center;
  cursor: move;
}

@media (max-width: 600px) {
  .phone{
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    border-radius: 0;
  }
  .close-btn-1 {
    @include close-btn(15px, rgba(255, 255, 255, 0), "<");
    &::before {
      content: "<";
      color: rgb(0, 0, 0);
      font-size: 1.5rem;
    }

    &:hover {
    &::before {
      content: "<";
      color: rgb(0, 0, 0);
      font-size: 1.5rem;
    }
  }
  }

.close-btn-2,.close-btn-3  {
  display: none;
}
}
</style>