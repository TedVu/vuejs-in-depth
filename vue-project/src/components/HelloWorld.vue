<script setup lang="ts">
defineProps<{
  header: {
    type: String
    default: 'Ted'
  }
  footer: {
    type: String
    default: 'Kevin'
  }
}>()
</script>

<template>
  <span>
    <slot name="header" headerMsg="Ted"></slot>
    <slot name="footer" footerMsg="Kevin"></slot>
  </span>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
