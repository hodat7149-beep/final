let scene, camera, renderer, particles;

function initBG() {
  const canvas = document.getElementById("bg3d");

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const geometry = new THREE.BufferGeometry();
  const count = 2500;
  const pos = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    pos[i] = (Math.random() - 0.5) * 200;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));

  const material = new THREE.PointsMaterial({
    color: 0x00ffc6,
    size: 1.3,
    transparent: true,
    opacity: 0.9,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  animateBG();
}

function animateBG() {
  requestAnimationFrame(animateBG);

  particles.rotation.y += 0.0007;
  particles.rotation.x += 0.0003;

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

document.addEventListener("mousemove", (e) => {
  particles.rotation.y = (e.clientX / window.innerWidth - 0.5) * 1.2;
  particles.rotation.x = (e.clientY / window.innerHeight - 0.5) * 1;
});

initBG();
