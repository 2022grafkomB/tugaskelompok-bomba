window.onload = () => {

    setupAudio();

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.fog = new THREE.Fog(0x000000, 120, 160);

    document.body.appendChild(renderer.domElement);

    const gameInstance = new Game(scene,camera);

    
    function animate (){
        requestAnimationFrame(animate);
        gameInstance.update();
        renderer.render(scene,camera);
    }
    animate();
}