<template>
<div class="container">
     <!-- <app-login-page></app-login-page> -->
    <!-- <registration-page></registration-page> -->
    <!-- All Routes show here -->
    
    
    <router-view></router-view>
   
    <!-- <app-dashboard></app-dashboard> -->
    <!-- <app-dash></app-dash> -->


    </div>
</template>

<script>
    import appLoginPage from './Page/LoginView.vue'
    import registrationPage from './Page/RegistrationPage.vue'

   // import Table from './Page/Table.vue'


    export default {
        components: {
            appLoginPage,
            registrationPage,

           // appTable,


        }
    }
</script>

<style scoped>

   

</style>