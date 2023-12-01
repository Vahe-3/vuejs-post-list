<template>
    <input class="input" type="text" placeholder="Text" @input="updateInput" :value="modelValue" >
</template>

<script lang="ts">
    export default {
        name: 'my-input',

        props: {
            modelValue: [String, Number],
        },

        methods: {
            updateInput(event: Event){
                const value = (event.target as HTMLInputElement).value;
                this.$emit('update:modelValue', value);
            }
        }
    }

</script>

<style scoped>
.input{
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid rgb(192, 197, 183);
  width: 100%;
  height: 40px;
  font-size: 18px;
  outline: none;
  border-radius: 12px;
}
</style>