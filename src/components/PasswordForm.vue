<template>
    <form @submit.prevent="updatePassword" class="w-64">
        <div class="flex items-center mt-8">
            <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="17.209" height="22.946" viewBox="0 0 17.209 22.946"><g transform="translate(0)"><path class="a" d="M80.731,8.6H79.3V6.693a6.693,6.693,0,0,0-13.385,0V8.6H64.478A.478.478,0,0,0,64,9.083V21.034a1.914,1.914,0,0,0,1.912,1.912H79.3a1.914,1.914,0,0,0,1.912-1.912V9.083A.478.478,0,0,0,80.731,8.6Zm-6.7,9.986a.478.478,0,0,1-.475.531H71.649a.478.478,0,0,1-.475-.531l.3-2.712a1.891,1.891,0,0,1-.782-1.538,1.912,1.912,0,1,1,3.824,0,1.891,1.891,0,0,1-.782,1.538ZM76.429,8.6H68.78V6.693a3.824,3.824,0,1,1,7.649,0Z" transform="translate(-64)"/></g></svg>   
            <span class="border-b border-blue-900 ml-4">
                <input v-model="password.oldPassword" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-thin italic" type="password" placeholder="Old Password">
            </span>
        </div>

        <div class="flex items-center mt-6">
            <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="17.209" height="22.946" viewBox="0 0 17.209 22.946"><g transform="translate(0)"><path class="a" d="M80.731,8.6H79.3V6.693a6.693,6.693,0,0,0-13.385,0V8.6H64.478A.478.478,0,0,0,64,9.083V21.034a1.914,1.914,0,0,0,1.912,1.912H79.3a1.914,1.914,0,0,0,1.912-1.912V9.083A.478.478,0,0,0,80.731,8.6Zm-6.7,9.986a.478.478,0,0,1-.475.531H71.649a.478.478,0,0,1-.475-.531l.3-2.712a1.891,1.891,0,0,1-.782-1.538,1.912,1.912,0,1,1,3.824,0,1.891,1.891,0,0,1-.782,1.538ZM76.429,8.6H68.78V6.693a3.824,3.824,0,1,1,7.649,0Z" transform="translate(-64)"/></g></svg>   
            <span class="border-b border-blue-900 ml-4">
                <input v-model="password.newPassword" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-thin italic" type="password" placeholder="New Password">
            </span>
        </div>

        <div class="flex items-center mt-6">
            <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="17.209" height="22.946" viewBox="0 0 17.209 22.946"><g transform="translate(0)"><path class="a" d="M80.731,8.6H79.3V6.693a6.693,6.693,0,0,0-13.385,0V8.6H64.478A.478.478,0,0,0,64,9.083V21.034a1.914,1.914,0,0,0,1.912,1.912H79.3a1.914,1.914,0,0,0,1.912-1.912V9.083A.478.478,0,0,0,80.731,8.6Zm-6.7,9.986a.478.478,0,0,1-.475.531H71.649a.478.478,0,0,1-.475-.531l.3-2.712a1.891,1.891,0,0,1-.782-1.538,1.912,1.912,0,1,1,3.824,0,1.891,1.891,0,0,1-.782,1.538ZM76.429,8.6H68.78V6.693a3.824,3.824,0,1,1,7.649,0Z" transform="translate(-64)"/></g></svg>   
            <span class="border-b border-blue-900 ml-4">
                <input v-model="password.confirmPassword" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-thin italic" type="password" placeholder="Confirm Password">
            </span>
        </div>

        <div class="flex justify-end text-center mt-4">
            <button class="bg-blue text-center text-white inline-flex justify-center rounded shadow px-5 py-2 text-xs"><span>Update Password</span></button>
        </div>
    </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            password: {
                oldPassword:'',
                newPassword:'',
                confirmPassword:''
            }
            
        }
    },
    methods: {
        ...mapActions(['setToken']),
        updatePassword() {
            console.log(this.password.confirmPassword)
            if(this.password.newPassword == this.password.confirmPassword) {
                this.setToken(this.password.confirmPassword)
                this.$emit('closePassForm')
            }
        }
    }
}
</script>

