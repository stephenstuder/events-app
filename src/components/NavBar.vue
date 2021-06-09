<template>
  <header id="nav">
    <router-link to="/">Example Events App</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

