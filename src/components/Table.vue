<template>
  <section>
    <div class="container has-text-right mt-4">
      <p class="is-size-7 has-text-info-dark">
        PIS: <strong> 2%</strong> CONFISS: <strong> 2%</strong> COMISSÂO: <strong> 15%</strong> 
      </p>
    </div>
    <div class="table-container mt-4 scroll">
      <table class="table is-fullwidth ">
        <thead class="has-background-dark">
          <tr>
            <th class="has-text-white-ter"> 
              <input type="checkbox">
            </th>
            <th class="has-text-white-ter">Cod</th>
            <th class="has-text-white-ter">Produto</th>
            <th class="has-text-white-ter">Custo</th>
            <th class="has-text-white-ter">Frete</th>
            <th class="has-text-white-ter">Margem</th>
            <th class="has-text-white-ter">Custo final</th>
            <th class="has-text-white-ter"> </th>
          </tr>
        </thead>
        <tbody >
          <TableRow v-for="item in data" :key="item.id" :data="item" @submit="updateCost(item)" />
        </tbody>
      </table>
    </div>
    <div class="container">
      <div class="box is-flex is-justify-content-space-between">
        <div class="ml-4">
          <p>
            Mostrando de 1 até {{ total > 50 ? 50 : total}} de {{total}} Produtos
          </p>
        </div>
        <div class="mr-4">
          Paginação
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll{
  position: sticky; 
  overflow: hidden;
  overflow-y: scroll;
  max-height: 50vh;
}
</style>

<script>
import TableRow from './TableRow'
export default {
  components: {
    TableRow
  },
  async created(){
    await this.fetchData()
  },
  data(){
    return{
      data:[ ],
      total: 0,
      previous:0,
      next: null,
      editing: {}
    }
  },
  methods:{
    async fetchData(){
      await this.$http.get('products/')
        .then((response)=> {
          const { rows, total, previous, next } = response.data
          this.data = rows
          this.total = total
          this.previous = previous
          this.next = next
        }).catch((err)=>{
          console.log(err)
        })
    },
    async updateCost(item){

      await this.$http.patch(`products/${item.id}`, {data: item})
      .then(() =>{
        this.fetchData()
        this.$buefy.toast.open({
          duration: 2000,
          message: 'Custo atualzado',
          position: 'is-top-right',
          type: 'is-success'
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  }
}
</script>