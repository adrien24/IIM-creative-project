<template>
    <div class="home">
        <EnterPage />
        <Video />
        <Album />
    </div>
</template>

<script>
import Video from '../components/Video.vue'
import EnterPage from '../components/EnterPage.vue'
import Album from '../components/Album.vue'

export default {
    name: 'Home',
    components: {
        Video,
        EnterPage,
        Album
    }
}
</script>

<style scoped lang="scss"></style>