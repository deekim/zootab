function randomAnimal() {
  document.getElementById("randomAnimal").src = "assets/test/animals/" + getRandomAnimal();
}

function getRandomAnimal() {
  var images = ["turtle.jpg","bird.jpg","polar-bear.jpg"];

  return images[Math.floor(Math.random() * images.length)];
}

$(document).ready(function(){
  randomAnimal();
});
