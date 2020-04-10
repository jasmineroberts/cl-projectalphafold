var canvas = document.querySelector('#gameContainer');
var video = document.querySelector('#coverImage');
var coverPlate = document.querySelector('#coverPlate');
var barContainer = document.querySelector('#loader_container');

function calcExteriorLoader() {
	if (gameInstance.progress) {
		exteriorLoaded = gameInstance.progress.full.style.width;
		exteriorLoaded = exteriorLoaded.slice(0, exteriorLoaded.length - 1);
		exteriorLoaded = parseFloat(exteriorLoaded);
		if (exteriorLoaded == 100) {
			clearInterval(exteriorInterval);
			setTimeout(function() {
				barContainer.style.display = 'none';
				video.style.display = 'none';
				coverPlate.innerHTML = '';
				coverPlate.style.opacity = 0;
			}, 500);

			setTimeout(function() {
				coverPlate.style.display = 'none';
			}, 500);
		}
	}
}

exteriorInterval = setInterval(calcExteriorLoader, 500);
