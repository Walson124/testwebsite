const canvas = document.getElementById('test_canvas');
canvas.classList.add('canvas');
const mainObject = createMainObject(canvas);
addMovement();

var map = {};

function addMovement() {
    onkeydown = onkeyup = function(e) {
        movement(e);
    }
}

/**
 * This function allows WASD keys to control the mainObject div. However, releasing any key stops the movement of previous keys.
 * @param {Event} e 
 */
function movement(e) {
    const speed = 10;
    map[e.code] = e.type == 'keydown';
    // update coordinates
    var topSpace = parseInt(mainObject.style.top.slice(0, -2));
    var leftSpace = parseInt(mainObject.style.left.slice(0, -2));
    //console.log(map);
    if (map['KeyW']) {
        mainObject.style.top = (topSpace - speed).toString() + "px";
    }
    if (map['KeyA']) {
        mainObject.style.left = (leftSpace - speed).toString() + "px";
    }
    if (map['KeyS']) {
        mainObject.style.top = (topSpace + speed).toString() + "px";
    }
    if (map['KeyD']) {
        mainObject.style.left = (leftSpace + speed).toString() + "px";
    }
}

function createMainObject(canvas) {
    const mainObject = document.createElement('div');
    canvas.appendChild(mainObject);
    mainObject.classList.add("main_object");
    mainObject.innerText = "hey";
    mainObject.style.top = '100px';
    mainObject.style.left = '100px';
    return mainObject;
}