<template>
  <div >
    <div class="container my-6">
      <Title />
    </div>
    <div class="container">
      <div class="position">
        <div>
          <b-button
            label="Sincroizar Produtos"
          />
        </div>
        <div class="position">
          <SearchField />
          <Filters />
        </div>
      </div>
    </div>
    <div class="container">
      <Table />
    </div>
  </div>
</template>

<style scoped>
@media(max-width: 1250px){
  .position{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}
@media (min-width: 1250px){
  .position{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

</style>

<script>
import Title from '../components/Home/Title'
import SearchField from '../components/Home/SearchField.vue'
import Filters from '../components/Home/Filters'
import Table from '../components/Table/Index'
export default {
  name: 'Home',
  components: {
    Title,
    SearchField,
    Filters,
    Table
  }

}
</script>