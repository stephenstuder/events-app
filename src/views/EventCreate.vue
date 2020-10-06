<template>
  <div>
    <h1>Create and Event, {{user.name}}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{catLength}} categories</p>
    <p>{{$store.getters.activeTodosCount}}</p>
    <!-- <p>{{getEvent(1)}}</p> -->
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    ...mapState(['user', 'categories']), //<-- spread operator allows for other computed properties
  },
}
</script>

<style lang="scss" scoped>
</style>