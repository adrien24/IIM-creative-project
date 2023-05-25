<template>
    <div class="home">
        <EnterPage />
        <Video />
        <Album />
        <Emotions />
        <Mode />
        <Deconnexion />
    </div>
</template>

<script>
import Video from '../components/Video.vue'
import EnterPage from '../components/EnterPage.vue'
import Album from '../components/Album.vue'
import Emotions from '../components/Emotions.vue'
import Mode from '../components/Mode.vue'
import Deconnexion from '../components/Deconnexion.vue'

export default {
    name: 'Home',
    components: {
        Video,
        EnterPage,
        Album,
        Emotions,
        Mode,
        Deconnexion
    }
}
</script>

<style scoped lang="scss"></style>