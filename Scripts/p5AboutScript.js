let rocco;


function preload() {
  // Load model with normalise parameter set to true
  rocco = loadModel('../Assets/model/smolroc.obj', true);
}

function setup() {
  let cnv = createCanvas(400, 400, WEBGL);
  cnv.parent('narrow_body');
  //normalMaterial();
}
function draw() {
  background(255);
  //scale(-1)
  orbitControl(5, 5, 5);
  rotateY(0.5);
  //box(100, 100);
  model(rocco);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}
