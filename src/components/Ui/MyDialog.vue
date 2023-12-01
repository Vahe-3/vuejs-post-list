<template>
    <div v-if="show" class="dialog" @click="handleClick">
        <div @click.stop class="content">
            <div class="dialog-header">
                <h2>Create post</h2>
                <my-button @click="handleClick">X</my-button>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'my-dialog',

        props: {
            show: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            handleClick() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        z-index: 11;
    }
    .content {
        margin: auto;
        background-color: #fff;
        border-radius: 12px;
        width: 500px;
        border: 3px solid darkolivegreen;
    }

    .dialog-header{
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;

        background-color: #f5ffe4;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    .dialog-body {
        padding: 10px 30px 30px 30px;
    }

    
</style>