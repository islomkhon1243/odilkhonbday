import * as THREE from 'https://cdn.skypack.dev/three';
  import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader';

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, 400);
  document.getElementById('cake-scene').appendChild(renderer.domElement);

  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load('cake_model.glb', function (gltf) {
    scene.add(gltf.scene);
    gltf.scene.position.y = -1;
    animate();
  });

  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.003;
    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, 400);
    camera.aspect = window.innerWidth / 400;
    camera.updateProjectionMatrix();
  });