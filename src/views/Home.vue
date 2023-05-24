<template>
    <div class="home">
        <EnterPage />
        <Video />
        <Album />
        <Emotions />
    </div>
</template>

<script>
import Video from '../components/Video.vue'
import EnterPage from '../components/EnterPage.vue'
import Album from '../components/Album.vue'
import Emotions from '../components/Emotions.vue'

export default {
    name: 'Home',
    components: {
        Video,
        EnterPage,
        Album,
        Emotions
    }
}
</script>

<style scoped lang="scss"></style>