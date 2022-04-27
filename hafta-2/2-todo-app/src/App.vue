<template>
<div class="container">
  <h3 class="text-center">ToDo App</h3>
  <hr class="my-2">
  
  <!-- <AddSection @add-todo="addNewTodoItem"/> -->
  <!-- buradaki fonksiyon oraya inject olur. -->
  <AddSection :addNewTodoItem="addNewTodoItem"/>

  <!-- <TodoList myData="bu benim datam.."/> -->

  <!-- <TodoList @delete-todo-item="deleteItem" :myData="todoList"/>
  <ResultBar :itemCount="todoList.length"/> -->

  <!-- props -->
  <!-- <ListSection @delete-todo-item="deleteItem" :todoList="todoList" /> -->
  <ListSection/>
</div>
</template>

<script>

import AddSection from "@/components/AddSection";
import ListSection from "./components/ListSection.vue";
// import TodoList from "@/components/TodoList"
// import ResultBar from "@/components/ResultBar"

export default {
  components: {
    AddSection,
    // TodoList,
    // ResultBar
    ListSection
},
  created() {
    // setTimeout(()=> {
    //   this.todoList = [
    //     {id: 1, text: "Bootcamp 2"},
    //     {id: 2, text: "Bootcamp 2.1"},
    //     {id: 3, text: "Bootcamp 2.2"},
    //     {id: 4, text: "Bootcamp 2.3"},
    //     {id: 5, text: "Bootcamp 2.4"},
    //     {id: 6, text: "Bootcamp 2.5"}
    //   ];
    // },2000);
  },
  data() {
    return  {
      provideData : {
        todoList: [
       {id: 1, text: "Bootcamp 2"},
       {id: 2, text: "Bootcamp 2.1"},
       {id: 3, text: "Bootcamp 2.2"},
       {id: 4, text: "Bootcamp 2.3"},
       {id: 5, text: "Bootcamp 2.4"},
       {id: 6, text: "Bootcamp 2.5"}
      ]
      }
    };
  },

  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem
    };
  },

  methods: {
      deleteItem(todoItem){
        this.provideData.todoList = this.provideData.todoList.filter((t) => t != todoItem)
      },
      addNewTodoItem(todo){
        this.provideData.todoList.push({
          id : new Date().getTime(),
          text : todo
        });
      },
      testEvent(data){
        alert(data);
      }
    }
};
</script>