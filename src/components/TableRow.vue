<template>
  <tr>
    <th>
      <input type="checkbox">
    </th>
    <th>{{data.code}}</th>
    <th>
      <p>{{data.name}}</p>
    </th>
    <th>
      <p v-show="!isEditable" @click="isEditable = !isEditable" >R$ {{data.cost}}</p>
      <input v-show="isEditable" type="number"  v-model="data.cost" @input="updateCost">
    </th>
    <th>
      <p>
        R${{data.south_shipping}}
      </p>
      <p>
        R${{data.north_shipping}}
      </p>
    </th>
    <th>
      <p>
        R${{data.south_shipping}} <strong class="ml-4">52%</strong> 
      </p>
      <p>
        R${{data.north_shipping}} <strong class="ml-4">11%</strong> 
      </p>
    </th>
    <th>R${{data.price}}</th>
    <th> 
      <b-button size="is-small">Enviar preço</b-button>
    </th>
  </tr>
</template>

<style scoped>
input{
  border: none;
}
input:focus{
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
</style>

<script>
export default {
  name: 'TableRow',
  props:['data'],
  data(){
    return {
      isEditable: false
    }
  },
  methods:{
    updateCost(){
      clearTimeout(this.updateCost.timeout);

      this.updateCost.timeout = setTimeout( () => {
        this.submit()
        this.isEditable = false
        }, 1000);
    },
    submit(){
      this.$emit('submit')
    }
  }
}
</script>