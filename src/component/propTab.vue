<template>
<v-app>
<div>
	<v-tabs icons-and-text 
    centered dark 
    color="secondary" 
    v-model="active" 
    slider-color="red"
   >

        <v-tab

            v-for="(head,n) in tabs"
            :key="n"
            class="color"
            ripple
            >
        {{head.text}}
        </v-tab>
<v-tab-item 
    v-for="n in 5"
    :key="n">


    <proposal-new v-if="n== 1"></proposal-new>
    <proposal-open v-if="n== 2"></proposal-open>
    <proposal-pass v-if="n== 3"></proposal-pass>
    <proposal-reject v-if="n== 4"></proposal-reject>
    <proposal-archieve v-if="n== 5"></proposal-archieve>


</v-tab-item>
	</v-tabs>
</div>
</v-app>
</template>

<script>
import proposalNew from '../Page/Proposal/proposal'
import proposalArchieve from '../Page/Proposal/proposalArchieve'
import proposalPass from '../Page/Proposal/proposalPass'
import proposalReject from '../Page/Proposal/propsalreject'
import proposalOpen from '../Page/Proposal/propsalOpen'
export default {
    data(){
        return{
            tabs:[{
                text:'New'
            },
            {
               text:'Open' 
            },
            {
               text:'QC Passed' 
            },
            {
               text:'QC Rejected' 
            },
            {
               text:'Archive' 
            },
            ],
            active:null,
        }
    },
    methods:{
         jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },
    },
    components:{
         proposalNew,
         proposalArchieve,
         proposalPass,
         proposalReject,
         proposalOpen
    }
}
</script>


<style>
	.color{
        color:azure;
    }
</style>