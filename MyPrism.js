/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
	var teta = Math.PI*2/this.slices;

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];

 	for(var i = 0;i< this.slices;i++){
		
		this.vertices.push(Math.cos(teta*(i)), Math.sin(teta*(i)), 0);
		this.vertices.push(Math.cos(teta*(i)), Math.sin(teta*(i)), 1);
		this.vertices.push(Math.cos(teta*(i+1)), Math.sin(teta*(i+1)), 0);
		this.vertices.push(Math.cos(teta*(i+1)), Math.sin(teta*(i+1)), 1);

		
		this.indices.push(4*i);
		this.indices.push(4*i+2);
		this.indices.push(4*i+1);
		
		this.indices.push(4*i+2);
		this.indices.push(4*i+3);
		this.indices.push(4*i+1);


		var ang = teta*i + teta/2;
		this.normals.push(Math.cos(ang), Math.sin(ang), 0);
		this.normals.push(Math.cos(ang), Math.sin(ang), 0);
		this.normals.push(Math.cos(ang), Math.sin(ang), 0);
		this.normals.push(Math.cos(ang), Math.sin(ang), 0);
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
