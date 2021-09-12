<template>
  <div class=" is-flex">
    <h2 class="title">Formação de preços</h2>
    <b-tag class="tag-position" type="is-warning">Beta</b-tag>
    <div class="b2w-icon is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <p class="b2w-primary-font">B<strong class="b2w-2-color">2</strong>W</p>
      <p class="b2w-secundary-font"> Digital</p>
    </div>
  </div>
</template>

<style scoped>
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
export default {
    name: 'Title'
}
</script>