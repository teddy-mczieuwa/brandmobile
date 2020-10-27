<template>
    <form @submit.prevent="addUser" class="w-5/6 mx-auto flex justify-between items-end h-10 -mt-8">
        <div class="flex items-center w-2/6 border-b h-full border-blue-900">
            <input v-model="sub_user.email" class="appearance-none border-none 
            w-full text-gray-700  py-1 px-2 leading-tight italic text-sm
                focus:outline-none" type="email" placeholder="Type Email Address">                
        </div>

        <div class="flex items-center w-2/6 border-b h-full border-blue-900">
            <select v-model="sub_user.role.name" placeholder="Admin"
             class="bg-white h-full w-full pl-4 text-sm">
                <option>Admin</option>
            </select>                
        </div>

        
        <button class="bg-blue text-center text-white inline-flex justify-center rounded shadow px-5 py-2 text-xs"><span>Invite User</span></button>
        
    </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            sub_user: {
                "user_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                "first_name": "Munachim Anyamene",
                "image_url": "https://avatars.dicebear.com/api/male/.svg?r=1&w=1&mood[]=happy",
                "email":  "",
                "is_active": false,
                "has_activated": false,
                "role": {
                    "role_id": "MXTi9FjpyQKxfEsqQjbtGtZvjEuvBWRo",
                    "name": "admin"
                }
            }
        }
    },
    methods: {
        ...mapActions(['addSubUser']),
        addUser() {
            console.log('hello')
            this.addSubUser(this.sub_user)
            this.$emit('closeInviteForm')
        }
    }
}
</script>

<style>

</style>