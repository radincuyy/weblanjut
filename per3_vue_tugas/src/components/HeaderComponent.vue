<template>
    <div :style="{ 
        textAlign: 'center'
    }">
        <h1>Daftar Film Saya</h1>
        <p style="font-size: 14px; color: #555">
            {{ tampilkan ? 'Card Ditampilkan' : 'Card Disembunyikan' }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        tampilkan: Boolean
    }
}
</script>
