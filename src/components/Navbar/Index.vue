<template>
  <b-navbar wrapper-class="container" :fixed-top="true" type="is-primary">
    <template #brand>
      <b-navbar-item>
        <img 
          class="image"
          src="../../assets/logo.png"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <font-awesome-icon icon="chart-line"></font-awesome-icon>
        Dashboard
      </b-navbar-item>
      <b-navbar-dropdown label="Gerenciar">
        <b-navbar-item>
          Meus produtos
        </b-navbar-item>
        <b-navbar-item>
          Cateoria de produtos
        </b-navbar-item>
        <b-navbar-item>
          Pedidos de vendas
        </b-navbar-item>
        <b-navbar-item>
          Meus Kits
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Otimazar">
        <b-navbar-item>
          Compras 
        </b-navbar-item>
        <b-navbar-item>
          Produtos
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Simular">
        <b-navbar-item>
          Preços
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Historico">
      </b-navbar-dropdown>
      <b-navbar-dropdown label="Configurar">
        <b-navbar-item>
          Configurações basicas
        </b-navbar-item>
        <b-navbar-item>
          Integrações
        </b-navbar-item>
        <b-navbar-item>
          Formas de pagamento
        </b-navbar-item>
        <b-navbar-item>
          Canais de venda
        </b-navbar-item>
        <b-navbar-item>
          Fornecedres
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <Notification />
      <b-navbar-item>
        <UserMenu />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Notification from './Notification'
import UserMenu from './UserMenu.vue'
export default {
  name: 'NavBar',
  components:{
    Notification,
    UserMenu
  }
  
}
</script>