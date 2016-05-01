/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);
	  
	 this.cilinder = new MyCilinder(scene, 12, 1);
	 this.disk = new MyDisk(scene);
	
	 this.ssize = 0.4;
	 this.msize = 0.3;
	 this.hsize = 0.2;
	
	 this.secondsHand = new MyClockHand(scene, this.ssize);
	 this.minutesHand = new MyClockHand(scene, this.msize);
	 this.hoursHand = new MyClockHand(scene, this.hsize);

	 this.secondsHand.setAngle(270);
	 this.minutesHand.setAngle(180);
	 this.hoursHand.setAngle(90);

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.loadTexture("/resources/images/clock.png");
	this.clockAppearance.setDiffuse( 0.7, 0.7, 0.7, 1);
	this.clockAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.clockAppearance.setShininess(90);

	this.pastCurrTime = 0;

 	this.initBuffers();
 };

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.update = function(currTime){
	if(this.pastCurrTime === 0){
		this.pastCurrTime = currTime;
	}
	else{
		var difTime = currTime-this.pastCurrTime;
		var aux = 0.001*difTime*360;
		//var aux = 0.001*difTime*2*Math.PI;
		this.secondsHand.setAngle(this.secondsHand.getAngle() + aux/60);
		this.minutesHand.setAngle(this.minutesHand.getAngle() + aux/3600);
		this.hoursHand.setAngle(this.hoursHand.getAngle() + aux/60/60/60);
		this.pastCurrTime = currTime;
	}
 }

 MyClock.prototype.display = function() {
   
    // clock
    this.scene.pushMatrix();
		this.scene.translate(7.25, 7.20, 0);
		this.scene.scale(0.70,0.70,0.25);
		this.cilinder.display();
	this.scene.popMatrix();
   
    // disk
    this.scene.pushMatrix();
		this.scene.translate(7.25, 7.20, 0.25);
		this.scene.scale(0.70,0.70,0.25);
		this.scene.clockAppearance.apply();
		this.disk.display();
	this.scene.popMatrix();

	// hours hand
    this.scene.pushMatrix();
		this.scene.translate(7.25, 7.20, 0.26);
		this.hoursHand.display();
	this.scene.popMatrix();

	// minutes hand
    this.scene.pushMatrix();
		this.scene.translate(7.25, 7.20, 0.27);
		this.minutesHand.display();
	this.scene.popMatrix();

	// seconds hand
    this.scene.pushMatrix();
		this.scene.translate(7.25, 7.20, 0.28);
		this.secondsHand.display();
	this.scene.popMatrix();
 }



