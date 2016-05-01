/**
 * MyDrone
 * @constructor
 */
 function MyDrone(scene) {
 	CGFobject.call(this,scene);
	
	this.angle = Math.PI + Math.PI/7;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	
	this.cilinder = new MyCilinder(scene,8,4);
	this.semiSphere = new MyLamp(scene,8,4);
	this.cube = new MyUnitCubeQuad(scene);

 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.display = function() {
 	this.scene.pushMatrix();
 	//this.scene.translate(-2,0,2);
   
    // draw + 
		this.scene.pushMatrix();
			this.scene.scale(0.1,0.1,4);
			this.cilinder.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(-2,0,2);
			this.scene.rotate(Math.PI/2,0,1,0);
			this.scene.scale(0.1,0.1,4);
			this.cilinder.display();
		this.scene.popMatrix();

	// draw cilinder bases
		this.scene.pushMatrix();
			this.scene.translate(0,0.3,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.15,0.15,0.4);
			this.cilinder.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(2,0,2);
			this.scene.translate(0,0.3,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.15,0.15,0.4);
			this.cilinder.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(-2,0,2);
			this.scene.translate(0,0.3,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.15,0.15,0.4);
			this.cilinder.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0,4);
			this.scene.translate(0,0.3,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.15,0.15,0.4);
			this.cilinder.display();
		this.scene.popMatrix();

	// draw helices bases
		this.scene.pushMatrix();
			this.scene.translate(0,0.3,0);
			this.scene.scale(0.15,0.15,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(2,0,2);
			this.scene.translate(0,0.3,0);
			this.scene.scale(0.15,0.15,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(-2,0,2);
			this.scene.translate(0,0.3,0);
			this.scene.scale(0.15,0.15,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0,4);
			this.scene.translate(0,0.3,0);
			this.scene.scale(0.15,0.15,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();

	// draw helices
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(-Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.scene.translate(0,0,4);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0,0,4);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(-Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(2,0,2);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(2,0,2);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(-Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(-2,0,2);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(-2,0,2);
			this.scene.rotate(Math.PI/2,0,0,-1);
			this.scene.translate(-0.3,0,0);
			this.scene.rotate(-Math.PI/2, 1,0,0);
			this.scene.scale(0.05,1,0.15);
			this.semiSphere.display();
		this.scene.popMatrix();

		
	// draw semi-sphere
		this.scene.pushMatrix();
			this.scene.translate(0,0,2);
			this.scene.scale(0.5,0.5,0.5);
			this.semiSphere.display();
		this.scene.popMatrix();

	// draw legs
		// left
		this.scene.pushMatrix();
			this.scene.translate(-0.5,0.5,0);
			this.scene.translate(1,-1,3);
			this.scene.rotate(Math.PI/4, 0,0,1);
			this.scene.scale(0.1,Math.sqrt(2),0.1);
			this.cube.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(-0.5,0.5,0);
			this.scene.translate(1,-1,1);
			this.scene.rotate(Math.PI/4, 0,0,1);
			this.scene.scale(0.1,Math.sqrt(2),0.1);
			this.cube.display();
		this.scene.popMatrix();
		
		// right
		this.scene.pushMatrix();
			this.scene.translate(0.5,0.5,0);
			this.scene.translate(-1,-1,1);
			this.scene.rotate(-Math.PI/4, 0,0,1);
			this.scene.scale(0.1,Math.sqrt(2),0.1);
			this.cube.display();
		this.scene.popMatrix();
		this.scene.pushMatrix();
			this.scene.translate(0.5,0.5,0);		
			this.scene.translate(-1,-1,3);
			this.scene.rotate(-Math.PI/4, 0,0,1);
			this.scene.scale(0.1,Math.sqrt(2),0.1);
			this.cube.display();
		this.scene.popMatrix();

		
	// draw leg bases
		this.scene.pushMatrix();
			this.scene.translate(1,-1,2);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.1,3,0.1);
			this.cube.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.scene.translate(-1,-1,2);
			this.scene.rotate(Math.PI/2, 1,0,0);
			this.scene.scale(0.1,3,0.1);
			this.cube.display();
		this.scene.popMatrix();
	
	this.scene.popMatrix();

 }


 MyDrone.prototype.addAngle = function(angle){
     this.angle += angle;
 }

 MyDrone.prototype.getAngle = function(){
 	return this.angle;
 }

 MyDrone.prototype.move = function(dist){
 	this.x += Math.sin(this.angle)*dist;
	this.z += Math.cos(this.angle)*dist;
 }

 MyDrone.prototype.getZ = function(){
 	return this.z;
 }

 MyDrone.prototype.getX = function(){
 	return this.x;
 }

 MyDrone.prototype.getY = function(){
 	return this.y;
 }

MyDrone.prototype.moveY = function(dist){
	this.y += dist;
}
