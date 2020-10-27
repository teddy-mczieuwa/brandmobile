<template>
    <div @click="showConfirmDelete" class="flex items-center border-b mt-5 pb-2 justify-between text-sm" :class="styleText">
        <svg style="fill:#73788d;" xmlns="http://www.w3.org/2000/svg" width="33.991" height="33.991" viewBox="0 0 33.991 33.991"><path class="a" d="M17,0a17,17,0,1,0,17,17A17.015,17.015,0,0,0,17,0Zm0,4.957A8.144,8.144,0,1,1,8.852,13.1,8.153,8.153,0,0,1,17,4.957Zm0,26.2A14.135,14.135,0,0,1,5.678,25.474,26.667,26.667,0,0,1,17,22.66a26.669,26.669,0,0,1,11.317,2.814A14.135,14.135,0,0,1,17,31.158Z"/></svg>
        <p>{{subuser.first_name}}</p>
        <p>{{subuser.email}}</p>
        <p><span>{{subuser.role.name}}</span> </p>
        <div v-if="subuser.has_activated && subuser.is_active" class="flex w-24 ml-5 justify-end">
            <svg style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="17.321" height="17.321" viewBox="0 0 17.321 17.321"><path class="a" d="M8.661,0a8.661,8.661,0,1,0,8.661,8.661A8.664,8.664,0,0,0,8.661,0ZM2.448,8.661A6.234,6.234,0,0,1,8.661,2.425a6.135,6.135,0,0,1,3.51,1.085L3.534,12.171A6.135,6.135,0,0,1,2.448,8.661Zm6.213,6.213a6.135,6.135,0,0,1-3.51-1.085L13.788,5.15a6.135,6.135,0,0,1,1.085,3.51A6.2,6.2,0,0,1,8.661,14.873Z"/></svg>
            <svg class="ml-3" style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="14.004" height="18.002" viewBox="0 0 14.004 18.002"><g transform="translate(0)"><path class="a" d="M126.551,1.087h3.009v.506h1.087V1.016A1.016,1.016,0,0,0,129.632,0H126.48a1.017,1.017,0,0,0-1.015,1.016v.577h1.087Zm0,0" transform="translate(-121.054)"/><path class="a" d="M51.169,167.75h-10.2a.478.478,0,0,0-.477.517l.853,10.545a1.133,1.133,0,0,0,1.128,1.042h7.192a1.133,1.133,0,0,0,1.128-1.042l.853-10.544A.478.478,0,0,0,51.169,167.75Zm-7.73,10.979H43.4a.543.543,0,0,1-.542-.51l-.534-8.657a.543.543,0,1,1,1.085-.067l.534,8.657A.543.543,0,0,1,43.438,178.729Zm3.18-.542a.543.543,0,0,1-1.087,0V169.53a.543.543,0,0,1,1.087,0Zm3.191-8.625-.51,8.657a.543.543,0,0,1-.542.511h-.032a.543.543,0,0,1-.51-.574l.51-8.657a.543.543,0,0,1,1.085.064Zm0,0" transform="translate(-39.066 -161.852)"/><path class="a" d="M13.982,77.753l-.357-1.07a.691.691,0,0,0-.655-.472H1.036a.691.691,0,0,0-.655.472l-.357,1.07a.449.449,0,0,0,.425.59H13.556a.442.442,0,0,0,.237-.069A.448.448,0,0,0,13.982,77.753Zm0,0" transform="translate(-0.001 -73.531)"/></g></svg>
        </div>

        <button v-else-if="subuser.is_active || subuser.has_activated" class="bg-blue text-center text-white inline-flex justify-center rounded shadow px-2 py-2 text-xs"><span>Resend Invitation</span></button>

        <div v-else class="flex w-24 ml-5 justify-end items-center">
            <svg style="fill:#3cb45c;" xmlns="http://www.w3.org/2000/svg" width="21.495" height="20.798" viewBox="0 0 21.495 20.798"><path class="a" d="M15.831,4.542a5.67,5.67,0,0,0-5.664,5.664v2.461H1.236A1.236,1.236,0,0,0,0,13.9V24.1A1.236,1.236,0,0,0,1.236,25.34H13.9A1.236,1.236,0,0,0,15.139,24.1V13.9A1.236,1.236,0,0,0,13.9,12.667h-.67V10.206a2.6,2.6,0,0,1,5.2,0,1.533,1.533,0,1,0,3.066,0A5.67,5.67,0,0,0,15.831,4.542ZM8.77,19.124V21.15a1.2,1.2,0,1,1-2.4,0V19.124a1.942,1.942,0,1,1,2.4,0Z" transform="translate(0 -4.542)"/></svg>
            <svg class="ml-3" style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="14.004" height="18.002" viewBox="0 0 14.004 18.002"><g transform="translate(0)"><path class="a" d="M126.551,1.087h3.009v.506h1.087V1.016A1.016,1.016,0,0,0,129.632,0H126.48a1.017,1.017,0,0,0-1.015,1.016v.577h1.087Zm0,0" transform="translate(-121.054)"/><path class="a" d="M51.169,167.75h-10.2a.478.478,0,0,0-.477.517l.853,10.545a1.133,1.133,0,0,0,1.128,1.042h7.192a1.133,1.133,0,0,0,1.128-1.042l.853-10.544A.478.478,0,0,0,51.169,167.75Zm-7.73,10.979H43.4a.543.543,0,0,1-.542-.51l-.534-8.657a.543.543,0,1,1,1.085-.067l.534,8.657A.543.543,0,0,1,43.438,178.729Zm3.18-.542a.543.543,0,0,1-1.087,0V169.53a.543.543,0,0,1,1.087,0Zm3.191-8.625-.51,8.657a.543.543,0,0,1-.542.511h-.032a.543.543,0,0,1-.51-.574l.51-8.657a.543.543,0,0,1,1.085.064Zm0,0" transform="translate(-39.066 -161.852)"/><path class="a" d="M13.982,77.753l-.357-1.07a.691.691,0,0,0-.655-.472H1.036a.691.691,0,0,0-.655.472l-.357,1.07a.449.449,0,0,0,.425.59H13.556a.442.442,0,0,0,.237-.069A.448.448,0,0,0,13.982,77.753Zm0,0" transform="translate(-0.001 -73.531)"/></g></svg>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        subuser: {
            type: Object
        }
    },
    computed: {
        styleText() {
            return {
                'text-gray-500': !this.subuser.is_active || !this.subuser.has_activated,
            }
        }
    },

    methods: {
        showConfirmDelete() {
            console.log(this.subuser)
            this.$emit('showConfirmDelete',this.subuser)
        }   
    }
}
</script>

<style>

</style>