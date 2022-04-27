<template>
    <label for="todoText"></label>
    <!-- <input v-model="todoText" @keydown.enter="addNewTodoItem" type="text" id="todoText" placeholder="Bir şeyler yazınız..."> -->


    <!-- <input type="text" id="todoText" placeholder="Bir şeyler yazınız...">
    <button class="green" @click="sendData">Gönder</button> -->

    <input v-model="todoText" @keydown.enter="addNewTodoItem(todoText)" type="text" id="todoText" placeholder="Bir şeyler yazınız...">
</template> 

<script>
    export default {
        props: {
            addNewTodoItem : {
                type: Function,
                required : true
            }
        },
        data() {
            return {
                todoText: null,
            }
        },
        methods: {
            // addNewTodoItem() {
            //     this.$emit("add-todo", this.todoText);
            //     this.todoText = null;
            // }
        }
    };
</script>