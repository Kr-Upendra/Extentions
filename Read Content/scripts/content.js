// const paragraph = document.querySelector(".about__abouttext p");

// const speak = (text, voice, volume, pitch, rate) => {
//   let speakData = new SpeechSynthesisUtterance();
//   speakData.volume = volume;
//   speakData.rate = rate;
//   speakData.pitch = pitch;
//   speakData.voice = voice;
//   speakData.lang = "en";
//   speakData.text = text;
//   return speakData;
// };

// const getAllVoices = () => {
//   let voices = speechSynthesis.getVoices();
//   if (!voices.length) {
//     let utterance = new SpeechSynthesisUtterance("");
//     speechSynthesis.speak(utterance);
//     voices = speechSynthesis.getVoices();
//   }
//   return voices;
// };

// const activateSpeak = (text) => {
//   if ("speechSynthesis" in window) {
//     let voices = getAllVoices();
//     let rate = 1,
//       pitch = 2;
//     volume = 1;
//     const doSpeak = speak(text, voices[5], volume, pitch, rate);
//     return doSpeak;
//   } else {
//     alert("Your browser doesn't support speech synthesis 😞.");
//   }
// };

// if (paragraph) {
//   const audioBox = document.createElement("div");
//   audioBox.textContent = "🔊";
//   audioBox.style.cssText =
//     "margin: 1rem auto; width: 30px; padding: 1rem; cursor: default; background-color: rgba(0, 0, 0, .45); backdrop-filter: blur(3px); border: 2px solid #5a5959; border-radius: .45rem;";
//   paragraph.appendChild(audioBox);
//   const speechableText = paragraph.textContent;
//   const result = activateSpeak(speechableText);

//   audioBox.addEventListener("click", () => {
//     speechSynthesis.speak(result);
//   });
// }

console.log("Hello world!");
