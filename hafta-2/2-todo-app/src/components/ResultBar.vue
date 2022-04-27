<template>
 <small class="d-flex justify-content-end green">
     {{ itemCount }} adet todo var
  </small>
</template>

<script>
export default {
    props : ["itemCount"]
};
</script>