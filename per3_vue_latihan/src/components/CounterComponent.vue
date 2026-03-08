<template>
    <div>
        <h2>Counter: {{ count }}</h2>
        <button @click="count++">Tambah</button>
        <button @click="count--">Kurangi</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>