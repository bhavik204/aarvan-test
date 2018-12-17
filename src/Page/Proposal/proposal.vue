<template>
	<v-app >
			<div class="prop-layout-new" >
				<v-flex v-for="(listData, index) in obj" :key="index"  class="pros-card-new mt-2" xs12 lg6 >
			<card-component :page-name="cardListData.pageName" :card-data="listData"></card-component>
			</v-flex>
			</div>
	</v-app>
</template>

<script>
	import cardComponent from '../../component/CardComponent.vue'
	import axios from 'axios'
	export default{
components:{
	cardComponent 
},
created(){
 axios.get('http://159.89.161.64:5010/secure/user/getAgentproposal/5a8c1e7d07151804a888eafc?proposalStatus=all').then(
               res => {
				   console.log(res.data.errMsg[0]);
				   this.obj= res.data.errMsg[0];
                   // console.log(this.obj.benefitIllustration)
                   
               }
           ).catch(
               err => {
                   console.log(err) ;
               }
           );
},
		data () {
      return {
		  	  obj:[],
		  cardListData:{
			  pageName:'New',
		

			  data:[{
        	
					name:'Rahul Soni',
					proposalId:'PID276674',
					planName:'Increasing Insurance',
					createdDate:'25-may-2018',
					recieptingStatus:'Pending',
					specialCare:'Yes',
					status:'New',
        		},
				{
        	
					name:'Abhi Jain',
					proposalId:'PID276674',
					planName:'Increasing Insurance',
					createdDate:'25-may-2018',
					recieptingStatus:'Pending',
					specialCare:'Yes',
					status:'UnOpened',
				},
				{
        	
					name:'Pratik Sharma',
					proposalId:'PID276674',
					planName:'Increasing Insurance',
					createdDate:'25-may-2018',
					recieptingStatus:'Pending',
					specialCare:'Yes',
					status:'UnOpened',
				},
				
				],
			
		  },
		//   cardListDatas:{
		// 	  pageName:'Open',
			  
		//   }
        
      }
    }
	}
</script>

<style>
	.pros-card-new{
		padding: 4px;

	}
	#card{
		text-align: left;
		margin-bottom: 5px;

	}
	.prop-layout-new{
		display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
	}
			
	/* .prop-row-wrap{
		    flex: 1 1 auto;
		flex-direction: row;
   
    max-width: 100%;
    position: relative;
	} */
	/* @media screen and (min-width: 320px) {
		
	}

	@media screen and (min-width: 768px) {
		.nx-flex-direction-ld-mgmt {
            flex-direction: column;
        }
	}

	@media screen and (min-width: 992px) {
		
	} */
</style>