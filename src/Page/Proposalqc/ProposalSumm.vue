<template>
   <div>
  <v-app >
      <v-toolbar color="secondary" app  clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer" style="color:white;"></v-toolbar-side-icon>
      <div style="margin-left:530px">
                    <img src="http://salesdrive.iorta.in/img/logo.png" alt="">
                </div>
     
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
    >
     <div>
         <v-flex>
              <v-btn flat @click.native="logout">
             logout
         </v-btn>
         </v-flex>
        
     </div>
    </v-navigation-drawer>


     <v-container fluid grid-list-md style="margin-top:40px">
       

        <v-layout justify-space-between>
          <v-btn flat @click.native="jump('/proptab')">
          <v-icon dark >arrow_back</v-icon>
            <div class="body-2">  Details</div>
          </v-btn>
        <div >
            <v-btn round color="yellow darken-2" text-color="white">Reject Case</v-btn>
          <v-btn round color="grey" text-color="white" @click.native="approveForIsuance()">Approve for issuance</v-btn>
        </div>
          
      </v-layout>

      <v-layout row wrap>
         <v-flex d-flex xs12 sm6 md8>
             
          <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-card color="white" class="crd-lyt-mange">
                        <v-layout row wrap style="align-items:center">
                                
                            <flex xs2>
                                <div  class="avtr-mgn">
                                <v-avatar color="teal">
                                    <span class="white--text headline">C</span>
                                </v-avatar>
                                </div>
                            </flex>
                            <div class="crd-cntnt-wdt">
                                
                                <!-- new code -->
                                <div class="dtls-flx-row" style="flex:1">
                                    <div class="">
                                        <P class="subheading mb-0 txt-clr" >Rahul Venkatraman | Male</P>
                                    </div>
                                    <div class="">
                                        <P class="subheading mb-0 txt-clr" >PID81452</P>
                                    </div>
                                </div>
                                <div class="dtls-flx-row" style="padding-top:7px;padding-bottom:7px;">
                                    <div class="">
                                        <P class="caption mb-0 txt-clr" >DOB-02/01/1984 | 34 years</P>
                                    </div>
                                    <div class="">
                                        <P class="caption mb-0 txt-clr" >Created On-01/02/2018</P>
                                    </div>
                                </div>
                                <div class="dtls-flx-row">
                                    <div class="">
                                        <P class="caption mb-0 txt-clr" >App No:128844-Increasing Insurance Plan</P>
                                    </div>
                                </div>
                                <!-- new end -->
                            </div>
                        </v-layout> 
                    </v-card>
                </v-flex>

            <v-flex d-flex >
                <v-card color="white" >
                        <!-- <proposal-fulfilment></proposal-fulfilment>  -->
                      <prop-summ-compo></prop-summ-compo>  
                </v-card>
            </v-flex>

          </v-layout>
        </v-flex>
        

        <v-flex d-flex xs12 sm6 md4>
          <v-layout row wrap>
              <v-flex d-flex xs12>
                <v-card dark color="white">
                    <div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Application Status </P>
                                <P class="body-1 mb-0" style="color:red">Docs Pending </P>
                            </div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Premium Status </P>
                                <P class="body-1 mb-0 " style="color:green" >Recieved</P>
                            </div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Document Status </P>
                                <P class="body-1 mb-0" style="color:red" >Age Proof Pending </P>
                            </div>
                        
                    </div>
                </v-card>
                </v-flex>
               
                    <v-flex d-flex xs12>
              <v-card color="white" dark>
                <div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-2 mb-0 txt-clr" >Personal Details</P>
                            </div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Client ID</P>
                                <P class="body-1 mb-0 txt-clr" >Not Assigned</P>
                            </div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >State</P>
                                <P class="body-1 mb-0 txt-clr" >Maharashtra</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >City</P>
                                <P class="body-1 mb-0 txt-clr" >Mumbai</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Mobile</P>
                                <P class="body-1 mb-0 txt-clr" >9987654321</P>
                            </div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Email</P>
                                <P class="body-1 mb-0 txt-clr" >Rahul@gmail.com</P>
                            </div>
                        
                    </div>
              </v-card>
            </v-flex>
                
              
            <v-flex d-flex xs12>
              <v-card color="white" dark>
                <div>
                    <div class="propal-sum-flx-rw" >
                        <P class="body-2 mb-0 txt-clr" >Policy Details</P>
                    </div>
                    <div class="propal-sum-flx-rw" >
                        <P class="body-1 mb-0 txt-clr" >PT/PPT</P>
                        <P class="body-1 mb-0 txt-clr" >20/10</P>
                    </div>
                        <div class="propal-sum-flx-rw" >
                        <P class="body-1 mb-0 txt-clr" >Frequency </P>
                        <P class="body-1 mb-0 txt-clr" >Yearly</P>
                    </div>
                    <div class="propal-sum-flx-rw" >
                        <P class="body-1 mb-0 txt-clr" >Premium</P>
                        <P class="body-1 mb-0 txt-clr" >19605/-</P>
                    </div>
                        <div class="propal-sum-flx-rw" >
                        <P class="body-1 mb-0 txt-clr" >SA</P>
                        <P class="body-1 mb-0 txt-clr" >400,000/-</P>
                    </div>
                    
                    </div>
              </v-card>
            </v-flex>

            <v-flex d-flex >
              <v-layout row wrap>
                <v-flex d-flex>
              <v-card color="white" dark>
                   <div>
                            <div class="propal-sum-flx-rw" >
                                <P class="body-2 mb-0 txt-clr" >Activity Log</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Document CFR</P>
                                <P class="body-1 mb-0 txt-clr" >OP98830</P>                                
                                <P class="body-1 mb-0 txt-clr" >03/04/2018 15:09</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Document Verified</P>
                                <P class="body-1 mb-0 txt-clr" style="padding-right:19px;">OP98830</P>                                                                
                                <P class="body-1 mb-0 txt-clr" >03/04/2018 15:09</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Premium Verified</P>
                                <P class="body-1 mb-0 txt-clr" style="padding-right:9px;">OP98830</P>                                                                
                                <P class="body-1 mb-0 txt-clr" >03/04/2018 15:09</P>
                            </div>
                             <div class="propal-sum-flx-rw" >
                                <P class="body-1 mb-0 txt-clr" >Case Created</P>
                                <P class="body-1 mb-0 txt-clr" style="padding-left:14px;">OP98830</P>                                
                                <P class="body-1 mb-0 txt-clr" >03/04/2018 15:09</P>
                            </div>
                             <div style="margin-left: 261px" >
                                      <v-layout row justify-center>
                                     <v-btn flat color="secondary" @click.native.stop="dialog1 = true">
                                    view all
                                </v-btn>
                                <v-dialog v-model="dialog1" max-width="500">
                                    <v-card>
                                        <div style="background-color:#3a3a3a">
                                        <v-card-title class="headline" style="color:white">Activity Log</v-card-title>
                                            
                                        </div>
                                        <v-flex xs11 ml-3>
                                        <!-- <v-text-field v-model="comment1" label="comment" required></v-text-field>             -->
                                            <v-data-table
                                                    :headers="headersAL"
                                                    :items="TblDataAL"
                                                    hide-actions
                                                    class="elevation-1"
                                                >
                                            <template slot="items" slot-scope="props">
                                                <td>{{ props.item.Type }}</td>
                                                <td class="text-xs-left">{{ props.item.ID }}</td>
                                                <td class="text-xs-left">{{ props.item.DateandTime}}</td>
                                                
                                                <td class="justify-center layout px-0">

                                                <!-- <v-btn icon class="mx-0" @click.native.stop="dialog = true">
                                                    <v-icon color="grey">settings</v-icon>
                                                </v-btn> -->
                                                
                                                
                                                </td>
                                            </template>
                                        </v-data-table>
                                        </v-flex>
                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="secondary" flat="flat" @click.native="dialog1=false">Cancel</v-btn>
                                    <v-btn color="secondary" @click.native=" dialog1=false">Submit</v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                 </v-layout>
                            </div>
                
                    </div>
              </v-card>
            </v-flex>
        </v-layout>
     </v-flex>
     
            
          </v-layout>
        </v-flex>
        
      </v-layout>
    </v-container>
  </v-app>
</div> 
</template>

<script>
// import proposalFulfilment from './Proposalfulfilment'
import propSummCompo from '../../component/prop-summ-compo'
import axios from 'axios' 

export default {
    data: () => ({
   dialog1:false,
    drawer:false,

    obj:[],
    tabs:[],

    headersAL: [
        {
          text: 'Type',
          align: 'left',
        //   sortable: false,
          value: 'Type'
        },
        { text: 'ID', value: 'ID' },
        { text: 'Date and Time', value: 'DatendsTime' },
      ],
  }),
  components:{
      propSummCompo,
  },

   created () {
         axios.get('http://159.89.161.64:5010/secure/user/getAgentproposal/5a8c1e7d07151804a888eafc?proposalStatus=all').then(
               res => {
                   console.log(res.data.errMsg[0]);
                    // console.log(this.obj)
                   
               }
           ).catch(
               err => {
                   console.log(err) ;
               }
           );

        
      this.initialize()

            //   var me = this;
                
            //      this.GET('getAgentproposal/' +'?proposalStatus=all', response => {
            //         this.obj = (response.data.errMsg)
            //         console.log(this.obj)
            //         var errcodeAPI= -1
            //         if(response.data.errCode == errcodeAPI){
            //         // this.draftIssued = true; 
            //         console.log('success',obj)
            //         }
            //      })
          
      
    },
  methods:{
		 jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },

            openDialogBoxPS(ind){
        console.log(ind)
        console.log('Hellooo')
        this.dialog1 = true

        },

    initialize(){
            this.TblDataAL = [
                {
                    Type:'Document CFR',
                    ID:'OP98830',
                    DateandTime:'03/04/2018  15:09',
                },
                {
                    Type:'Document Verified',
                    ID:'OP98830',
                    DateandTime:'03/04/2018  15:09',
                },
                {
                    Type:'Premium Verified',
                    ID:'OP98830',
                    DateandTime:'03/04/2018  15:09',
                },
                {
                    Type:'Case Created',
                    ID:'OP98830',
                    DateandTime:'03/04/2018  15:09',
                },
            ]
    },
    approveForIsuance(){
        //    ashraf api call
        axios.put('http://159.89.161.64:5010/secure/user/updateProposal/5b0911e1677c4bbf818eef18',{
            AdvisorName:'dkdk99',
            proposalStatus:'login'
        }).then(
               res => {
                   console.log(res.data.errMsg);
                  this.obj = res.data.errMsg[0];
               }
           ).catch(
               err => {
                   console.log(err) ;
               }
           );
           },

            logout(){
                // this.userId = '';
                // if(this.platform === "Web")
                // {
                //     this.$router.go(0);
                // }
                // this.$store.commit('LOGOUT', this.userId);
                const Authenticate={
                     email: '',
                        password: ''
                }
                 this.$store.commit('SET_AGENT_DATA',Authenticate)

               // this.$store.state.applicationFormData =[]
                
                // this.$router.go('/LoginView');
                this.$router.push('/LoginView');
                
                
            },





}
}
</script>

<style scoped>
.card-1 {
		/* padding-left: 5px;
        padding-bottom: 10px;
        padding-top: 12px; */
	}
    .card-1-1 {
		padding-left: 80px;
        /* padding-bottom: 10px; */
        padding-top: 12px;
	}
	.card-1 p {
		text-align: left;
	}
    .txt-clr{
        color: black;
    }

    .propal-sum-flx-rw {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 15px;
        padding-right: 15px;
        /* margin-bottom: 10px; */
        padding-bottom: 8px;
        padding-top: 6px;
    }
    .crd-cntnt-wdt{
        width: 74%;
    }
    .avtr-mgn{
        padding: 20px;
        margin-left: 0px;        
    }

    /* Top card */

    .dtls-flx-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .crd-lyt-mange {
        height: 103px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .lead-header{
    display: flex;
    /* margin: auto;     */
    flex-direction: row;
    align-items: center;
    /* flex: 1; */
    }

    @media screen and (min-width: 320px) {
        .crd-cntnt-wdt{
        width: 77%;
    }
    .card-1 {
        /* display: flex;
		padding-left: 80px;
        padding-bottom: 10px;
        padding-top: 8px; */
	}
    .card-1-1 {
        display: flex;
        
		padding-left: 80px;
        /* padding-bottom: 10px; */
        padding-top: 8px;
	}
    .avtr-mgn{
        padding: 20px;
        margin-left: 128px;
    }

}
    @media screen and (min-width: 768px) {
         .crd-cntnt-wdt{
        width: 72%;
    }
    
    .avtr-mgn{
        padding: 10px;
        /* margin-left: 128px; */
    }
    }
    @media screen and (min-width: 992px) {
        .crd-cntnt-wdt{
        width: 59%;
    }
    .card-1 {
        /* display: flex;
		padding-left: 20px;
        padding-bottom: 10px;
        padding-top: 15px; */
	}
    .card-1-1 {
        display: flex;
        
		padding-left: 18px;
        padding-bottom: 10px;
        padding-top: 15px;
	}
    .avtr-mgn{
        padding: 20px;
        margin-left: 0px;
    }
    }

</style>

