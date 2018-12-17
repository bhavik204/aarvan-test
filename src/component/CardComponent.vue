<template>
   <!-- <v-app> -->
  <v-card>
    <v-layout row wrap class="card-compo-row-al-cntr ">
     
      <v-flex xs2 >
		  <div style="padding:18px;">
			  <div style="">
				  <v-avatar color="red">
          			<span class="white--text headline">C</span>
        		</v-avatar>
				<p class="body-2 mb-0 pt-2" :style="{ color: statusColors.statusStyle}">{{cardData.status}}</p>
				
			  </div>
			
		  </div>
        
      </v-flex>
		<div class="crd-compo-width">
			<v-layout row wrap>
			
				<div class="field_1">
				<P class="caption mb-0 lblClr" >Name</P>
				<p class="body-1 mb-0">{{cardData.benefitIllustration.AdvisorName}}</p>
				</div>
			
			
				<div class="field_1">
				<P class="caption mb-0 lblClr">Proposal ID</P>
				<p class="body-1 mb-0">{{cardData.proposalId}}</p>
				</div>
			
				<div class="field_1">
				<P class="caption mb-0 lblClr">Plan Name</P>
				<p class="body-1 mb-0">{{cardData.planName}}</p>
				</div>
			
				<div class="field_1">
				<P class="caption mb-0 lblClr">Created Date</P>
				<p class="body-1 mb-0">{{cardData.createdDate}}</p>
				</div>

				<div class="field_1">
				<P class="caption mb-0 lblClr">Reciepting Status</P>
				<p class="body-1 mb-0">{{cardData.recieptingStatus}}</p>
				</div>

				<div class="field_1">
				<P class="caption mb-0 lblClr">Special Case</P>
				<p class="body-1 mb-0">{{cardData.specialCare}}</p>
				</div>

				<div class="field_2btn">
					<v-btn small color="secondary" @click.native="jump('/proposalsumm')">View Details</v-btn>
				</div>
			
		</v-layout>
	  </div>
      
		<v-flex xs1>
			<v-card-actions>
				<v-layout row wrap>
					<v-btn icon>
						<v-icon class="btn-icon">email</v-icon>
					</v-btn>
					<v-btn icon>
						<v-icon class="btn-icon">phone</v-icon>
					</v-btn>
					<v-btn icon>
						<v-icon class="btn-icon">message</v-icon>
					</v-btn>
				</v-layout>
			</v-card-actions>    
		</v-flex>

    </v-layout>
  </v-card>
    
</template>
<script>
export default {
    props:{
		statusTitle: String,
        cardData: Object,
        pageName: String
	},

	data(){
		return{
			 statusColors: {
                new: '#E8BD55',  
                open:'#8F68B9',
                QCpassed: '#70A1DE',
                QCrejected:'#2C93DE',
                archieve:'#77A543',
                        

                statusStyle: ''
            },
		}
	},
	methods:{
		 jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
	},
	mounted(){
		if(this.cardData.status === 'new') {
            this.statusColors.statusStyle = this.statusColors.new;
        } else if (this.cardData.status === 'open') {
            this.statusColors.statusStyle = this.statusColors.open;
        }

        else if(this.cardData.status === 'QCpassed')
        {
            this.statusColors.statusStyle = this.statusColors.QCpassed;
        }

        else if(this.cardData.status === 'QCrejected')
        {
            this.statusColors.statusStyle = this.statusColors.QCrejected;
        }
         else if(this.cardData.status === 'archieve')
        {
            this.statusColors.statusStyle = this.statusColors.archieve;
        }
	}
}
</script>

<style>
	.card-compo-row-al-cntr {
		align-items: center;
	}
	.crd-compo-width {
        width: 74%;
    }
	.field_1 {
		width: 32%;
		padding-top: 10px;
		}
	.field_1 p {
		text-align: left;
	}
	.lblClr{
		color:#BDBDBD;
	}
	.field_2btn{
		margin-left: 262px

	}

	.btn-icon{
		margin-right: 40px;
	}

		@media screen and (min-width: 320px) {
			.field_1 {
		    margin-left: 30px;
			}
			.field_2btn{
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.btn-icon{
		margin-right: 40px;
	}
	}

	@media screen and (min-width: 768px) {
		.field_1 {
		width: 32%;
		    margin-left: 0px;
		}
		.field_2btn{
		margin-left: 335px
	}
	}

	@media screen and (min-width: 992px) {
		.field_1 {
		width: 32%;
		margin-left: 0px;
		}
		.field_2btn{
		margin-left: 260px
	}
	.btn-icon{
		margin-right: 20px;
	}
	}

</style>
