<template>
    <div style="border: 1px solid black; padding: 10px; margin: 10px">
        <h2>{{ judul }}</h2>
        <p>{{ deskripsi }}</p>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        judul: String,
        deskripsi: String
    }
}
</script>