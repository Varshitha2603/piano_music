const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
// audio = new Audio(`tunes/${key}.mp3`);

const playTune = (key) => {
    const audio = new Audio(`tunes/${key}.mp3`);
    // audio.src = `tunes/${key}.mp3`;
    audio.volume = volumeSlider.value;
    audio.play(); 

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 200);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; 
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key.toUpperCase())) playTune(e.key.toUpperCase());
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);




