var degToRad = Math.PI / 180.0;

var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;

var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.doSomething = function()
{
	console.log("Doing something...");
};

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	
	
	this.luz0 = true;
	this.luz1 = true;
	this.luz2 = true;
	this.luz3 = true;
	this.luz4 = true;

	this.active = true;

	this.speed = 3;
	
	this.enableTextures(true);

	this.initCameras();

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);
	
	// Scene elements
	this.chairA = new MyChair(this);
	this.chairB = new MyChair(this);
	this.table = new MyTable(this);
	this.wall = new Plane(this);
	this.wallLeft = new MyQuad(this, -0.5,1.5,-0.5,1.5);
	this.floor = new MyQuad(this, 0, 10, 0, 12);
	this.boardA = new Plane(this, BOARD_A_DIVISIONS, 0,1,0,1);
	this.boardB = new Plane(this, BOARD_B_DIVISIONS, 0,1,0,1);
	this.prism = new MyPrism(this, 8, 20);
	this.cilinder = new MyCilinder(this, 8, 20);
	this.column = new MyCilinder(this, 8, 20);
	this.lamp = new MyLamp(this, 8, 20);
	this.clock = new MyClock(this);
	this.paperPlane = new MyPaperPlane(this);
	this.drone = new MyDrone(this);
	
	// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(0,0.2,0.8,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.materialwall = new CGFappearance(this);
	this.materialwall.setAmbient(0.3,0.3,0.3,1);
	this.materialwall.setDiffuse(0.2,0.5,0.9,1);
	this.materialwall.setSpecular(0.1,0.3,0.6,1);	
	this.materialwall.setShininess(100);

	// floor texture
	this.floortexture = new CGFappearance(this);
	this.floortexture.loadTexture("/resources/images/floor.png");
	this.floortexture.setDiffuse( 1.0, 1.0, 1.0, 1);
	this.floortexture.setSpecular( 0.1, 0.1, 0.1, 1);
	this.floortexture.setShininess(20);

	// window texture
	this.windowAppearance = new CGFappearance(this);
	this.windowAppearance.loadTexture("/resources/images/window.png");
	this.windowAppearance.setDiffuse( 1.0, 1.0, 1.0, 1);
	this.windowAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.windowAppearance.setShininess(20);
	this.windowAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
	
	// slides texture
	this.slidesAppearance = new CGFappearance(this);
	this.slidesAppearance.loadTexture("/resources/images/slides.png");
	this.slidesAppearance.setDiffuse( 1.0, 1.0, 1.0, 1);
	this.slidesAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.slidesAppearance.setShininess(20);

	// board texture
	this.boardAppearance = new CGFappearance(this);
	this.boardAppearance.loadTexture("/resources/images/board.png");
	this.boardAppearance.setDiffuse( 0.7, 0.7, 0.7, 1);
	this.boardAppearance.setSpecular( 0.5, 0.5, 0.5, 1);
	this.boardAppearance.setShininess(120);

	// marmore texture
	this.marmoreAppearance = new CGFappearance(this);
	this.marmoreAppearance.loadTexture("/resources/images/marmore.jpg");
	this.marmoreAppearance.setDiffuse( 0.7, 0.7, 0.7, 1);
	this.marmoreAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.marmoreAppearance.setShininess(90);

	// clock texture
	this.clockAppearance = new CGFappearance(this);
	this.clockAppearance.loadTexture("/resources/images/clock.png");
	this.clockAppearance.setDiffuse( 0.7, 0.7, 0.7, 1);
	this.clockAppearance.setSpecular( 0.1, 0.1, 0.1, 1);
	this.clockAppearance.setShininess(90);

	// drone texture
	this.droneTexture = new CGFappearance(this);
	this.droneTexture.loadTexture("/resources/images/droneAppearance.png");
	this.droneTexture.setDiffuse( 0.7, 0.7, 0.7, 1);
	this.droneTexture.setSpecular( 0.1, 0.1, 0.1, 1);
	this.droneTexture.setShininess(90);

	this.droneAppearances = [];
	this.droneAppearances[0] = this.materialwall;
	this.droneAppearances[1] = this.boardAppearance;
	this.droneAppearances[2] = this.marmoreAppearance;
	this.droneAppearances[3] = this.droneTexture;
	this.droneAppearanceList = {};
	this.droneAppearanceList['blue'] = 0;
	this.droneAppearanceList['board'] = 1;
	this.droneAppearanceList['marmore'] = 2;
	this.droneAppearanceList['drone'] = 3;
	
	this.currDroneAppearance = 0;
	this.droneAppearance = 'blue';
	
	this.setUpdatePeriod(100);
};

LightingScene.prototype.update = function(currTime){
	if(this.active === true)
		this.clock.update(currTime);
}

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));
};

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0,0,0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(4, 6, 1, 1);
	this.lights[1].setPosition(10.5, 6.0, 1.0, 1.0);
	this.lights[2].setPosition(10.5, 6.0, 5.0, 1.0);
	this.lights[3].setPosition(4, 6.0, 5.0, 1.0);
	this.lights[4].setPosition(0, 4, 7.5, 1.0);

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1.0, 1.0, 0, 1.0);
	this.lights[0].enable();

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].enable();

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setConstantAttenuation(0);
	this.lights[2].setLinearAttenuation(1);
	this.lights[2].setQuadraticAttenuation(0);
	this.lights[2].enable();

	this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1.0, 1.0, 0, 1.0);
	this.lights[3].setConstantAttenuation(0);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0.2);
	this.lights[3].enable();

	this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1.0, 1.0, 0, 1.0);
	this.lights[4].enable();

};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
	this.paperPlane.update();
	
	if(this.luz0 === false)
		this.lights[0].disable();
	else
		this.lights[0].enable();
	
	if(this.luz1 === false)
		this.lights[1].disable();
	else
		this.lights[1].enable();
	
	if(this.luz2 === false)
		this.lights[2].disable();
	else
		this.lights[2].enable();
	
	if(this.luz3 === false)
		this.lights[3].disable();
	else
		this.lights[3].enable();
	
	if(this.luz4 === false)
		this.lights[4].disable();
	else
		this.lights[4].enable();
}


LightingScene.prototype.display = function() {
	//this.shader.bind();

	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();

	// Update all lights used
	this.updateLights();

	// Draw axis
	this.axis.display();

	//this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	
	// ---- BEGIN Geometric transformation section

	// ---- END Geometric transformation section


	// ---- BEGIN Primitive drawing section
	
	// Floor
	this.pushMatrix();
		this.floortexture.apply();
		this.translate(7.5, 0, 7.5);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(15, 15, 0.2);
		this.floor.display();
	this.popMatrix();

	// Left Wall
	this.pushMatrix();
		this.windowAppearance.apply();
		this.translate(0, 4, 7.5);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		this.wallLeft.display();
	this.popMatrix();

	// Right Wall
	this.pushMatrix();
		this.materialwall.apply();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.wall.display();
	this.popMatrix();

	// First Table
	this.pushMatrix();
		this.translate(5, 0, 8);
		this.table.display();
	this.popMatrix();

	// Second Table
	this.pushMatrix();
		this.translate(12, 0, 8);
		this.table.display();
	this.popMatrix();

	// Board A
	this.pushMatrix();
		this.translate(4, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.slidesAppearance.apply();
		this.boardA.display();
	this.popMatrix();

	// Board B
	this.pushMatrix();
		this.translate(10.5, 4.5, 0.2);
		this.scale(BOARD_WIDTH, BOARD_HEIGHT, 1);
		
		this.boardAppearance.apply();
		this.boardB.display();
	this.popMatrix();
	
	// chairs
	this.pushMatrix();
		this.translate(5, 0, 10);
		this.chairA.display();
	this.popMatrix();
	
	this.pushMatrix();
		this.translate(12, 0, 10);
		this.chairB.display();
	this.popMatrix();
	
	// prism
	this.pushMatrix();
		this.translate(5, 4.65, 8);
		this.rotate(Math.PI/2, 1, 0, 0);
		this.materialA.apply();
		this.prism.display();
	this.popMatrix();

	// cilinder
	this.pushMatrix();
		this.translate(12, 4.65, 8);
		this.rotate(Math.PI/2, 1, 0, 0);
		this.materialA.apply();
		this.cilinder.display();
	this.popMatrix();

	// column
	this.pushMatrix();
	    this.scale(1, 8, 1);
		this.translate(1, 1, 1);
		this.rotate(Math.PI/2, 1, 0, 0);
		this.marmoreAppearance.apply();
		this.column.display();
	this.popMatrix();

	// lamp
	this.pushMatrix();
		this.translate(8.5, 8, 8);
		this.rotate(Math.PI, 1, 0, 0);
		this.materialA.apply();
		this.lamp.display();
	this.popMatrix();

	// clock
	this.pushMatrix();
		this.clock.display();
	this.popMatrix();
	
	// papeplane
	this.pushMatrix();
		this.paperPlane.display();
	this.popMatrix();

	/// drone
	this.pushMatrix();
		this.currDroneAppearance = this.droneAppearanceList[this.droneAppearance];
		this.droneAppearances[this.currDroneAppearance].apply();
		this.translate(7.5,4,7.5);
		this.translate(this.drone.getX(),this.drone.getY(),this.drone.getZ());
		this.translate(0,0,2);
		this.rotate(this.drone.getAngle(),0,1,0);
		this.translate(0,0,-2);
		this.drone.display();
	this.popMatrix();
	
	// ---- END Primitive drawing section

	//this.shader.unbind();
};
