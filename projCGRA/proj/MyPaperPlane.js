/**
 * MyPaperPlane
 * @constructor
 */
 function MyPaperPlane(scene) {
 	CGFobject.call(this,scene);
    
    // table top texture
	this.tableAppearance = new CGFappearance(scene);
	this.tableAppearance.loadTexture("/resources/images/marmore.jpg");
	this.tableAppearance.setDiffuse( 1.0, 1.0, 1.0, 1);
	this.tableAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.tableAppearance.setShininess(20);

	this.state = "subir";
	this.x = 3.5;
	this.y = 3.65;
	this.z = 8;
	this.rot = 0;
   
    this.plane = new Plane(scene, 3);
 	this.plane.initBuffers();
 };

 MyPaperPlane.prototype = Object.create(CGFobject.prototype);
 MyPaperPlane.prototype.constructor = MyPaperPlane;

 MyPaperPlane.prototype.update = function(){
	if(this.state !== "parado"){
		if(this.y <= 0.5){
 			this.state = "parado";
 			this.y = Math.cos(Math.PI/4)*0.5;
 			this.rot = Math.PI/4;
 		}
 		else if(this.z <= 0.5){
			this.state = "descer";
			this.rot = Math.PI/2;
 		}
	}
	
 	
	
	if(this.state === "subir"){
		this.y += 0.05;
		this.z -= 0.1;
	}
	else if(this.state === "descer"){
		this.y -= 0.07;
	}
 }

 MyPaperPlane.prototype.display = function() {

    this.scene.pushMatrix();
	
    this.scene.translate(this.x,this.y,this.z);
	this.scene.rotate(this.rot,1,0,0);
    this.tableAppearance.apply();

	// plane left
	this.scene.pushMatrix();
	   this.scene.rotate(Math.PI/4,0,0,1);
	   this.scene.translate(0,0.25/2,0);
	   this.scene.rotate(Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	this.scene.popMatrix();
	this.scene.pushMatrix();
	   this.scene.rotate(Math.PI/4,0,0,1);
	   this.scene.translate(0,0.25/2,0);
       this.scene.rotate(-Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();

	 // plane right
	 this.scene.pushMatrix();
	   this.scene.rotate(-Math.PI/4,0,0,1);
	   this.scene.translate(0,0.25/2,0);
	   this.scene.rotate(Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();
	 this.scene.pushMatrix();
	   this.scene.rotate(-Math.PI/4,0,0,1);
	   this.scene.translate(0,0.25/2,0);
       this.scene.rotate(-Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();

	 // plane up right
	 this.scene.pushMatrix();
	   var aux = 0.25*Math.cos(Math.PI/4);
	   this.scene.translate(aux+0.25/2,aux,0);
	   this.scene.rotate(Math.PI/2,0,0,1);
	   this.scene.rotate(Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();
	 this.scene.pushMatrix();
	   this.scene.translate(aux+0.25/2,aux,0);
	   this.scene.rotate(Math.PI/2,0,0,1);
	   this.scene.rotate(-Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();

	 // plane up left
	 this.scene.pushMatrix();
	   this.scene.pushMatrix();
	   this.scene.translate(-aux-0.25/2,aux,0);
	   this.scene.rotate(Math.PI/2,0,0,1);
	   this.scene.rotate(Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();
	 this.scene.pushMatrix();
	   this.scene.translate(-aux-0.25/2,aux,0);
	   this.scene.rotate(Math.PI/2,0,0,1);
	   this.scene.rotate(-Math.PI/2,0,1,0);
	   this.scene.scale(1,0.25,1);
	   this.plane.display();
	 this.scene.popMatrix();
	 
	 this.scene.popMatrix();
 };