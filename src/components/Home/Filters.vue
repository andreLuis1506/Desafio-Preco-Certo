<template>
  <div class="filters-position">
    <div class="p-1">
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
    <div class="p-1">
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
    <div class="p-1">
      <b-field>
        <b-checkbox class="is-size-6">Poduto com Prejuizo</b-checkbox>
      </b-field>
    </div>
    <div class="p-1">
      <b-button class="is-uppercase has-text-weight-bold is-size-6" type="is-light">
        <font-awesome-icon icon="filter" />
        filter
      </b-button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 600px) {
  .filters-position {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 600px ) {
  .filters-position {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .filters-position div{
    padding: 0.5rem;
  }
}
</style>

<script>
export default {
  name: 'Filters'
}
</script>