/**
 * MyChair
 * @constructor
 */
 function MyChair(scene) {
 	CGFobject.call(this, scene);

 	// chair color - white 
	// rgb color -> 255,255,255
	this.materialWhite = new CGFappearance(scene);
	this.materialWhite.setAmbient(0.3,0.3,0.3,1);
	this.materialWhite.setDiffuse(1.0,1.0,1.0);
	this.materialWhite.setSpecular(1.0,1.0,1.0,1);	
	this.materialWhite.setShininess(120);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();
 };

 MyChair.prototype = Object.create(CGFobject.prototype);
 MyChair.prototype.constructor = MyChair;

 MyChair.prototype.display = function() {
    var legHeight = 2.33;
    var seatSideSize = 1.5;
 	// legs
 	this.materialWhite.apply();
 	
 	this.scene.pushMatrix();
 	this.scene.translate(0.5, legHeight / 2, 0.5);
 	this.scene.scale(0.1, legHeight, 0.1);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(0.5, legHeight / 2, -0.5);
 	this.scene.scale(0.1, legHeight, 0.1);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-0.5, legHeight / 2, 0.5);
 	this.scene.scale(0.1, legHeight, 0.1);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-0.5, legHeight / 2, -0.5);
 	this.scene.scale(0.1, legHeight, 0.1);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// seat
 	
 	this.scene.pushMatrix();
 	this.scene.translate(0, legHeight, 0);
 	this.scene.scale(seatSideSize, 0.1, seatSideSize);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
