<template>
    <div id="sound-bars" class="paused" :class="emotional">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>

export default {
    props: {
        emotional: {
            type: String,
            default: 'happy'
        }
    }
}

</script>

<style scoped lang="scss">
.emotionalSound {
    top: auto !important;
    left: auto !important;
    right: 24px !important;
    bottom: 24px !important;
}

#sound-bars {
    z-index: 10;
    position: absolute;
    top: 24px;
    right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    padding: 20px;
    border-radius: 100%;
    background: rgba(255, 255, 255, .2);
    cursor: pointer;

    span {
        background: #fff !important;
        margin: auto 1px 0;
        height: 100%;
        width: 2px;
        // Using 1 occasionally offsets UI :/
        transform: scaleY(.99);
        transform-origin: bottom;
        box-shadow: 0 4px 0 rgba(255, 255, 255, .2);
        transition: all .4s ease-in-out;

        // Create different height bars
        &:nth-child(1) {
            transform: scaleY(.8);
        }

        &:nth-child(2) {
            transform: scaleY(.6);
        }

        &:nth-child(4) {
            transform: scaleY(.4);
        }
    }

    &:not(.paused)>span {
        // Run initial animation on each un-pause event
        animation: sound-bars-animation 2s 2 alternate;

        // Scatter animations
        &:nth-child(1) {
            animation-delay: .4s;
        }

        &:nth-child(2) {
            animation-delay: .2s;
        }

        &:nth-child(3) {
            animation-delay: .6s;
        }

        &:nth-child(4) {
            animation-delay: .8s;
        }
    }

    &:before {
        content: "";
        position: absolute;
        opacity: 0;
        height: 0;
        width: 0;
        background: #fff;
        border-radius: 100%;
        transition: all .4s ease-in-out;
        cursor: pointer;
    }

    &:hover {
        &:before {
            // Show larger circle on hover
            width: calc(100% + 8px);
            height: calc(100% + 8px);
            opacity: 1;
        }

        >span {
            background: #000;
        }
    }

    // Settle animation on pause
    &.paused>span {
        opacity: .2;
        transform: scaleY(.2);
    }
}

@keyframes sound-bars-animation {

    // 0% - 50% uses inherited properties  
    50% {
        opacity: .2;
        transform: scaleY(.2);
    }

    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}
</style>