<template>
    <button>
        <slot></slot>
    </button>
</template>

<script lang="ts">
    export default {
        name: 'my-button',
    }
</script>

<style  scoped>
button{
    height: 30px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid rgb(192, 197, 183);
    color: darkolivegreen;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 12px;
}
</style>