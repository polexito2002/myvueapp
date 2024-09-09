<template>
<!-- ALT + 96 = TILDE INVERTIDA ( ` ) -->
    <button v-bind="$attrs"
        :class="`layout ${variant}`">
        <slot></slot>
        </button>
</template>
<script setup>

defineProps({

    variant: {
        Type: String,
        default: 'primary',
        validator: prop=>['primary','secondary','bordered','danger','success'].includes(prop)
         
    }
})


</script>
<style scoped>

.layout {
    @apply flex w-full justify-center 
        rounded-md  px-3 
        py-1.5 text-sm font-semibold leading-6 shadow-sm 
      focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 ease-in-out duration-150 transition-all;
}

.primary {
    @apply bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600;
}

.secondary {
    @apply bg-gray-600  text-white hover:bg-indigo-500 focus-visible:outline-indigo-600
}

.bordered {
    @apply bg-white text-indigo-800 border border-indigo-500  hover:bg-gray-50 focus-visible:outline-indigo-600

}

.danger {
        @apply bg-red-600  text-white hover:bg-red-500 focus-visible:outline-red-600
    }

.success {
        @apply bg-green-600  text-white hover:bg-green-500 focus-visible:outline-green-600
    }

</style>