<template>
<div class="w-1/3 pr-4">
    <div class="h-20 w-full relative" style="margin-top:3.2rem">
        <div @click="showUpdateUserForm" class="absolute right-0 top-0 flex justify-center rounded-full items-center ml-auto bg-gray-600 w-6 h-6">
            <svg class="rounded" style="fill:white;" xmlns="http://www.w3.org/2000/svg" width="12.405" height="12.405" viewBox="0 0 12.405 12.405"><path class="a" d="M0,75.52V78.1H2.585l7.627-7.627L7.627,67.893Z" transform="translate(0 -65.699)"/><path class="a" d="M262.512,1.811,260.9.2a.691.691,0,0,0-.975,0l-1.261,1.261,2.585,2.585,1.261-1.261A.691.691,0,0,0,262.512,1.811Z" transform="translate(-250.309 0)"/></svg>
        </div>
        <div class="h-20 flex items-end">
            <div>
                <img class="w-20 h-16" :src="user.image_url" alt="">
                <span class="text-xs">Upload Image</span>
            </div>
            <h3 class="ml-12 mb-4 border-b border-purple text-xl text-purple">{{user.first_name}} {{user.last_name}}</h3>
        </div>

        <div class="w-full h-64 font-thin text-sm">
            <div class="flex items-center mt-8">
                <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="21.913" height="16.435" viewBox="0 0 21.913 16.435"><g transform="translate(0 0)"><g transform="translate(0 0)"><path class="a" d="M7.075,65.333c3.007,2.547,8.285,7.028,9.836,8.425a.916.916,0,0,0,1.325,0c1.552-1.4,6.83-5.88,9.837-8.427a.456.456,0,0,0,.064-.63A1.813,1.813,0,0,0,26.7,64H8.444a1.813,1.813,0,0,0-1.433.7A.456.456,0,0,0,7.075,65.333Z" transform="translate(-6.618 -64)"/><path class="a" d="M21.648,126.454a.454.454,0,0,0-.487.066c-3.335,2.827-7.592,6.451-8.931,7.658a1.849,1.849,0,0,1-2.548,0c-1.428-1.286-6.208-5.35-8.93-7.657a.457.457,0,0,0-.752.348v11.481a1.828,1.828,0,0,0,1.826,1.826H20.087a1.828,1.828,0,0,0,1.826-1.826V126.868A.456.456,0,0,0,21.648,126.454Z" transform="translate(0 -123.74)"/></g></g></svg>
                <p class="ml-4">{{user.email}}</p>
            </div>
            <div class="flex items-center mt-8">
                <svg class="-ml-1" style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="24.565" height="24.565" viewBox="0 0 24.565 24.565"><g transform="matrix(0.966, 0.259, -0.259, 0.966, 5.191, 0)"><g transform="translate(0 0)"><path class="a" d="M18.448,13.165a11.388,11.388,0,0,1-3.576-.57,1.635,1.635,0,0,0-1.59.335l-2.255,1.7a12.463,12.463,0,0,1-5.6-5.6l1.652-2.2a1.621,1.621,0,0,0,.4-1.643A11.405,11.405,0,0,1,6.9,1.609,1.611,1.611,0,0,0,5.293,0H1.609A1.611,1.611,0,0,0,0,1.609,18.468,18.468,0,0,0,18.448,20.057a1.611,1.611,0,0,0,1.609-1.609V14.774A1.611,1.611,0,0,0,18.448,13.165Z"/></g></g></svg>
                <p class="ml-4">{{user.phone}}</p>
            </div>
            <div class="flex items-center mt-8">
                <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="27.803" height="27.803" viewBox="0 0 18.535 27.803"><g transform="translate(0)"><path class="a" d="M94.6,0a9.269,9.269,0,0,0-8.155,13.672L94.094,27.5a.579.579,0,0,0,1.014,0l7.651-13.837A9.269,9.269,0,0,0,94.6,0Zm0,13.9a4.634,4.634,0,1,1,4.634-4.634A4.639,4.639,0,0,1,94.6,13.9Z" transform="translate(-85.333)"/></g></svg>
                <p class="ml-4">{{user.address}}</p>
            </div>
            <password-form @closePassForm="passForm=false" v-if="passForm"></password-form>
            <div v-if="!passForm" class="flex items-center mt-8 cursor-pointer">
                <svg style="fill:#5064cc;" xmlns="http://www.w3.org/2000/svg" width="17.209" height="22.946" viewBox="0 0 17.209 22.946"><g transform="translate(0)"><path class="a" d="M80.731,8.6H79.3V6.693a6.693,6.693,0,0,0-13.385,0V8.6H64.478A.478.478,0,0,0,64,9.083V21.034a1.914,1.914,0,0,0,1.912,1.912H79.3a1.914,1.914,0,0,0,1.912-1.912V9.083A.478.478,0,0,0,80.731,8.6Zm-6.7,9.986a.478.478,0,0,1-.475.531H71.649a.478.478,0,0,1-.475-.531l.3-2.712a1.891,1.891,0,0,1-.782-1.538,1.912,1.912,0,1,1,3.824,0,1.891,1.891,0,0,1-.782,1.538ZM76.429,8.6H68.78V6.693a3.824,3.824,0,1,1,7.649,0Z" transform="translate(-64)"/></g></svg>
                <p @click="showPasswordForm"  class="ml-4 underline italic text-blue">Change Password</p>
            </div>

            
        </div>
    </div>
</div>
</template>

<script>
import PasswordForm from '@/components/PasswordForm'
export default {
    props:['user'],
    components: {
        PasswordForm
    },
    data() {
        return {
        passForm : false,
        
        }
    },
    methods: {
        showUpdateUserForm() {
            this.$emit('showUpdateUserForm')
        },
        showPasswordForm() {
            this.passForm = true
            
        }
    }
}
</script>