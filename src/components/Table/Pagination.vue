<template>
  <div class="mr-4">
    <div class="control is-flex is-justify-content-space-around ">
      <b-button
        :disabled='next == null ? true : false '
        size="is-small"
      >
        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
      </b-button>
      <b-button
        size="is-small" 
        v-for="index in 3" :key="index" 
        :class="index === 1 ? 'is-primary' : ''">
        {{index}}
      </b-button>
      <b-button
        size="is-small"
        :disabled='previous == null ? true : false '
      >
        <font-awesome-icon icon="chevron-right" ></font-awesome-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination'
}
</script>