---
layout: doc
footer: false
editLink: false
prev: false
next: false
---

<div class="password-prompt">
  <div class="prompt-container">
    <p class="prompt-message">如您是HR，请输入本人简历上提供的访问码：</p>
    <input ref="passwordInput" v-model="inputPassword" type="password" class="password-input" @keydown.enter="verifyPassword"/>
    <button @click="verifyPassword" class="verify-button">验证</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</div>

<script setup>  
import { ref, onMounted,watch} from 'vue'
import { useRouter} from 'vitepress'

const correctPassword = '123456'
const inputPassword = ref('')
const errorMessage = ref('')
const routerInstance = useRouter()
const passwordInput = ref(null);

const verifyPassword = () => {
  if (inputPassword.value === correctPassword) {
    sessionStorage.setItem('isAuthenticated', 'true')
    // window.location.reload()
    routerInstance.go("/resume")
  } else {
    errorMessage.value = '密码错误，请重试。'
  }
}

onMounted(() => {
  passwordInput.value.focus();
});

// 当 inputPassword 变化时，清除错误消息
watch(inputPassword, () => {
  errorMessage.value = '';
});

</script>

<style lang="scss">
.password-input{
  font-size: 1rem;
  border-bottom: 1px black solid;
  margin-right: 1rem;
}
</style>
