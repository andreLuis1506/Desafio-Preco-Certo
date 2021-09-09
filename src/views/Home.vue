<template>
  <div >
    <div class="container my-6">
      <h2 class="title">Formação de preços</h2>
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
            <input type="text" class="input is-small" placeholder="Buscar Produto">
            <span class="icon is-small is-left">
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

<script>
import Table from '../components/Table'
export default {
  name: 'Home',
  components: {
    Table
  }

}
</script>