<!--父组件-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref } from 'vue';
import { useRouter } from 'vitepress';
const { Layout } = DefaultTheme

const chatbot = ref(false)

const router = useRouter()
router.onBeforeRouteChange = (to) => {
  if(to === '/chat-bot'){
    chatbot.value = true
    return false
  }
}

const closeModal = () => {
  chatbot.value = false;
}
</script>

<template>
  <Modal v-if="chatbot" @close="closeModal"/>
  <Layout></Layout>
</template>