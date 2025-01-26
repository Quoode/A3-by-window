let windowImage; 
let sceneImage1;
let sceneImage2;
let tree;
let cloud1, cloud2, cloud3, cloud4, cloud5, cloud6;
let bgNight, city, moon;
let soundIcon, soundIconMuted; 
let currentScene = 1; 
let music;
let isPlaying = false;
let graphic;

function preload() {

  windowImage = loadImage('Pictures/Window open.png');
  sceneImage1 = loadImage('Pictures/Scence 1.png');
  sceneImage2 = loadImage('Pictures/Scene 2.png');
  tree = loadImage('Pictures/Tree.png');
  cloud1 = loadImage('Pictures/Cloud 1.png');
  cloud2 = loadImage('Pictures/Cloud 2.png');
  cloud3 = loadImage('Pictures/Cloud 3.png');
  cloud4 = loadImage('Pictures/Cloud 4.png');
  cloud5 = loadImage('Pictures/Cloud 5.png');
  cloud6 = loadImage('Pictures/Cloud 6.png');
  bgNight = loadImage('Pictures/BG night.png');
  city = loadImage('Pictures/City.png');
  moon = loadImage('Pictures/Moon.png');
  soundIcon = loadImage('Pictures/Music.png');
  soundIconMuted = loadImage('Pictures/Mute.png');

  music = loadSound('libraries/LofiMusic.mp3');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  cnv = createCanvas(1512, 540);

  cloudPosition1 = 20;
  cloudPosition2 = 275;
  cloudPosition3 = 345;
  cloudPosition4 = 210;
  cloudPosition5 = 130;
  cloudPosition6 = 25;

  graphic = createGraphics(461, 414);
  graphic.style('z-index', '1');
}

function draw() {
  background(240, 235, 222);

  graphic.background(51);

  let graphicX = (width - graphic.width) / 2;
  let graphicY = (height - graphic.height) / 2;

  function drawToGraphic(graphic, img) {
    let graphicWidth = graphic.width;
    let graphicHeight = graphic.height;
  
    let imgAspectRatio = img.width / img.height;
    let scaledWidth = graphicHeight * imgAspectRatio; 
  
    let x = (graphicWidth - scaledWidth) / 2;
    let y = 0; 
  
    graphic.image(img, x, y, scaledWidth, graphicHeight);
  }

  function placeCityAtBottom(graphic, img) {
    let graphicWidth = graphic.width;
    let graphicHeight = graphic.height;
  
    let imgAspectRatio = img.width / img.height;
    let scaledWidth = graphicWidth;
    let scaledHeight = graphicWidth / imgAspectRatio; 
  
    let x = 0; 
    let y = graphicHeight - scaledHeight; 
  
    graphic.image(img, x, y, scaledWidth, scaledHeight);
  }

  function placeTreeInGraphic(graphic, img) {
    let graphicWidth = graphic.width;
    let graphicHeight = graphic.height;
  
    let imgAspectRatio = img.width / img.height;
    let scaledWidth = graphicWidth / 1.5; 
    let scaledHeight = scaledWidth / imgAspectRatio; 
  
    let x = 0; 
    let y = graphicHeight - scaledHeight; 
  
    graphic.image(img, x, y, scaledWidth, scaledHeight);
  }
  
  if (currentScene === 1) {
    drawToGraphic(graphic, sceneImage1);
  } else if (currentScene === 2) {
    drawToGraphic(graphic, sceneImage2);
    placeTreeInGraphic(graphic, tree);
    graphic.image(cloud1, cloudPosition1, 100, cloud1.width/2, cloud1.height/2);
    graphic.image(cloud2, cloudPosition2, 50, cloud2.width/2, cloud2.height/2);
    graphic.image(cloud3, cloudPosition3, 175, cloud3.width/2, cloud3.height/2); 
  } else if (currentScene === 3) {
    drawToGraphic(graphic, bgNight);
    placeCityAtBottom(graphic, city); 
    graphic.image(moon, 290, 30, moon.width/2, moon.height/2);
    graphic.image(cloud4, cloudPosition4, 120, cloud4.width/2, cloud4.height/2);
    graphic.image(cloud5, cloudPosition5, 35, cloud5.width/2, cloud5.height/2);
    graphic.image(cloud6, cloudPosition6, 150, cloud6.width/2, cloud6.height/2);
  }

  cloudPosition1 -= 1;
  cloudPosition2 -= 1;
  cloudPosition3 -= 1;
  cloudPosition4 -= 1;
  cloudPosition5 -= 1;
  cloudPosition6 -= 1;

  if (cloudPosition1 <= -210) {
    cloudPosition1 = graphic.width;
  }
  if (cloudPosition2 <= -275) {
    cloudPosition2 = graphic.width;
  }
  if (cloudPosition3 <= -345) {
    cloudPosition3 = graphic.width;
  }
  if (cloudPosition4 <= -210) {
    cloudPosition4 = graphic.width;
  }
  if (cloudPosition5 <= -130) {
    cloudPosition5 = graphic.width;
  }
  if (cloudPosition6 <= -225) {
    cloudPosition6 = graphic.width;
  }

  image(graphic, graphicX, graphicY);
}

function keyPressed() {
  if (key === 'm' || key === 'M') {
    if (isPlaying) {
      music.pause();
    } else {
      music.loop();
    }
    isPlaying = !isPlaying;
  }
  if (keyCode === RIGHT_ARROW) {
    currentScene++; 
    if (currentScene > 3) currentScene = 1; 
  } else if (keyCode === LEFT_ARROW) {
    currentScene--; 
    if (currentScene < 1) currentScene = 3; 
  }
}
