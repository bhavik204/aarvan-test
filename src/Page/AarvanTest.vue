<template>
<v-app>
		<div class="prop-layout" >
            <!-- <p>{{obj}}</p> -->
            <div>
                <v-card width="200" height="500">
                   <v-timeline
                        align-top
                        dense
                        >
                        <v-timeline-item
                            v-for="(record,index) in recordList"
                            :key="index"
                            color="pink"
                            small
                        >
                            <v-layout pt-1>
                            <v-flex xs3>
                                <strong class="hover" @click="displayData(record.text,record.filterValue)">{{record.text}}</strong>
                            </v-flex>
                            </v-layout>
                        </v-timeline-item>
                
                        </v-timeline>
                </v-card>
            </div>
            <div>
                
                <v-card v-if="table1 == true" width="500">
                    <v-card-title>{{title}}</v-card-title>
                    <v-data-table
                        :items="obj"
                        :headers="headers"
                        :pagination.sync= tablePages
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item._11thplan }}</td>
                            <td>{{ props.item.approved_outlay }}</td>
                            <td>{{ props.item.__2007_08 }}</td>
                            <td>{{ props.item.__2008_09 }}</td>
                            <td>{{ props.item.__2009_10 }}</td>
                            <td>{{ props.item.__2010_11 }}</td>
                            <td>{{ props.item._2011_12_re_ }}</td>
                            <td>{{ props.item.total_for_11th_plan }}</td>
                            <td>{{ props.item.excess_shortfall }}</td>
                            <td>{{ props.item._2012_13_be_ }}</td>
                            
                        </template>
                    </v-data-table>
                    <div id="chart">
                        <vue-apex-charts type=line height=350 :options="chartOptions" :series="series" />
                    </div>
                </v-card>
                <v-card v-if="tableExport == true" width="500">
                    <v-card-title>{{titleExport}}</v-card-title>
                    <v-data-table
                        :items="objExport"
                        :headers="headersExport"
                        :pagination.sync= tablePagesExport
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.pc_code }}</td>   
                            <td>{{ props.item.pc_description }}</td>
                            <td>{{ props.item.unit }}</td>
                            <td>{{ props.item.cty_code }}</td>
                            <td>{{ props.item.cty_desc }}</td>
                            <td>{{ props.item.qty }}</td>
                            <td>{{ props.item.val_usd_million_ }}</td>
                        </template>
                    </v-data-table>
                </v-card>
                <v-card v-if="tableAutomobile == true" width="500">
                    <v-card-title>{{titleAutomobile}}</v-card-title>
                    <v-data-table
                        :items="objAutomobile"
                        :headers="headersAutomobile"
                        :pagination.sync= tablePagesAutomobile
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.category }}</td>
                            <td>{{ props.item.segment }}</td>
                            <td>{{ props.item.__2001_02 }}</td>
                            <td>{{ props.item.__2002_03 }}</td>
                            <td>{{ props.item.__2003_04 }}</td>
                            <td>{{ props.item.__2004_05 }}</td>
                            <td>{{ props.item.__2005_06 }}</td>
                            <td>{{ props.item.__2006_07 }}</td>
                            <td>{{ props.item.__2007_08 }}</td>
                            <td>{{ props.item.__2008_09 }}</td>
                            <td>{{ props.item.__2009_10 }}</td>
                            <td>{{ props.item._2010_2011 }}</td>
                            <td>{{ props.item.__2011_12 }}</td>
                            <td>{{ props.item.__2012_13 }}</td>
                            <td>{{ props.item.__2013_14 }}</td>
                            <td>{{ props.item.__2014_15 }}</td>
                        </template>
                    </v-data-table>
                </v-card>
                <v-card v-if="tableElectricity == true" width="500">
                    <v-card-title>{{titleElecricity}}</v-card-title>
                    <v-data-table
                        :items="objElectricity"
                        :headers="headersElectricity"
                        :pagination.sync= tablePagesElectricity
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.region_state_u_t_ }}</td>
                            <td>{{ props.item.__2006_07 }}</td>
                            <td>{{ props.item.__2007_08 }}</td>
                            <td>{{ props.item.__2008_09 }}</td>
                            <td>{{ props.item.__2009_10 }}</td>
                            <td>{{ props.item.__2010_11 }}</td>
                            <td>{{ props.item.__2011_12 }}</td>
                            
                        </template>
                    </v-data-table>
                </v-card>
                <v-card v-if="tablePopulation == true" width="500">
                    <v-card-title>{{titlePopulation}}</v-card-title>

                    <v-data-table
                        :items="objPopulation"
                        :headers="headersPopulation"
                        :pagination.sync= tablePagesPopulation
                        class="elevation-1"
                        >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.industrial_cluster_area }}</td>
                            <td>{{ props.item.air___2009 }}</td>
                            <td>{{ props.item.water___2009 }}</td>
                            <td>{{ props.item.land___2009 }}</td>
                            <td>{{ props.item.cepi_score___2009 }}</td>
                            <td>{{ props.item.cepi_score___2011 }}</td>
                            <td>{{ props.item.cepi_score___2013 }}</td>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
            <div>
                <v-card height="500" width="200">
                    <v-layout column v-for="(btn,id) in dataBtns" :key="id">
                        <div>
                            <v-btn @click="filterRecord(btn)" depressed color="primary">{{btn}}</v-btn>
                        </div>
                    </v-layout>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                            <v-card>
                                <v-card-title>
                                    <span class="headline">{{dialogHeader}}</span>
                                </v-card-title>
                                <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                    
                                    <v-flex xs12 sm6>
                                        <h4>Maximum number of records per page:</h4>
                                        <v-select
                                        :items="filterOptions"
                                        label="No. of records"
                                        v-model="rowLength"
                                        required
                                        ></v-select>
                                    </v-flex>
                                    <!-- <v-flex xs12 sm6>
                                        <h4>Number of pages:</h4>
                                        
                                    </v-flex> -->
                                    
                                    </v-layout>
                                </v-container>
                                <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                                <v-btn color="blue darken-1" flat @click="saveFilter">Save</v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-dialog>
                </v-card>
            </div>
            
        </div>
</v-app>
</template>

<script>
	import axios from 'axios'
	import VueApexCharts from 'vue-apexcharts'
	export default{
        components:{
            VueApexCharts
        },
        created(){

            axios.get('https://api.data.gov.in/resource/221f84e3-cf5e-4429-88d7-22fbfa3cd66c?api-key=579b464db66ec23bdd0000017a87261338e848ac5b84f86145930c98&format=json&offset=0&limit=100').then(
                res => {
                    console.log(res);
                    this.obj= res.data.records;
                    this.headers= res.data.field
                    this.headers = JSON.parse(JSON.stringify(this.headers).split('"id":').join('"value":'));
                    this.headers = JSON.parse(JSON.stringify(this.headers).split('"name":').join('"text":'));
                    console.log('jsonn',this.headers)
                    console.log('hello',this.obj)
                    this.title= res.data.title;
                    this.count= res.data.count
                }
            ).catch(
                err => {
                   console.log(err) ;
                }
            );
            axios.get('https://api.data.gov.in/resource/c118fab2-1782-450b-9593-14b77985b0c0?api-key=579b464db66ec23bdd0000017a87261338e848ac5b84f86145930c98&format=json&offset=0&limit=100').then(
                res => {
				   console.log(res);
                   this.objExport= res.data.records;
                   this.headersExport= res.data.field
                   this.headersExport = JSON.parse(JSON.stringify(this.headersExport).split('"id":').join('"value":'));
                    this.headersExport = JSON.parse(JSON.stringify(this.headersExport).split('"name":').join('"text":'));
                    console.log('jsonn',this.headersExport)
                   console.log('export',this.objExport)
                    this.titleExport= res.data.title;
                    this.countExport= res.data.count
                   
                }
            ).catch(
                err => {
                   console.log(err) ;
                }
            );
            axios.get('https://api.data.gov.in/resource/162aa13a-b0af-421b-9ef1-5e5b4606c9b8?api-key=579b464db66ec23bdd0000017a87261338e848ac5b84f86145930c98&format=json&offset=0&limit=100').then(
                res => {
				   console.log(res);
                   this.objAutomobile= res.data.records;
                   this.headersAutomobile= res.data.field
                   this.headersAutomobile = JSON.parse(JSON.stringify(this.headersAutomobile).split('"id":').join('"value":'));
                    this.headersAutomobile = JSON.parse(JSON.stringify(this.headersAutomobile).split('"name":').join('"text":'));
                    console.log('jsonn',this.headersAutomobile)
                   console.log('automobile',this.objAutomobile)
                    this.titleAutomobile= res.data.title;
                    this.countAutomobile= res.data.count
                   
                }
            ).catch(
                err => {
                   console.log(err) ;
                }
            );
            axios.get('https://api.data.gov.in/resource/82964e3d-cbed-4026-a279-1a90ea1bb1e5?api-key=579b464db66ec23bdd0000017a87261338e848ac5b84f86145930c98&format=json&offset=0&limit=100').then(
                res => {
				   console.log(res);
                   this.objElectricity= res.data.records;
                   this.headersElectricity= res.data.field
                   this.headersElectricity = JSON.parse(JSON.stringify(this.headersElectricity).split('"id":').join('"value":'));
                    this.headersElectricity = JSON.parse(JSON.stringify(this.headersElectricity).split('"name":').join('"text":'));
                    console.log('jsonn',this.headersElectricity)
                   console.log('Electricity',this.objElectricity)
                    this.titleElecricity= res.data.title;
                    this.countElectricity= res.data.count
                   
                }
            ).catch(
                err => {
                   console.log(err) ;
                }
            );
            axios.get('https://api.data.gov.in/resource/1e9569b9-3625-4c2e-a3d1-c2d1c7767491?api-key=579b464db66ec23bdd0000017a87261338e848ac5b84f86145930c98&format=json&offset=0&limit=100').then(
                res => {
				   console.log(res);
                   this.objPopulation= res.data.records;
                   this.headersPopulation= res.data.field
                   this.headersPopulation = JSON.parse(JSON.stringify(this.headersPopulation).split('"id":').join('"value":'));
                    this.headersPopulation = JSON.parse(JSON.stringify(this.headersPopulation).split('"name":').join('"text":'));
                    console.log('pollheader',this.headersPopulation)
                   console.log('Population',this.objPopulation)
                    this.titlePopulation= res.data.title;
                    this.countPopulation= res.data.count
                   
                }
            ).catch(
                err => {
                   console.log(err) ;
                }
            );
            this.jsonReplace();
        },

		data () {
            return {
                // BAR CHART
                // chartOptions: {
                //     plotOptions: {
                //     bar: {
                //         horizontal: true
                //     }
                //     },
                //     xaxis: {
                //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                //     }
                // },
                // series: [{
                //     name: 'series-1',
                //     data: [30, 40, 45, 50, 49, 60, 70, 91]
                // }],

                // MULTILINE
                series: [{
                    name: "Extra Budgetry Resource(%)",
                    data: [ 18.5, 20, 24.6, 23.8, 35, 26.7]
                },
                {
                    name: "Gross Budgetry Support(%)",
                    data: [ 29.9, 27.8, 44.7, 47.9, 45.3, 41.8]
                },
                {
                    name: 'Internal Generation(%)',
                    data: [51.6, 52.1, 30.7, 28.3, 19.4, 31.5]
                }
                ],
                chartOptions: {
                chart: {
                    zoom: {
                    enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },

                title: {
                    text: 'Page Statistics',
                    align: 'left'
                },
                markers: {
                    size: 0,
                    style: 'hollow', // full, hollow, inverted,
                    hover: {
                    sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13'],
                },
                tooltip: {
                    y: [{
                    title: {
                        formatter: function (val) {
                        return val + " (mins)"
                        }
                    }
                    }, {
                    title: {
                        formatter: function (val) {
                        return val + " per session"
                        }
                    }
                    }, {
                    title: {
                        formatter: function (val) {
                        return val;
                        }
                    }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
                },

                recordList: [],
                filterOptions:['2','5','10','15','20'],
                rowLength: 0,
                dialog: false,
                dialogHeader:'',
                dataBtns:['Railways','Export','Automobile','Electricity','Pollution'],
                
                // Railways
                tablePages:{
                    descending: false,
                    page: 1,
                    rowsPerPage: 0,
                    totalItems: 6
                },
                table1:false,
                obj:[],
                headers:[],
                title:'',
                count:0,
                // EXPORT
                tablePagesExport:{
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    totalItems: 7
                },
                tableExport:false,
                objExport:[],
                headersExport:[],
                titleExport:'',
                countExport:0,

                // AUTOMOBILE
                tablePagesAutomobile:{
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    totalItems: 7
                },
                tableAutomobile:false,
                objAutomobile:[], 
                headersAutomobile:[],
                titleAutomobile:'',
                countAutomobile:0,

                // ELECTRICITY
                tablePagesElectricity:{
                    descending: false,
                    page: 1,
                    rowsPerPage: 10, 
                    totalItems: 7
                },
                tableElectricity:false,
                objElectricity:[],
                headersElectricity:[],
                titleElecricity:'',
                countElectricity:0,

                // POPULATION
                tablePagesPopulation:{
                    descending: false,
                    page: 1,
                    rowsPerPage: 10,
                    totalItems: 7
                },
                tablePopulation:false,
                objPopulation:[],   
                headersPopulation:[],
                titlePopulation:'',
                countPopulation:0,

            }
        },
        methods:{
            filterRecord(btn){
                this.dialog=true
                this.dialogHeader=btn
                this.jsonReplace();
            },
            saveFilter(){
                // this.recordObject.recordName=this.dialogHeader
                this.recordList.push({
                    // id: this.nonce++,
                    filterValue: this.rowLength,
                    text: this.dialogHeader,
                    // time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
                    //     return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
                    // })
                })
                this.dialog=false
                this.dialogHeader=''
            },
            displayData(data,filter){
                console.log('display',data)
                if(data == 'Railways'){
                    this.table1=true
                    this.tableExport=false
                    this.tableAutomobile=false
                    this.tableElectricity=false
                    this.tablePopulation=false
                    this.tablePages.rowsPerPage = filter
                }
                else if(data == 'Export'){
                    this.tableExport=true
                    this.table1=false
                    this.tableAutomobile=false
                    this.tableElectricity=false
                    this.tablePopulation=false
                    this.tablePagesExport.rowsPerPage = filter
                }
                else if(data == 'Automobile'){
                    this.tableAutomobile=true
                    this.table1=false
                    this.tableExport=false
                    this.tableElectricity=false
                    this.tablePopulation=false
                    this.tablePagesAutomobile.rowsPerPage = filter
                }
                else if(data == 'Electricity'){
                    this.tableElectricity=true
                    this.table1=false
                    this.tableExport=false
                    this.tableAutomobile=false
                    this.tablePopulation=false
                    this.tablePagesElectricity.rowsPerPage = filter
                }
                else if(data == 'Pollution'){
                    this.tablePopulation=true
                    this.table1=false
                    this.tableExport=false
                    this.tableAutomobile=false
                    this.tableElectricity=false
                    this.tablePagesPopulation.rowsPerPage = filter
                }
            },
            jsonReplace(){
                this.headers = JSON.parse(JSON.stringify(this.headers).split('"id":').join('"value":'));
                this.headers = JSON.parse(JSON.stringify(this.headers).split('"name":').join('"text":'));
                console.log('jsonn',this.headers)
            }
        }
	}
</script>

<style>
    .hover{
        cursor: pointer;
    }
	.pros-card{
		padding: 4px;

	}
	#card{
		text-align: left;
		margin-bottom: 5px;

	}
.prop-layout{
    margin-top: 20px;
		display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
	}
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