<script setup>
import { defineProps} from 'vue';

defineProps({
    score: Object,
})


</script>

<template>
    <h1>
       Score table
       {{score}}
    </h1>
</template>