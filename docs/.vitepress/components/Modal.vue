<!-- 子组件，Modal组件 -->

<template>
    <!-- <div class="blur-filter"></div> -->

    <div 
      class="phone" 
      ref="phone"
      @mousedown="startDrag"
      @mousemove="draggingHandler"
      @mouseup="endDrag"
      @mouseleave="endDrag"
    >
    <button class="close-btn" @click="closePhone">Close</button>
    <!-- 其他内容 -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vitepress';
  import { ref, defineEmits } from 'vue';

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
  .blur-filter{
      position: absolute;
      z-index: 50;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0);
      backdrop-filter: blur(1px);
      -webkit-backdrop-filter: blur(1px);
  }
  .phone{
      position: absolute;
      z-index: 51;
      width: 600px;
      height: 80vh;
      left: 30%;
      top: 10%;
      border:  1px rgb(91, 91, 91) solid;
      border-radius: 1rem;
      background-color: white;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    }
  </style>
  