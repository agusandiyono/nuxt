<template>
  <div>
    <h2>Thus us user's id {{ $route.params.id }}</h2>
  </div>
</template>

<script>
export default {
    validate({ params }) {
        return /^\d+$/.test(params.id);
    }
};
</script>
