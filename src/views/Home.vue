<template>
  <div >
    <div class="container my-6 border">
      <div class="columns">
        <div class="column is-flex is-4">
          <h2 class="title">Formação de preços</h2>
          <b-tag class="tag-position" type="is-warning">Beta</b-tag>
          <div class="b2w-icon is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <p class="b2w-primary-font">B<strong class="b2w-2-color">2</strong>W</p>
            <p class="b2w-secundary-font"> Digital</p>
          </div>
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
        <div class="column is-flex">
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
        <div class="column is-2">
          <b-field class="is-align-items-end">
            <b-checkbox class="is-size-6">Poduto com Prejuizo</b-checkbox>
          </b-field>
        </div>
        <div class="column">
          <b-button class="is-flex" type="is-light">
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
  width: 18rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
}
.my-input:focus{
  box-shadow: 0 0 0 0;
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
.tag-position{
  position: relative;
  top:-1rem; right:2rem;
  font-weight: 900;
}
.b2w-icon{
  position: relative;
  top: -0.8rem; left: -1rem;
  border-radius: 50%;
  background-color:#07EAC3;
  height: 3rem;
  width: 3rem;
}
.b2w-primary-font{
  font-weight: 900;
  font-size: 1rem;

}
.b2w-secundary-font{
  font-weight: bold;
  font-size: 0.5rem;
}
.b2w-2-color{
  color: #F5F5F5;
}
</style>

<script>
import Table from '../components/Table/Index'
export default {
  name: 'Home',
  components: {
    Table
  }

}
</script>