var drops,
    cloud, 
    cloudGenerator,
    cloudSize,  
    littleAnarchy;

var w = window.innerWidth, 
    h = window.innerHeight;

function setup() {
    createCanvas(w, h);
    cloudSize = 500;
    randomSeed(93)

    cloud = createImage(cloudSize, cloudSize/2);
    cloud.loadPixels();

    cloudGenerator = new CloudGenerator(cloudSize);
    var c = 0;
    for (var x = 0; x < cloud.width; x++) {
        for (var y = 0; y < cloud.height; y++) {
            c = cloudGenerator.renderPoint(x, y);
            cloud.set(x, y, [c, c, c, 100]); 
        }
    }
    cloud.updatePixels();

    littleAnarchy = [];
    var howCloudy = 30;
    for (var r = 0; r <= howCloudy; r++) {
        littleAnarchy.push([random(0, w), random(-50, -100)]);
    };

    drops = [];
}

function draw() {
    background(225);
    for (var a = littleAnarchy.length - 1; a >= 0; a--) {
        image(cloud, littleAnarchy[a][0], littleAnarchy[a][1]);
    };
    if (randomGaussian(0, 3) > 0 ){
        drops.push(new Drop());
    }

    for (var i = 0; i < drops.length; i++){
        drops[i].update();
        drops[i].display();
        if (drops[i].pos.y > h){
            drops.splice(i, 1);
        }
    }
}
