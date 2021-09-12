<template>
  <p class="control has-icons-left m-4">
    <input type="text" class="my-input" placeholder="Buscar Produto">
    <span class="color-icon search-icon">
      <font-awesome-icon icon="search"></font-awesome-icon>
    </span>
  </p>
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
</style>

<script>
export default {
  name: 'SearchField'
}
</script>