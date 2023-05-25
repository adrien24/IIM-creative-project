<script setup>
import * as THREE from 'three';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, SphereGeometry, WebGLRenderer } from 'three';
import { onMounted, ref } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = ref < HTMLCanvasElement | null > (null);

const scene = new THREE.Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;




const draco = new DRACOLoader();
draco.setDecoderPath('/examples/jsm/libs/draco/');
const loader = new GLTFLoader();
loader.setDRACOLoader(draco);
loader.load('./src/assets/models/laylowZ.gltf', (loaded) => {
    console.log(loaded);
    // scene.add(loaded.scene);
    const mesh = loaded.scene.children[0];
    scene.add(mesh);
    console.log(scene);
});
scene.add(camera);

const light = new THREE.PointLight(0xff0000, 1, 100);
light.position.set(50, 50, 50);
scene.add(light);

const sphere = new Mesh(
    new SphereGeometry(1, 20, 20),
    new MeshBasicMaterial({ color: 0x008080 }),
)

scene.add(sphere);

// const controls = new OrbitControls(camera, renderer.domElement);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(0, 20, 100);
// controls.update();

function animate(renderer) {



    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.render(scene, camera);

    renderer.render(scene, camera);

    requestAnimationFrame(animate);

}
onMounted(() => {
    const renderer = new WebGLRenderer({
        canvas: canvas.value,
        antialias: true,
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.update();
    // requestAnimationFrame(animate);
    animate(renderer);
});
</script>
<template>
    <canvas ref="canvas" />
</template>
<style scoped></style>
