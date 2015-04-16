//
//Three.js
//
var scene, camera,renderer;
var geometry,material,cube, pyramid;

//
//cannon.js
//


window.onload = function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

            geometry = new THREE.BoxGeometry( 1, 1, 1 );
            material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
            cube = new THREE.Mesh( geometry, material );
            scene.add( cube );

            camera.position.z = 5;


            document.onclick = function(event){AddShape(event);};
            

            render();



}

function render() 
{
    requestAnimationFrame( render );

                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    
}

function AddShape(event)
{
    //onclick add a shape to a specified default
    //TODO: at location of mouse
    geometry = new THREE.BoxGeometry( 3, 3, 3 );
    material = new THREE.MeshBasicMaterial( { color: 0x00ff } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
}



















