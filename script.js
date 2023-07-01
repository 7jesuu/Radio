var radioStations = ["https://radiorecord.hostingradio.ru/lofi96.aacp", "https://radiorecord.hostingradio.ru/rap96.aacp", "https://radiorecord.hostingradio.ru/dub96.aacp", "https://radiorecord.hostingradio.ru/rr_main96.aacp", "https://radiorecord.hostingradio.ru/summerparty96.aacp", ];
var currentStationIndex = 0;
var radio = document.getElementById("radio");

document.getElementById("playButton").addEventListener("click", function() {
    radio.src = radioStations[currentStationIndex];
    radio.play();
});

document.getElementById("stopButton").addEventListener("click", function() {
    radio.pause();
    radio.currentTime = 0;
});

document.getElementById("nextButton").addEventListener("click", function() {
    currentStationIndex++;
    if (currentStationIndex >= radioStations.length) {
        currentStationIndex = 0;
    }
    radio.src = radioStations[currentStationIndex];
    radio.play();
});
