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
          <TableRow v-for="item in data" :key="item.id" :data="item" />
        </tbody>
      </table>
    </div>
    <div class="container">
      <div class="box is-flex is-justify-content-space-between">
        <div class="ml-4">
          <p>
            Mostrar 50 de 5000 Produtos
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
  data(){
    return{
      input: false,
      data:[
        {id: 1, product: 'feijão', cust: 5.00, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 4, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 2, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10},
        {id: 3, product: 'feijão', cust: 5, freight: 120, margin: 12, finalPrice: 10}
      ],
      columns: [
        {
          field: 'id',
          label: 'Cod',
          width: '100',
          numeric: true,
          headerClass:"is-dark"
        },
        {
          field: 'product',
          label: 'Produto',
          centered: true,
          headerClass:"is-dark"
        },
        {
          field: 'cust',
          label: 'Custo',
          centered: true,
          headerClass:"is-dark"
        },
        {
          field: 'freight',
          label: 'Frete',
          centered: true,
          headerClass:"is-dark"
        },
        {
          field: 'margin',
          label: 'Margem',
          centered: true,
          headerClass:"is-dark"
        },
        {
          field: 'finalPrice',
          label: 'Preço Final',
          centered: true,
          headerClass:"is-dark"
        }
      ]
    }
  }
}
</script>