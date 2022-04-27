<template>
<li class="d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>

    <!-- inject yapısıyla beraber emit kullanarak yukarıya göndermemize gerek yok.
    <button @click="$emit('delete-todo-item',item)" class="sm red">Sil</button> -->

    <button @click="deleteItem(item)" class="sm red">Sil</button>
</li>
</template>

<script>
export default {
    props : ["item"],
    inject : ["deleteItem"]
}
</script>