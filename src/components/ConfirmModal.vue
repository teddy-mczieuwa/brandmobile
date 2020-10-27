<template>
    <div class="w-screen h-screen flex justify-center items-center fixed top-0 left-0" style="backdrop-filter: blur(6px);">
        <div class="w-2/6 h-64 bg-white rounded-lg border border-purple"> 
            <svg @click="closeConfirmDelete" class="ml-auto mt-2 mr-2 cursor-pointer" style="fill:#eb0808;" xmlns="http://www.w3.org/2000/svg" width="20.872" height="20.872" viewBox="0 0 20.872 20.872"><g transform="translate(0 0)"><path class="a" d="M11.589,10.437l9.044-9.044A.815.815,0,0,0,19.48.24L10.436,9.284,1.392.24A.815.815,0,0,0,.239,1.393l9.044,9.044L.239,19.481a.815.815,0,0,0,1.153,1.153l9.044-9.044,9.044,9.044a.815.815,0,0,0,1.153-1.153Z" transform="translate(0 -0.001)"/></g></svg> 
            <div class="text-center mt-4">
                <svg class="mx-auto" style="fill:#ed0c0c;" xmlns="http://www.w3.org/2000/svg" width="41.659" height="41.658" viewBox="0 0 41.659 41.658"><g transform="translate(0 -0.003)"><g transform="translate(0 0.003)"><path class="a" d="M35.564,6.1a20.829,20.829,0,1,0,0,29.47A20.861,20.861,0,0,0,35.564,6.1ZM20.829,34.725a1.737,1.737,0,1,1,1.737-1.737A1.737,1.737,0,0,1,20.829,34.725Zm1.737-8.683a1.737,1.737,0,1,1-3.473,0V8.676a1.737,1.737,0,0,1,3.473,0Z" transform="translate(0 -0.003)"/></g></g></svg>
                <p class="mt-5 mb-5 font-thin">You’re about to delete this User.<br> Are you sure ?</p>
                <div class="w-3/5 mx-auto flex justify-between">
                    <button @click="closeConfirmDelete" class="text-center inline-flex justify-center rounded-lg shadow border px-12 py-2 text-xs"><span>Yes</span></button>
                    <button @click="closeConfirmDelete" class="text-center inline-flex justify-center rounded-lg shadow border px-12 py-2 text-xs"><span>No</span></button>
                </div>
            </div>         
        </div>  
    </div>
</template>

<script>
export default {
    methods: {
        closeUpdateUserForm() {
            this.$emit('closeConfirm')
        },
        confirmDelete() {

        },
        closeConfirmDelete() {
            this.$emit('closeConfirmDelete')
        }
    }
}
</script>