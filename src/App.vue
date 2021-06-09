<template>
  <div id="app" class="dark layout">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NavBar,
    NotificationContainer,
  },
}
</script>


