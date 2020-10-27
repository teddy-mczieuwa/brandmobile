<template>
<!-- nav -->
    <div class="h-16 border-b px-8 flex justify-between items-center">
        <div class="flex items-center">
            <div class="font-sans block text-black hover:text-gray-700">
            <a href="#" role="button" class="relative flex">
                <svg class="flex-1 w-8 h-8 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                
                <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
                </span>
            </a>

            
            </div>
            <p class="font-thin text-xs text-color-gray-500">Updated 29 mins ago</p>
        </div>
        
        
        <div class="flex">
            <div class="flex items-center">
                <svg style="fill:#44099f;" xmlns="http://www.w3.org/2000/svg" width="13.576" height="13.576" viewBox="0 0 13.576 13.576"><path class="a" d="M6.788,0a6.788,6.788,0,1,0,6.788,6.788A6.8,6.8,0,0,0,6.788,0Zm0,1.98A3.253,3.253,0,1,1,3.536,5.233,3.257,3.257,0,0,1,6.788,1.98Zm0,10.465a5.646,5.646,0,0,1-4.52-2.27,10.651,10.651,0,0,1,4.52-1.124,10.652,10.652,0,0,1,4.52,1.124A5.646,5.646,0,0,1,6.788,12.445Z"/></svg>
                <span class="ml-2">Hi, {{firstName}}</span>
            </div>
            <div class="flex items-center ml-4">
                <svg style="fill:#44099f;" xmlns="http://www.w3.org/2000/svg" width="13.577" height="13.576" viewBox="0 0 13.577 13.576"><ellipse class="a" cx="0.663" cy="0.663" rx="0.663" ry="0.663" transform="translate(6.125 9.374)"/><path class="a" d="M6.788,0a6.788,6.788,0,1,0,6.788,6.788A6.785,6.785,0,0,0,6.788,0Zm0,12.516a5.728,5.728,0,1,1,5.728-5.728A5.724,5.724,0,0,1,6.788,12.516Z"/><path class="a" d="M178.121,128.5A2.124,2.124,0,0,0,176,130.621a.53.53,0,1,0,1.061,0,1.061,1.061,0,1,1,1.061,1.061.53.53,0,0,0-.53.53v1.326a.53.53,0,0,0,1.061,0v-.863a2.121,2.121,0,0,0-.53-4.176Z" transform="translate(-171.333 -125.093)"/></svg>
                <span class="ml-2">Help</span>
            </div>
        </div>
    </div>
    <!-- end nav -->
</template>

<script>
export default {
    props:['firstName']
}
</script>