<template>

  <div class="flex">
    <side-nav></side-nav>
    <div class="w-5/6 bg-gray-200 h-screen">
      <nav-bar :firstName="getUserInfo.first_name"></nav-bar>
      <div class="px-8 flex justify-between mt-12">
        <user-info @showUpdateUserForm="showUpdateUserForm = true" :user="getUserInfo"></user-info>
        <data-table></data-table>
      </div>
    </div>

    <update-form-modal :defaultInfo="getUserInfo" @closeUpdateUserForm="showUpdateUserForm = false" v-if="showUpdateUserForm"></update-form-modal>
  </div>
    
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import UserInfo from '@/components/UserInfo'
import DataTable from '@/components/DataTable'
import SideNav from '@/components/SideNav'
import NavBar from '@/components/NavBar'
import UpdateFormModal from '@/components/UpdateFormModal'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['getUserInfo'])
    
  },
  components: {
    UserInfo,
    DataTable,
    SideNav,
    UpdateFormModal,
    NavBar,
  },

  data() {
    return {
      showUpdateUserForm: false,
    }
  },
  created() {
    this.$store.dispatch('fetchUser')
  }
}
</script>

<style src="@/assets/css/styles.css" />
