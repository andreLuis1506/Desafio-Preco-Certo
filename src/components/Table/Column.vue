<template>
  <th class="has-text-white-ter pb-0 mb-0">
    <p class="m-0">
      {{name}}
      <font-awesome-icon icon="sort"/>
    </p>
  </th>
</template>

<script>
export default {
  name: 'column',
  props: ['name']
}
</script>