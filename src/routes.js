import LoginView from './Page/LoginView.vue';
import RegistrationPage from './Page/RegistrationPage.vue';
import Table from './Page/Table.vue';

// proposal Salman
import Proposal from './Page/Proposal/proposal.vue';
import proposalOpen from './Page/Proposal/propsalOpen.vue';
import proposalPass from './Page/Proposal/proposalPass.vue';
import ProposalReject from './Page/Proposal/propsalreject.vue';
import proposalArchieve from './Page/Proposal/proposalArchieve.vue';
import propTab from './component/propTab.vue';

import proposalSumm from './Page/Proposalqc/ProposalSumm.vue'
import propSummCompo from './component/prop-summ-compo.vue'

// proposal admin page shoaib
import ProposalMaster from './Page/Proposalqc/ProposalMaster.vue'
import ProposalTab from './Page/Proposalqc/ProposalTab.vue';
import ProposalBi from './Page/Proposalqc/ProposalBi.vue';
import ProposalRecipting from './Page/Proposalqc/ProposalRecipting.vue'
import Proposalfulfilment from './Page/Proposalqc/Proposalfulfilment.vue'

//proposal admin document upload ashraf
import ProposalDocUpload from './Page/Proposalqc/ProposalDocumentUpload.vue'

// Aarvan Demo
import AarvanPage from './Page/AarvanTest.vue'

export const routes = [
    {
        path: '/test',
        name: 'AarvanPage',
        component: AarvanPage
    },
    {
        mode: 'history',
        path: '/LoginView',
        name: 'LoginView',
        component: LoginView
    },
    {
        path: '/RegistrationPage',
        name: 'RegistrationPage',
        component: RegistrationPage
    },
    {
        path: '/proposaltab',
        name: ' ProposalTab',
        component: ProposalTab
    },
    // {
    //     path: '/Table',
    //     name: 'Table',
    //     component: Table
    // },

    // {
    //     path: '/cfrmaster',
    //     name: 'CfrMaster',
    //     component: CfrMaster,
    //     children: [{
    //         path: 'cfrall',
    //         name: 'CfrAll',
    //         component: CfrAll
    //     }, {
    //         path: 'cfrFtnr',
    //         name: 'CfrFtnr',
    //         component: CfrFtnr
    //     }, {
    //         path: 'cfrUnderWriting',
    //         name: 'CfrUnderWriting',
    //         component: CfrUnderWriting
    //     }]
    // },

    // {
    //     path: '/proposalmaster',
    //     name: 'ProposalMaster',
    //     component: ProposalMaster,
    //     children: [{

    //             path: 'proposalbi',

    //             component: ProposalBi
    //         },

    //         {
    //             path: 'proposaldocupload',

    //             component: ProposalDocUpload
    //         },

    //         {
    //             path: 'proposalrecipting',

    //             component: ProposalRecipting
    //         },

    //     ]
    // },

    {

        path: '/proposal',
        name: 'Proposal',
        component: Proposal
    },
    {
        path: '/proposalopen',
        name: 'proposalOpen',
        component: proposalOpen
    },
    {
        path: '/proposalqcpass',
        name: 'proposalPass',
        component: proposalPass
    },
    {
        path: '/proposalqcreject',
        name: 'ProposalReject',
        component: ProposalReject
    },
    {
        path: '/proposalarchieve',
        name: 'proposalArchieve',
        component: proposalArchieve
    },
    {
        path: '/proptab',
        name: 'propTab',
        component: propTab
    },

    // {
    //     path: '/proposalOpen',
    //     name: 'proposalOpen',
    //     component: proposalOpen
    // },
    {
        path: '/proposalmaster',
        name: 'ProposalMaster',
        component: ProposalMaster,
    },
    {

        path: '/proposalbi',

        component: ProposalBi
    },
    {
        path: '/proposaldocupload',

        component: ProposalDocUpload
    },
    {
        path: '/proposalrecipting',

        component: ProposalRecipting
    },
    {
        path: '/proposalfulfilment',
        component: Proposalfulfilment
    },


    {
        path: '/proposalsumm',
        component: proposalSumm
    },

    {
        path: '/propsummcompo',
        component: propSummCompo
    },

    // {
    //     path: '/proposalOpen',
    //     name: 'proposalOpen',
    //     component: proposalOpen
    // },
    {
        path: '/table',
        name: 'table',
        component: Table
    },







    {
        path: '/',
        redirect: '/test'
    },


];