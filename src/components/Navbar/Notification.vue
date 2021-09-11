<template>
  <b-navbar-item>
    <font-awesome-icon icon="bell"/>
    <div class="notification-number has-background-warning has-text-centered notification-position">
      <p class="is-size-7 notification-font">{{notificationNumber}}</p>
    </div>
  </b-navbar-item>
</template>

<style scoped>
.notification-number{
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
}
.notification-font{
  color:black ;
  font-weight: 500;
}
.notification-position{
  position: relative;
  top: -10px; right: 6px;
}
</style>

<script>
export default {
    name: 'Notification',
    data(){
      return{
        notificationNumber: 3
      }
    }
}
</script>