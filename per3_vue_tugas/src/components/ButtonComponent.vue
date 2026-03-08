<template>
    <div>
        <button 
            @click="$emit('toggle')"
            :style="{ 
                backgroundColor: tampilkan ? 'green' : 'red',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px'
            }">
            {{ tampilkan ? 'Sembunyikan Card' : 'Tampilkan Card' }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        tampilkan: Boolean
    },
    emits: ['toggle']
}
</script>