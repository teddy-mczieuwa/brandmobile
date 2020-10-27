<template>
    <div class="w-2/3 h-full">
        <div class="flex justify-end">
            <div class="cursor-pointer" @click="inviteForm=false" v-if="inviteForm">
                <svg style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="26.182" height="26.182" viewBox="0 0 26.182 26.182"><path class="a" d="M9.257,0a9.257,9.257,0,1,0,9.257,9.257A9.267,9.267,0,0,0,9.257,0Zm4.05,10.028H10.028v3.279a.771.771,0,0,1-1.543,0V10.028H5.207a.771.771,0,1,1,0-1.543H8.486V5.207a.771.771,0,1,1,1.543,0V8.486h3.279a.771.771,0,0,1,0,1.543Zm0,0" transform="translate(13.091) rotate(45)"/></svg>
            </div>
            <button v-if="!inviteForm" class="w-1/4 bg-blue text-white text-xs px-4 inline-flex items-center justify-between rounded shadow">
                <span>Resend Invitation</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="fill-current"
                    width="25" height="25" viewBox="0 0 27.53 27.53">
                    <g transform="translate(13.739) rotate(45)">
                    <path class="a" 
                    d="M10.248,0a2.083,2.083,0,0,0-.872.524L.523,9.376A2.088,2.088,0,0,0,0,10.248L8.54,8.54Zm0,0" transform="translate(1.362 0.016)"/>
                    <path class="a" d="M18.89,5.72,13.709.54A2.083,2.083,0,0,0,12.778,0L10.948,9.154A.571.571,0,0,1,10.5,9.6L1.345,11.433a2.088,2.088,0,0,0,.54.931l.455.455L.167,14.992a.571.571,0,0,0,.808.808l2.173-2.173.923.923-3.9,3.9a.571.571,0,1,0,.808.808l3.9-3.9.923.923L3.63,18.454a.571.571,0,1,0,.808.808L6.61,17.089l.455.455a2.106,2.106,0,0,0,2.972,0L18.89,8.692A2.1,2.1,0,0,0,18.89,5.72Zm0,0" transform="translate(0 0)"/>
                </g></svg>
            </button>
                
            <button @click="showInviteForm" v-if="!inviteForm" class="ml-5 w-1/4 bg-blue text-white text-xs py-2 px-4 inline-flex items-center justify-between rounded shadow">
                <span class="mx-auto">Invite User</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                class="fill-current"
                width="18.514"
                height="18.514" viewBox="0 0 18.514 18.514">
                <path class="a"
                d="M9.257,0a9.257,9.257,0,1,0,9.257,9.257A9.267,9.267,0,0,0,9.257,0Zm4.05,10.028H10.028v3.279a.771.771,0,0,1-1.543,0V10.028H5.207a.771.771,0,1,1,0-1.543H8.486V5.207a.771.771,0,1,1,1.543,0V8.486h3.279a.771.771,0,0,1,0,1.543Zm0,0"/>
                </svg>
            </button>
        </div>
        <!-- end buttons -->

        <!-- data table -->
        <div class="w-full border max-h-5/6 my-4 bg-white rounded-md shadow px-8 py-5">
            <h3 class="text-blue mb-10">Users</h3>

            <data-table-form v-if="inviteForm" @closeInviteForm="inviteForm=false"></data-table-form>

            <data-row @showConfirmDelete="showDelete=true" v-for="subuser in getSubUsers" :key="subuser.user_id" :subuser="subuser"></data-row>
        </div>
        <!-- data table -->

        <!-- save button -->
        <div class="flex justify-end text-center">
            <button class="bg-blue w-20 text-center text-white inline-flex justify-center rounded shadow px-10 py-2 text-xs"><span>Save</span></button>
        </div>
        <!-- end save button -->

    <confirm-modal v-if="showDelete" @closeConfirmDelete="showDelete=false">
    </confirm-modal>

    </div>

</template>

<script>
import DataTableForm from '@/components/DataTableForm'
import DataRow from '@/components/DataRow'
import ConfirmModal from '@/components/ConfirmModal'

import {mapGetters} from 'vuex'
export default {
    components: {
        DataTableForm,
        DataRow,
        ConfirmModal
    },
    data() {
        return {
            inviteForm: false,
            showDelete: false
        }
    },
    computed: {
        ...mapGetters(['getSubUsers'])
    },
    methods: {
        showInviteForm() {
            this.inviteForm = true
        },
        confirmDelete() {
            this.showDelete = false
            //this.$emit('confirmDelete', this.confirmDelete)
        }
    }
}
</script>