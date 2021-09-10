<template>
  <div >
    <div class="container my-6 border">
      <div class="columns">
        <div class="column is-flex is-4">
          <h2 class="title">Formação de preços</h2>
          <b-tag type="is-warning">Beta</b-tag>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-vcentered is-variable is-1">
        <div class="column is-4">
          <b-button
            label="Sincroizar Produtos"
          />
        </div>
        <div class="column is-3">
          <p class="control has-icons-left">
            <input type="text" class="my-input" placeholder="Buscar Produto">
            <span class="color-icon search-icon">
              <font-awesome-icon icon="search"></font-awesome-icon>
            </span>
          </p>
        </div>
        <div class="column is-flex is-justify-content-center">
          <b-dropdown aria-role="list" class="has-text-left">
            <template #trigger="{ active }">
              <b-button>
                Estado
                <font-awesome-icon :icon="active ? 'angle-up'  : 'angle-down'" />
              </b-button>
            </template>
            <b-dropdown-item>Anuciado</b-dropdown-item>
            <b-dropdown-item>Não anunciado</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="column">
          <b-dropdown aria-role="list" class="has-text-left">
            <template #trigger="{ active }">
              <b-button>
                Fornecedor
                <font-awesome-icon :icon="active ? 'angle-up'  : 'angle-down'" />
              </b-button>
            </template>
            <b-dropdown-item>Tipo um</b-dropdown-item>
            <b-dropdown-item>Tipo dois</b-dropdown-item>
          </b-dropdown>       
        </div>
        <div class="column">
          <b-field class="is-align-items-end">
            <b-checkbox class="is-size-6">Poduto com Prejuizo</b-checkbox>
          </b-field>
        </div>
        <div class="column is-flex is-justify-content-flex-end">
          <b-button class="is-flex" type="is-dark">
            <font-awesome-icon icon="filter" />
            Filtrar
          </b-button>
        </div>
      </div>
    </div>
    <div class="container">
      <Table />
    </div>
  </div>
</template>

<style scoped>
.color-icon{
  color: #CACACA;
}
.my-input{
  border-bottom: solid 2px #CACACA;
  border-top: hidden;
  border-left: hidden;
  border-right: hidden;
  width: 90%;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
}
.my-input:focus{
  box-shadow: 0 0 0 0;
  /* border: 0 none; */
  outline: 0;
}
.search-icon {
  position:absolute;
  top:0; left:0;
  z-index:10;
  border:none;
  background:transparent;
  outline:none;
}
</style>>

<script>
import Table from '../components/Table'
export default {
  name: 'Home',
  components: {
    Table
  }

}
</script>