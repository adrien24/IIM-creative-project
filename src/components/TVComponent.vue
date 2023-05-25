<script setup lang="ts">
    import * as THREE from 'three';
    import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, SphereGeometry, WebGLRenderer} from 'three';
    import {onMounted, ref} from 'vue';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
    import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';

    const canvas = ref<HTMLCanvasElement | null>(null);

    const scene = new THREE.Scene();
    const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;


    const draco = new DRACOLoader();
    draco.setDecoderPath('/examples/jsm/libs/draco/');
    const loader = new GLTFLoader();
    loader.setDRACOLoader(draco);
    loader.load('./src/assets/models/laylowZ.gltf', (loaded) => {
        scene.add(loaded.scene);
    });
    scene.add(camera);

    const sphere = new Mesh(
        new SphereGeometry(1,20,20),
        new MeshBasicMaterial({color : 0x008080}),
    )

    scene.add(sphere);
    onMounted(() => {
        const renderer = new WebGLRenderer({
            canvas: canvas.value as unknown as HTMLCanvasElement,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    });
</script>
<template>
    <canvas ref="canvas"/>
</template>
<style scoped></style>
