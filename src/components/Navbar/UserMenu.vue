<template>
  <b-dropdown class="has-text-left">
    <template #trigger>
      {{userEmail}}
      <font-awesome-icon icon='user-circle'></font-awesome-icon>
    </template>
    <b-dropdown-item>
      Meu plano
    </b-dropdown-item>
    <b-dropdown-item>
      Empresas e Usuarios
    </b-dropdown-item>
    <hr class="dropdown-divider">
    <b-dropdown-item>
      Ajuda
    </b-dropdown-item>
    <b-dropdown-item>
      FAQ
    </b-dropdown-item>
    <hr class="dropdown-divider">
    <b-dropdown-item>
      Sair
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'UserMenu',
  data(){
    return{
      userEmail: 'gabriel@nanuvem.com'
    }
  }
}
</script>