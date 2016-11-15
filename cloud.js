// Merci Gaston


var CloudGenerator = function(cloudSize){

    // c = x + iy in the complex plan
    c = createVector(0.45, 0.1428);

    this.renderPoint = function(i, j){
        var z, n, r, i, j;
        n = 255;
        z = createVector(i, j);
        r = 2;

        z = scale(z, 0, cloudSize, -2, 2);
        while (abs(z) < r && n > 0){
            z = f(z, c);
            n = n-5;
        }
        if (n < 225){
            return n;
        }
        else{
            return 225;
        }
    };

    scale = function(t, a, b, c, d){
        // t = [x, y]
        // f: x ∈ [a, b] → y ∈ [c, d]
        var x = t.x * (d-c)/(b-a) + (b*c - a*d)/(b-a),
            y = t.y * (d-c)/(b-a) + (b*c - a*d)/(b-a);
        return createVector(x, y);
    }

    abs = function(z){
        var x = z.x,
            y = z.y;
        return Math.sqrt((x - y)*(x - y));
    }

    f = function(z, c){
        var x = z.x,
            y = z.y;
        return createVector(x*x - y*y + c.x, 2*x*y+c.y);
    }
};
