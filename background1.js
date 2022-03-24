const images = ["https://cdn.pixabay.com/photo/2016/02/18/20/02/seljalandsfoss-1207958_960_720.jpg", "https://cdn.pixabay.com/photo/2022/02/28/04/50/nature-7038455_960_720.jpg", "https://cdn.pixabay.com/photo/2021/11/02/21/57/prayer-6764197_960_720.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];




document.body.style.backgroundImage = ` linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${chosenImage})`;
