let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let numClosedDoors = 3

let openDoor1 = ''
let openDoor2 = ''
let openDoor3 = ''

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
   	openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  };
}

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg'
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'


doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
}
doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
}
doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
}

let isClicked = (door) => {
  if (doorImage1.onclick === closedDoorPath) {
    return false;
} else {
  return true
}
}

let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let playDoor = () => {
  if(numClosedDoors === 0) {
	gameOver()
  } else
  numClosedDoors-=1;
}




randomChoreDoorGenerator()