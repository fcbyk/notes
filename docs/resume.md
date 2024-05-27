---
layout: doc
---

<script setup>  
import { onBeforeMount} from 'vue'
import { useRouter} from 'vitepress'

onBeforeMount(() => {
  const routerInstance = useRouter()
  if(sessionStorage.getItem('isAuthenticated') != 'true') routerInstance.go('/resume-password')
});

</script>

# 关于作者

## 等待编辑...