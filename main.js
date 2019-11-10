function setRandomAnimal() {
  jQuery.get('./data/animals.yaml', function(data) {
    animals = jsyaml.load(data);

    console.log(animals[Math.floor(Math.random() * animals.length)]);

    randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    $("#data-animal-image-path").attr("src", "./img/" + randomAnimal["imagePath"]);
    $("#data-animal-common-name").html(randomAnimal["commonName"]);
    $("#data-animal-scientific-name").html(randomAnimal["scientificName"]);
    $("#data-animal-information").html(randomAnimal["information"]);
    $("#data-endangered-image-path").attr("src", "./img/" + randomAnimal["endangerdPath"]);
  });
}

$(document).ready(function() {
  setRandomAnimal();
});
