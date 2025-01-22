import * as THREE from 'three';// Import OrbitControls (ensure you include the Three.js module)

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light (optional but improves visibility)
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth motion

// Box Geometry
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.x = -2; // Move the box to the left
scene.add(box);

// Sphere Geometry
const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 0; // Center the sphere
scene.add(sphere);

// Cone Geometry
const coneGeometry = new THREE.ConeGeometry(0.5, 1.5, 32);
const coneMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 2; // Move the cone to the right
scene.add(cone);

// Ground Plane
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2; // Lay flat
plane.position.y = -1; // Slightly below the objects
scene.add(plane);

// Handle Window Resizing
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate objects
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  sphere.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.z += 0.01;

  // Update controls for damping
  controls.update();

  // Render the scene
  renderer.render(scene, camera);
}
animate();