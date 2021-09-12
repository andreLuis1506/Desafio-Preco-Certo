<template>
  <section>
    <Commission />
    <div class="table-container mt-4 scroll">
      <table class="table is-fullwidth ">
        <thead class="has-background-black">
          <tr>
            <th class="has-text-white-ter"> 
              <input type="checkbox">
            </th>
            <Column name="Cod"/>
            <Column name="Produto"/>
            <Column name="Custo"/>
            <Column name="Frete"/>
            <Column name="Margem"/>
            <Column name="Custo Final"/>
            <th class="has-text-white-ter"> </th>
          </tr>
        </thead>
        <tbody >
          <TableRow v-for="(item, index) in data" :key="item.id" :data="item" @submit="updateCost(item,index)" />
        </tbody>
      </table>
    </div>  
    <Pagination :total="total" :next="next" :previous="previous" />
  </section>
</template>

<style scoped>
.scroll{
  position: sticky; 
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: scroll;
  max-height: 50vh;
}
</style>

<script>
import TableRow from './TableRow'
import Pagination from './Pagination'
import Commission from './Commission.vue'
import Column from './Column'
export default {
  components: {
    TableRow,
    Pagination,
    Commission,
    Column
  },
  async created(){
    await this.fetchData()
  },
  data(){
    return{
      data:[ ],
      total: 0,
      previous:null,
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
    async updateCost(item,index){
      await this.$http.patch(`products/${item.id}`, {data: {cost: item.cost}})
      .then((response) =>{
        this.$set(this.data,index, response.data)

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