<template>
    <select class="select" :value="modelValue"  @change="handleChange">
        <option disabled value="">Sort by</option>
        <option v-for="option in options" :value="option.value" :key="option.id" >{{ option.name }}</option>
    </select>
</template>

<script lang="ts">
import type { SelectOption } from '@/types/types';

    export default {
        name: "my-select",

        props: {
            modelValue :{
                type: String,
                required: true,
            },
            options: {
                type: Array as () => SelectOption[],
                default: () => [],
            }
        },

        methods: {
            handleChange(event: Event){
                const value = (event.target as HTMLSelectElement).value;
                this.$emit('update:modelValue', value);
            }
        }
    }
</script>

<style scoped>

.select {
    height: 30px;
    background: transparent;
    font-size: 20px;
    border-radius: 12px;
    outline: none;
    border: 2px solid #C0C5B7;
    padding: 5p;
    cursor: pointer;
    color: #556B2F;
}

</style>