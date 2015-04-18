//
//Three.js
//
var scene, camera,renderer;
var geometry,material,cube, pyramid;

//
//cannon.js
//


var flag;

window.onload = function init()
{
    initScene();

    initCannon();



    camera.position.z = 5;


            document.onclick = function (event) { AddShape(event); };

            //document.getElementById("pryamids").onclick = function (event) { ChangeToTriangle(event); };
            //document.getElementById("sphere").onclick = function (event) { ChangeToSphere(event); };
            //document.getElementById("cubes").onclick = function (event) { ChangeToCube(event); };
            

            render();



}

function AddShape(event)
{
    //TODO: depending what button was last pressed via flag and switch 
    /* switch(flag)
    {
        case"s":
            break;
        case"q":
            break;
        case"p":
            break;
    }
    */
    
    var cursorX = event.clientX;
    var cursorY = event.clientY;
    console.log(cursorX);
    console.log(cursorY);
    // X ranges from 0 to 1348, Y ranges from 0 to 675
    var Xpos = (cursorX - 669) / 88;  // Scaling Factors ~ these are adjusted to scale the position...
    var Ypos = (303 - cursorY) / 87;  //... of the position of the mouse click

    geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(Xpos, Ypos, 0);
    scene.add(cube);


}



function render() 
{
    //TODO: add all world stuff to scene 
    //and some camera ops (ie mouse sweep, onMouseDown, only x and y)
    requestAnimationFrame( render );

    renderer.render(scene, camera);
}


function initScene()
{
    //TODO: initalize one shape in the center, maybe have it fall? 
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //addds first cube to scene
    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

}
function initCannon()
{
    //TODO: hit all the physics shit

}

function ClearToPyramid(event)
{
    //TODO: clear scene then add triagnles

}

function AddPyramid()
{
    //adds to exits scene
}

function ClearToSphere(event)
{
    //TODO: clear scene then add shperes

}

function AddPyramid()
{
    //adds to exits scene
}

function ClearToCube(event)
{
    //TODO: clear scene then add cubes to (x,y) of mouce click
    geometry = new THREE.BoxGeometry(3, 3, 3);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff });
    cube = new THREE.Mesh(geometry, material);
    //change posisiton 
    scene.add(cube);

}




















