const body = document.querySelector("body");
const paragraphs = body.getElementsByTagName("p");

const createAudioSymbol = () => {
  const span = document.createElement("span");
  span.textContent = "🔉";
  span.style.cssText = `
        color: inherit; font-size: inherit; font-weight: 500; cursor: pointer; margin-left: .85rem;
    `;
  return span;
};

const speakWay = (text, volume, rate, pitch, voice) => {
  let speakData = new SpeechSynthesisUtterance();
  speakData.lang = "en";
  speakData.rate = rate;
  speakData.pitch = pitch;
  speakData.voice = voice;
  speakData.volume = volume;
  speakData.text = text;
  return speakData;
};

const getAllVoices = () => {
  let voices = speechSynthesis.getVoices();
  if (!voices.length) {
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  return voices;
};

const activateSpeak = (text) => {
  if ("speechSynthesis" in window) {
    let voices = getAllVoices();
    let rate = 1,
      pitch = 2;
    volume = 1;
    const doSpeak = speakWay(text, volume, rate, pitch, voices[5]);
    return doSpeak;
  } else {
    return alert("Your browser doesn't support speech synthesis 😞.");
  }
};

if (body) {
  for (const paragraph of paragraphs) {
    if (paragraph.textContent.length >= 100) {
      const span = createAudioSymbol();
      paragraph.appendChild(span);
      const result = activateSpeak(paragraph.textContent);
      span.addEventListener("click", () => {
        speechSynthesis.speak(result);
      });
    }
  }
}
