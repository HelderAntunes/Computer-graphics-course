/**
 * MyClockHand
 * @constructor
 */
 function MyClockHand(scene, size) {
 	CGFobject.call(this,scene);
   
    this.teta = 0;
 	this.size = size;
 	
	this.handAppearance = new CGFappearance(this.scene);
	this.handAppearance.setDiffuse( 0, 0, 0, 1);
	this.handAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.handAppearance.setShininess(90);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();
 };

 MyClockHand.prototype = Object.create(CGFobject.prototype);
 MyClockHand.prototype.constructor = MyClockHand;

 MyClockHand.prototype.display = function() {
 	this.scene.pushMatrix();
      this.handAppearance.apply();
      this.scene.rotate(-(this.teta/180*Math.PI),0,0,1);
      this.scene.scale(0.01, 1, 0.01);
      this.scene.translate(0,this.size/2,0);
      this.scene.scale(1, this.size, 1);
      this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }

 MyClockHand.prototype.setAngle = function(angle){
     this.teta = angle;
 }

 MyClockHand.prototype.getAngle = function(){
 	return this.teta;
 }