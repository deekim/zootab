function setRandomAnimal() {
  jQuery.get('./data/animals.yaml', function(data) {
    animals = jsyaml.load(data);

    randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    $("#data-animal-image-path").attr("src", "./img/" + randomAnimal["imagePath"]);
    $("#data-animal-common-name").html(randomAnimal["commonName"]);
    $("#data-animal-scientific-name").html(randomAnimal["scientificName"]);
    $("#data-animal-information").html(randomAnimal["information"]);
    $("#data-endangered-image-path").attr("src", "./img/" + randomAnimal["endangerdPath"]);

    logEncounter(randomAnimal["id"], animals.length);
  });
}

function logEncounter(id, total) {
	chrome.storage.sync.get(
		{ encounters : {} }
		, function(result) {
	    result.encounters[id] = true;

	    chrome.storage.sync.set({ "encounters": result.encounters }, updateEncounters(Object.keys(result.encounters).length, total));
	});
}

function updateEncounters(count, total) {
    $("#data-user-encounter-count").html(count);
    $("#data-animals-total").html(total);
}

$(document).ready(function() {
  setRandomAnimal();
});
