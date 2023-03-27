console.log("hola mundo :)");
            console.log("ancho: " + window.innerWidth);
            let par;
            par = document.getElementById("parrafito");
            if (window.innerWidth < 1700) {
                par.innerHTML = "menor a 1700 px";
            }
            else {
                par.innerHTML = "mayor o igual a 1700 px";
            }

            let captura;

            function setup() {
                createCanvas(800, 600);
                noCursor();
                captura = createCapture(VIDEO)
                captura.hide();
              }
              
              function draw() {
                background(150, 50, 190);
                image(captura, 40, 40, 600, 500);
                ellipse(mouseX, mouseY, 40, 60);
              }