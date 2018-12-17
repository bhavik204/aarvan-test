<template>
    <v-app>
        <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Premium Reciept</div>
      <div slot="header" class="caption" Style="padding-left: 233px;">
        <v-icon color="green">check</v-icon>Verified:Yes</div>
      <div slot="header" class="caption">Status:Complete</div>
      
      <div style="width:755px; overflow: auto">

         <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left" style="padding: 0px;padding-left: 24px;">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native="editItem(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         <v-dialog v-model="dialog" max-width="500">
            <v-card>
                <v-layout style="background-color:#3a3a3a">
                    <v-card-title class="subheading" style="color:white" >Manual Update-Premium Reciept</v-card-title>
                    <v-card-title class="subheading" style="color:white" >PID81452</v-card-title>
                    <v-card-title class="subheading" style="color:white" >Rahul</v-card-title>
                </v-layout>
            

            <!-- <v-flex xs11 ml-3>
                <div class="crd-compo-width">
			<v-layout row wrap>
			
				<div class="pop-field">
				<P class="body-1 mb-0 lblColr" >Nature</P>
				<p class="body-1 mb-0">NB-R</p>
				</div>
			
			
				<div class="pop-field">
				<P class="body-1 mb-0 lblColr">Type</P>
				<p class="body-1 mb-0">Online</p>
				</div>
			
				<div class="pop-field">
				<P class="body-1 mb-0 lblColr">Amount</P>
				<p class="body-1 mb-0">Rs.75,000.00</p>
				</div>
			
				<div class="pop-field">
				<P class="body-1 mb-0 lblColr">Token No.</P>
				<p class="body-1 mb-0">WR879124B</p>
				</div>

				<div class="pop-field">
				<P class="body-1 mb-0 lblColr">Bank Code</P>
				<p class="body-1 mb-0">UTIB653981</p>
				</div>

                <div class="pop-field">
				<v-btn flat class="mx-0" @click.native="editItem(props.item)">edit
                </v-btn>
				</div>
			
		</v-layout>
	  </div>
            </v-flex> -->
  <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Type" label="Type"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Nature" label="Nature"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.Amount" label="Amount"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.TokenNo" label="Token No."></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.BankCode" label="Bank Code"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
    </v-card-text>


            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" flat="flat" @click.native=" close(comment1)">Cancel</v-btn>
                <v-btn color="secondary" @click.native="submit">Submit</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>
        </td>
        
      </template>
        <template slot="footer">
        <td colspan="60%">
        <v-subheader style="width:50%;font-size:12px;" ><v-checkbox
        color="green"
          v-model="checkbox"
            required
          ></v-checkbox >I confirm I have verified all the details of Personal Details Form</v-subheader>
         
        </td>
      </template>
     
    </v-data-table>
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>

<!-- ===============================Proposal Form================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Proposal Form</div>
      <div slot="header" class="caption" Style="padding-left: 251px;">
        <v-icon color="green">check</v-icon>Verified:Yes</div>
      <div slot="header" class="caption">Status:Complete</div>
   
      <div >
         <img src="src/assets/propForm.png" width="750px">
        <div style="padding-left: 35px;">
        <v-subheader style="width:55%;font-size:12px;" ><v-checkbox
        style="padding-top:23px;"
        color="green"
          v-model="checkbox"
            required
          ></v-checkbox >I confirm I have verified all the details of Personal Details Form</v-subheader>
         
        </div>
          
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>

   <!-- ===============================Documents Uploaded================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Documents Uploaded</div>
      <div slot="header" class="caption" Style="padding-left: 225px;">
        <v-icon color="yellow">hourglass_empty</v-icon>Verified:No</div>
      <div slot="header" class="caption" Style="padding-left: 18px;">Status:Requirement</div>
      
      <div style="width: 650px; overflow: auto">

         <!-- <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native.stop="openDialogBox(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         </td>
      </template>
    </v-data-table> -->
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>

  <!-- ===============================Underwriting Related================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Underwriting Related</div>
      <div slot="header" class="caption" Style="padding-left: 213px;">
        <v-icon color="green">check</v-icon>Verified:Yes</div>
      <div slot="header" class="caption">Status:Complete</div>
      
      <div style="width: 650px; overflow: auto">

         <!-- <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native.stop="openDialogBox(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         </td>
      </template>
    </v-data-table> -->
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>

    <!-- ===============================Medical Flag================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Medical Flag</div>
      <div slot="header" class="caption" Style="padding-left: 264px;">
        <v-icon color="green">check</v-icon>Verified:Yes</div>
      <div slot="header" class="caption">Status:Complete</div>
      
      <div style="width: 650px; overflow: auto">

         <!-- <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native.stop="openDialogBox(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         </td>
      </template>
    </v-data-table> -->
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>


 <!-- ===============================CFR Details================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">CFR Details</div>
     <div slot="header" class="caption" Style="padding-left:263px;">
        <v-icon color="yellow">hourglass_empty</v-icon>Open: 2</div>
      <div slot="header" class="caption" Style="padding-left:17px;">Status:Pending</div>
      
      <div style="width: 650px; overflow: auto">

         <!-- <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native.stop="openDialogBox(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         </td>
      </template>
    </v-data-table> -->
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>

   <!-- ===============================Dispatch Details================================ -->
 <template>
   <v-expansion-panel>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i">
               <div slot="header" class="body-2">Dispatch Details</div>
      <div slot="header" class="caption" Style="padding-left:236px;">
        <v-icon color="yellow">hourglass_empty</v-icon>Approved: No</div>
      <div slot="header" class="caption" Style="padding-left:5px;">Status:Pending</div>
      
      <div style="width: 650px; overflow: auto">

         <!-- <v-data-table
            :headers="headers"
            :items="TblData"
            hide-actions
            class="elevation-1"
          >
      <template slot="items" slot-scope="props">
          <td>{{ props.item.SrNo }}</td>
        <td class="text-xs-left">{{ props.item.Type }}</td>
        <td class="text-xs-left">{{ props.item.Nature}}</td>
        <td class="text-xs-left">{{ props.item.Amount}}</td>
        <td class="text-xs-left">{{ props.item.Reciepting}}</td>
        <td class="text-xs-left">{{ props.item.TokenNo}}</td>
        <td class="text-xs-left">{{ props.item.BankCode}}</td>
        <td class="justify-center layout px-0">

          <v-btn icon class="mx-0" @click.native.stop="openDialogBox(props.item)">
            <v-icon color="grey">settings</v-icon>
          </v-btn>
         
         </td>
      </template>
    </v-data-table> -->
    </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
   </template>


    </v-app>
</template>
<script>
export default {
    data(){
        return{
            TblData:[],
            dialog:false,
            checkbox: false,

            headers: [
        {
          text: 'Sr.No',
          align: 'left',
        //   sortable: false,
          value: 'SrNo'
        },
        { text: 'Type', value: 'Type' },
        { text: 'Nature', value: 'Nature' },
        { text: 'Amount', value: 'Amount' },
        { text: 'Reciepting', value: 'Reciepting' },
        { text: 'Token No.', value: 'TokenNo' },
        { text: 'Bank Code', value: 'BankCode' },
        { text: 'Actions', value: 'name', sortable: false }
      ],

      editedIndex: -1,
      editedItem: {
         Type: '',
       Nature:'',
       Amount:'',
       TokenNo:'',
       BankCode:'',
       
      },
      defaultItem: {
        Type: '',
       Nature:'',
       Amount:'',
       TokenNo:'',
       BankCode:'',

      }
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods:{
        initialize(){
            this.TblData = [
          {
              SrNo:'1',
              Type:'NB-R',
              Nature:'Online',
              Amount:'Rs.75,000.00',
              Reciepting:'Done',
              TokenNo:'WR879124B',
              BankCode:'UTIB653981',

          },
          {
           SrNo:'2',
              Type:'NB-BOP',
              Nature:'Cash',
              Amount:'Rs.35,000.00',
              Reciepting:'Pending',
              TokenNo:'-',
              BankCode:'UTIB653981',

          },
         {
            SrNo:'3',
              Type:'NB-BOP',
              Nature:'Cheque',
              Amount:'Rs.80,000.00',
              Reciepting:'Pending',
              TokenNo:'-',
              BankCode:'UTIB653981',

          },
          
        ]
        },
        openDialogBox(ind){
        console.log(ind)
        this.dialog = true

        },
         close(item) {
        this.active = true
        this.dialog = false
       },

        editItem (item) {
        this.editedIndex = this.TblData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      submit() {
      if (this.editedIndex > -1) {
        Object.assign(this.TblData[this.editedIndex], this.editedItem)
      } else {
        this.TblData.push(this.editedItem)
      }
      this.close()
    }
    }
}
</script>
<style>
.pop-field {
		width: 32%;
		padding-top: 10px;
		}
    .lblColr{
		color:#BDBDBD;
	}
    .crd-compo-width{
        width: 100%;
    }
</style>
