<template>
    <div class="card">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        title: String,
        description: String
    }
};
</script>

<style>
.card {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
}
</style>