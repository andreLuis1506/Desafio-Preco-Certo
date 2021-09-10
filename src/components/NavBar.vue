<template>
  <b-navbar :fixed-top="true" type="is-dark">
    <template #brand>
      <b-navbar-item>
        <img 
          class="image"
          src="../assets/logo.png"
        />
        <!-- <b-image
          :responsive="true"
          :src="require('@/assets/logo.svg')"
          ratio="40by30"
        > -->
          
        <!-- </b-image> -->
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
      <b-navbar-item>
        <font-awesome-icon icon="bell"/>
      </b-navbar-item>
      <b-navbar-item>
        <b-dropdown class="has-text-left">
          <template #trigger>
            gabriel@nanuvem.com
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
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style>
  .log{
    width: 417px;
    height: 120px;
  }
</style>

<script>
export default {
  name: 'NavBar'
  
}
</script>