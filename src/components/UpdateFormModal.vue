<template>
<div class="w-screen h-screen flex justify-center 
    items-center fixed top-0 left-0" style="backdrop-filter: blur(6px);">
        
        <div class="w-3/6 bg-white rounded-lg shadow-xl">
            
            <svg @click="closeUpdateUserForm" class="ml-auto mt-2 mr-2 cursor-pointer" style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="20.872" height="20.872" viewBox="0 0 20.872 20.872"><g transform="translate(0 0)"><path class="a" d="M11.589,10.437l9.044-9.044A.815.815,0,0,0,19.48.24L10.436,9.284,1.392.24A.815.815,0,0,0,.239,1.393l9.044,9.044L.239,19.481a.815.815,0,0,0,1.153,1.153l9.044-9.044,9.044,9.044a.815.815,0,0,0,1.153-1.153Z" transform="translate(0 -0.001)"/></g></svg>
            <div class="mt-2 px-10 flex justify-between">
                <h3 class="text-gray-700">Edit Personal Information</h3>
                <img class="mr-10 rounded overflow-hidden w-18 h-20" :src="defaultInfo.image_url" alt="">
            </div>
            <form class="ml-10" @submit.prevent="updateUserInfo">
                <div>
                    <label class="text-xs text-gray-500" for="Full Name">Full Name</label>
                    <div class="h-10 relative">
                        <svg class="absolute mt-3 ml-2" style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="14.844" height="17.792" viewBox="0 0 14.844 17.792"><path class="a" d="M91.317,8.57a4.146,4.146,0,0,0,3.03-1.255A4.146,4.146,0,0,0,95.6,4.285a4.147,4.147,0,0,0-1.255-3.03,4.284,4.284,0,0,0-6.06,0,4.146,4.146,0,0,0-1.255,3.03,4.146,4.146,0,0,0,1.256,3.03A4.147,4.147,0,0,0,91.317,8.57Zm0,0" transform="translate(-84.007 0)"/><path class="a" d="M14.808,252.4a10.583,10.583,0,0,0-.144-1.124,8.858,8.858,0,0,0-.277-1.13,5.584,5.584,0,0,0-.465-1.054,3.979,3.979,0,0,0-.7-.913,3.089,3.089,0,0,0-1.007-.632,3.478,3.478,0,0,0-1.285-.233,1.3,1.3,0,0,0-.7.3c-.209.136-.453.294-.726.468a4.157,4.157,0,0,1-.939.414,3.645,3.645,0,0,1-2.3,0,4.147,4.147,0,0,1-.938-.413c-.27-.173-.514-.33-.726-.468a1.3,1.3,0,0,0-.7-.3,3.474,3.474,0,0,0-1.285.233,3.087,3.087,0,0,0-1.007.632,3.979,3.979,0,0,0-.7.913,5.6,5.6,0,0,0-.465,1.054,8.878,8.878,0,0,0-.276,1.13A10.546,10.546,0,0,0,.036,252.4c-.024.34-.036.694-.036,1.051a2.954,2.954,0,0,0,.877,2.235,3.159,3.159,0,0,0,2.261.825h8.567a3.158,3.158,0,0,0,2.261-.825,2.953,2.953,0,0,0,.878-2.235C14.844,253.1,14.831,252.742,14.808,252.4Zm0,0" transform="translate(0 -238.722)"/></svg>
                        <input v-model="userInfo.fullName" class="h-full pl-8 border focus:border-purple-400 border-purple-400 rounded-md" type="text">
                    </div>
                </div>

                <div class="mt-4">
                    <label class="text-xs text-gray-500" for="Address">Address</label>
                    <div class="h-10 relative">
                        <svg class="absolute mt-3 ml-2" style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="14.844" height="17.792" viewBox="0 0 18.535 27.803"><g transform="translate(0)"><path class="a" d="M94.6,0a9.269,9.269,0,0,0-8.155,13.672L94.094,27.5a.579.579,0,0,0,1.014,0l7.651-13.837A9.269,9.269,0,0,0,94.6,0Zm0,13.9a4.634,4.634,0,1,1,4.634-4.634A4.639,4.639,0,0,1,94.6,13.9Z" transform="translate(-85.333)"/></g></svg>
                        <input v-model="userInfo.address" class="h-full w-3/5 pl-8 mr-2 border focus:border-purple-400 border-purple-400 rounded-md" type="text">
                        <input v-model="userInfo.city" class="h-full w-1/5 pl-4 text-xs font-thin border focus:border-purple-400 border-purple-400 rounded-md" placeholder="City" type="text">
                    </div>
                    <div class="h-10 mt-4">
                        <select v-model="userInfo.state" 
                        class="bg-white h-full w-1/5 pl-4 text-xs font-thin text-gray-500
                        border focus:border-purple-400 border-purple-400 rounded-md" 
                        placeholder="City" type="text">
                            <option disabled value=""> State </option>
                            <option class="bg-white text-gray-900">Lagos</option>
                        </select>
                    </div>
                </div>

                <div class="mt-4 flex">
                    <div class="w-1/2">
                        <label class="text-xs text-gray-500" for="Email">Email</label>
                        <div class="h-10 relative">
                            <svg class="absolute mt-3 ml-2" style="fill:#5064cc;"  xmlns="http://www.w3.org/2000/svg" width="14.844" height="17.792" viewBox="0 0 21.913 16.435"><g transform="translate(0 0)"><g transform="translate(0 0)"><path class="a" d="M7.075,65.333c3.007,2.547,8.285,7.028,9.836,8.425a.916.916,0,0,0,1.325,0c1.552-1.4,6.83-5.88,9.837-8.427a.456.456,0,0,0,.064-.63A1.813,1.813,0,0,0,26.7,64H8.444a1.813,1.813,0,0,0-1.433.7A.456.456,0,0,0,7.075,65.333Z" transform="translate(-6.618 -64)"/><path class="a" d="M21.648,126.454a.454.454,0,0,0-.487.066c-3.335,2.827-7.592,6.451-8.931,7.658a1.849,1.849,0,0,1-2.548,0c-1.428-1.286-6.208-5.35-8.93-7.657a.457.457,0,0,0-.752.348v11.481a1.828,1.828,0,0,0,1.826,1.826H20.087a1.828,1.828,0,0,0,1.826-1.826V126.868A.456.456,0,0,0,21.648,126.454Z" transform="translate(0 -123.74)"/></g></g></svg>
                            <input v-model="userInfo.email" class="h-full pl-8 border focus:border-purple-400 border-purple-400 rounded-md" type="email">
                        </div>
                    </div>

                    <div class="w-1/2">
                        <label class="text-xs text-gray-500" for="Phone Number">Phone Number</label>
                        <div class="h-10 relative">
                            <svg class="absolute mt-3 ml-2" style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="14.844" height="17.792" viewBox="0 0 24.565 24.565"><g transform="matrix(0.966, 0.259, -0.259, 0.966, 5.191, 0)"><g transform="translate(0 0)"><path class="a" d="M18.448,13.165a11.388,11.388,0,0,1-3.576-.57,1.635,1.635,0,0,0-1.59.335l-2.255,1.7a12.463,12.463,0,0,1-5.6-5.6l1.652-2.2a1.621,1.621,0,0,0,.4-1.643A11.405,11.405,0,0,1,6.9,1.609,1.611,1.611,0,0,0,5.293,0H1.609A1.611,1.611,0,0,0,0,1.609,18.468,18.468,0,0,0,18.448,20.057a1.611,1.611,0,0,0,1.609-1.609V14.774A1.611,1.611,0,0,0,18.448,13.165Z"/></g></g></svg>
                            <input v-model="userInfo.phone" class="h-full pl-8 border focus:border-purple-400 border-purple-400 rounded-md text-xs" type="number" placeholder="+234">
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-32 pb-4">
                    <button class="bg-blue text-white inline-flex justify-center rounded shadow px-10 py-2 text-xs"><span>Update</span></button>
                </div>
            </form>
        </div>
        
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props:['defaultInfo'],
    data() {
        return {
            userInfo: {
                fullName:'',
                address:'',
                city:'',
                state:'',
                email:'',
                phone:'',
                first_name:'',
                last_name:''
            }
        }
    },
   
    methods: {
        closeUpdateUserForm() {
            this.$emit('closeUpdateUserForm')
        },

        updateUserInfo() {
            const firstname = this.userInfo.fullName.split(' ')[0]
            const lastname = this.userInfo.fullName.split(' ')[1]
        
            this.userInfo.first_name = firstname
            this.userInfo.last_name = lastname
            delete this.userInfo.fullName
            
            console.log(this.userInfo)
            this.editUser(this.userInfo)
            this.closeUpdateUserForm()
        },
        ...mapActions(['editUser'])
    }
}
</script>