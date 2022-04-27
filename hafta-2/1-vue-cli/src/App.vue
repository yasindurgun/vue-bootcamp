<template>
<app-header/>
<div class="container">
<h3>İlk vue cli app</h3>
    <p>paragraf</p>
</div>
<CounterItem></CounterItem>
<CounterItem/>
<CounterItem/>
<CounterItem/>
</template>

<script>
    import CounterItem from "@/components/CounterItem";
    export default {
        components : {
            // CounterItem : CounterItem,
            //key value aynıysa direkt yazılabilir.
            CounterItem
        }
    }
</script>
