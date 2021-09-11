<template>
  <div class="container box-shadown">
    <div class="box is-flex is-justify-content-space-between">
      <div class="ml-4">
        <p>
          Mostrando de 1 até {{ total > 50 ? 50 : total}} de {{total}} Produtos
        </p>
      </div>
      <div class="mr-4">
        <div class="control is-flex">
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
    </div>
  </div>
</template>

<style scoped>
.box-shadown{
  box-shadow: 0px -10px 10px -15px black;
}
</style>

<script>
export default {
  name: 'pagination'
}
</script>