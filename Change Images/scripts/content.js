const imgList = [
  "https://indianmemetemplates.com/wp-content/uploads/abe-mereko-to-andar-lo-768x416.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/phir-hera-pheri-paisa-laya-akshay.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/uss-bechare-ko-iss-baat-ki-bhanak-bhi-nahi-thi-ke-ye-uska-aakhri-din-hone-wala-hai.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/main-nahi-bataunga-528x297.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/aaye-haye-itna-sukoon-800x600.jpg?crop=1",
  "https://indianmemetemplates.com/wp-content/uploads/ye-kaha-dark-hai-ye-toh-zindagi-hai-800x600.jpg?crop=1",
  "https://indianmemetemplates.com/wp-content/uploads/Abhishek-Upmanyu-kitna-ganda-aadmi-hoon-main-yaar-1024x561.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/aur-bhai-aagaya-swaad-1024x576.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/Abhishek-Upmanyu-iska-answer-to-aata-hi-nahi-mujhe-1024x608.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/abhishek-upmanyu-yahi-baatein-toh-baad-mein-yaad-aayengi-1024x616.jpg",
];

const getRandomImages = (list) => {
  const random = Math.floor(Math.random() * list.length);
  return list[random];
};

const body = document.querySelector("body");
const imgs = body.querySelectorAll("img");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].srcset = getRandomImages(imgList);
  imgs[i].src = getRandomImages(imgList);
}
