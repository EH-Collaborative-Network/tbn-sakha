document.querySelector("footer").addEventListener("click", function(){
    if(this.classList.contains("on")){
        this.classList.remove("on")
    }else{
        this.classList.add("on")
    }
})


/* P5 Texture */






let graphics;
let num = 1;
let shouldDraw = true;
let veins = []
function setup() {
    let c;
        
        if(typeof window != `undefined`){
            if(window.innerWidth <= 768){
              c = createCanvas((window.innerWidth), (window.innerHeight)); 
            }else{
              c = createCanvas((window.innerWidth), (window.innerHeight)); 
            }
        }
        c.parent('canvas')
        background("#000000")
        noStroke();
    }
    

    function draw() {
        if(typeof window != `undefined`){
            if(shouldDraw){
                for(let i = 0; i < veins.length;i++){
                veins[i].show()
                }     
            }
        }     
    }


    function mouseMoved(){
        if(random([true,false,false])){
                
                let x = random(0, windowWidth/4);
                let y = random(0, windowHeight);
                if(random([true,false])){
                    x = random((windowWidth/4 * 3), windowWidth);
                }

                veins.push(new Vein(x,y))
            
          }
    }
    function touchMoved(){
        if(random([true,false,false])){
                
                let x = random(0, windowWidth/4);
                let y = random(0, windowHeight);
                if(random([true,false])){
                    x = random((windowWidth/4 * 3), windowWidth);
                }

                veins.push(new Vein(x,y))
            
          }
    }
    function windowResized() {
        if(window?.innerWidth <= 768){
            resizeCanvas((window?.innerWidth), (window?.innerHeight));
        }else{
            resizeCanvas((window?.innerWidth), (window?.innerHeight));    
        }
        blendMode(BLEND);
        background("#00fff")
    }
    class Vein{
        constructor(x,y){
          this.x = x;
          this.y = y;
          this.count = 0;
        }
        show(){
            if(typeof window != `undefined`){
            let fw = windowWidth/50;
            let fh = windowHeight/50;
            let xf = floor(map(this.x,0, windowWidth, 0, 50));
            let yf = floor(map(this.y,0, windowHeight, 0, 50));
            xf = xf + floor(random(-2,2))
            yf = yf + floor(random(-2,2))
          if(this.count == 0){
                this.x = fw * xf;
                this.y = fh * yf;
            
            rect(this.x,this.y, fw, fh);
          }else if(this.count < 50 ){
            if(random([true,false,false])){
                this.x = this.x + (fw * floor(random(-2,2)));
                this.y = this.y + (fh * floor(random(-2,2)));
            }
            fill("#f8f8f8");
            rect(this.x,this.y, fw, fh);
          }
          this.count = this.count + 1
            }
        }
      }


  
  
