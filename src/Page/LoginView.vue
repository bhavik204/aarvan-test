<template>
    <v-app>
        
        <v-layout>
            
            <v-flex xs12 sm6 offset-sm3>
                <v-card class="xu-card">
                    <h1>Login</h1>
                    <v-form v-model="valid">
                        <v-text-field
                         label="E-mail"
                         v-model="loginData.email"
                         :rules="emailRules"
                         required
                        ></v-text-field>
                        <v-text-field
                            name="input-10-1"
                            label="Password"
                            hint="At least 8 characters"
                            v-model="loginData.password"
                            min="8"
                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (e1 = !e1)"
                            :type="e1 ? 'password' : 'text'"
                            counter="8"
                            required> 
                        </v-text-field>
                
                        <v-checkbox :label="`Remember me`" v-model="rememberMe" color="primary"></v-checkbox>
                    </v-form>
                    <v-card-actions>
                        <v-btn block color="primary" dark  @click.native="login">Login</v-btn>
                        <!-- Snackbar 1 -->
                         <v-snackbar
                            :timeout="timeout"
                            :color="color"
                            :multi-line="mode === 'multi-line'"
                            :top="top"
                            :vertical="mode === 'vertical'"
                            v-model="snackbar"
                        >Login Successfull

                            <v-btn dark flat @click.native="snackbar = true">Close</v-btn>
                         </v-snackbar>

                        <!-- Snackbar 2 -->
                    
                          <v-snackbar
                            :timeout="timeout"
                            color="red"
                            :multi-line="mode === 'multi-line'"
                            :top="top"                            
                            :vertical="mode === 'vertical'"
                            v-model="snackbar1"
                        >Login UnSuccessfull

                            <v-btn dark flat @click.native="snackbar1 = true">Close</v-btn>
                         </v-snackbar>

                        <!-- Snackbar 3-->                        
                          <v-snackbar
                            :timeout="timeout"                            
                            color="orange"
                            :multi-line="mode === 'multi-line'"
                            :top="top"                            
                            :vertical="mode === 'vertical'"
                            v-model="snackbar2"
                        >The user is already Logged In

                            <v-btn dark flat @click.native="snackbar2 = true">Close</v-btn>
                         </v-snackbar>
                    </v-card-actions>
                    <!-- block button -->
                    <div class="login-page-footer-link" >
                        <div >
                            <v-btn block color="primary" flat="flat"  >Forgot password?</v-btn>
                        </div>
                    <div > 
                        <!-- <router-link to="/RegistrationPage" @click="navigatetoRegistration"> -->
                            <v-btn block color="primary" flat="flat" @click="navigatetoRegistration" >Registration</v-btn>
                        <!-- </router-link> -->
                    </div>
                    </div>
                    <!-- added rou//ater-link -->
                      <!-- <div class="login-page-link-padding global-flex-size-1">
                            <router-link to="">Forgot password?</router-link>
                      </div>
                      <div class="login-page-link-padding sign-up-padding">
                          
                              <router-link to="/RegistrationPage" @click="navigateTologin"><a href="RegistrationPage">register</a></router-link>
                          
                      </div>

                    </div>
                   

                    <! <v-dialog v-model="dialog" max-width="300" max-height="400">
                        <v-card>
                            <v-card-title class="headline">Password Warning</v-card-title>
                            <v-card-text>Password is not matched. Please try again.</v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary darken-1" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                                <v-btn color="primary darken-1" flat="flat" @click.native="resetFields()">Try Again</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog> -->

                    <!-- iorta OTP  -->
                   
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
import axios from 'axios'
    export default {

        data() {
            return {
                e1: true,
                e2: false,
                e3: false,
                e4: false,
                e5: true,
                rememberMe: false,

                AgentDetails:[],
                loginData: {
                    email: '',
                    password: ''
                },
                
                dialog: false,
                
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
                ],
                snackbar: false,
                snackbar1: false,
                snackbar2: false,
                color: 'green',
                mode: '',
                timeout: 2000,
                top: true,
}
},

                methods:{
                    navigatetoRegistration()
                    {
                        this.$router.push('/RegistrationPage');

                    },
                    login(){
                        var self = this
                        const formData = {
                        email: this.loginData.email.toLowerCase(),
                        password: this.loginData.password
                        };
                        console.log(formData);
                        this.AgentDetails = self.$store.getters.getAgentDetails
                        console.log(this.AgentDetails)

                        if( this.AgentDetails.email == '')
                        {

                            // this.snackbar2 = true;                             
                        
                        
                        axios.post('http://159.89.161.64:5010/secure/user/login',formData)
                        .then(
                         res => {
                             console.log(res.data.errMsg);
                             this.obj = res.data.errMsg[0];

                             if(res.data.errCode == -1){
                                    self.snackbar = true;
                             console.log("Success")
                          
                                    
                             self.$store.commit('SET_AGENT_DATA',formData)
                                this.$router.push('/proptab');
                             
                         }
                         else{
                             console.log("error")
                             this.snackbar1 = true;                             
                             
                         } 
                         })
                        
                        }
                        else{
                            console.log('User has logged in!!')

                            // this.snackbar2 = true;                             
                            
                        }
                    }
                }
            }

        

       
    
</script>

<style >

    .xu-card {
        padding: 20px;
        position: relative;
        width: 280px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    .nx-flex-row {
        flex-direction: row;
        /* flex-wrap: wrap; */
    }
    
    .v-avatar-icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
    }

    h1{
        text-align: center;
        color: #2d74e5;
    }

    .login-page-footer-link
    {
        display: flex;
        flex-direction: column;
        
        margin-top:10px;

        
    }
    .login-page-link-padding
    {
        padding: 5px;
    }
    .register-margin
    {
         margin-left: 10px;
    }


</style>