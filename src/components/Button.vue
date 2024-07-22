<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>

<template>
    <button @click="emit('click')" class="mb-2 mr-2 px-3 py-2 w-full rounded text-sm align-middle text-white bg-slate-700 hover:bg-slate-600">
        <slot />
    </button>
</template>
