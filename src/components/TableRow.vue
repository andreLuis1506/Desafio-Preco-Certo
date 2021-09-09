<template>
  <tr>
    <th>
      <input type="checkbox">
    </th>
    <th>{{data.id}}</th>
    <th>
      <p>{{data.product}}</p>
    </th>
    <th>
      <p v-show="!isEditable" @click="isEditable = !isEditable" >R$ {{data.cust}}</p>
      <input v-show="isEditable" type="number"  v-model="data.cust" @input="updatePrice">
    </th>
    <th>R${{data.freight}}</th>
    <th>R${{data.margin}} </th>
    <th>R${{data.finalPrice}}</th>
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
    updatePrice(){
      console.log('digitou');
      clearTimeout(this.updatePrice.timeout);

      this.updatePrice.timeout = setTimeout( () => {
        this.isEditable = false
        }, 1000);
    }
  }
}
</script>