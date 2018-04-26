<template>
  <ul class="list-group">
      <li
      v-for="(contact, key) in contacts" 
      :key="key" 
      class="list-group-item"
      >
      {{contact.name}}
      </li>
  </ul>
</template>

<script>
export default {
  props: ['contacts']
}
</script>
