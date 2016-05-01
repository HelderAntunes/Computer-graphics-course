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

	var teta = Math.PI*2/this.slices;

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
	var andarTam = 1/(this.stacks);
	
	for(var j = 0;j < this.stacks;j++){
		
		var zpos = j*andarTam;
		
		for(var i = 0;i < this.slices;i++){
			
			this.vertices.push(Math.cos(teta*(i)), Math.sin(teta*(i)), zpos);
			this.vertices.push(Math.cos(teta*(i)), Math.sin(teta*(i)), zpos + andarTam);
			this.vertices.push(Math.cos(teta*(i+1)), Math.sin(teta*(i+1)), zpos);
			this.vertices.push(Math.cos(teta*(i+1)), Math.sin(teta*(i+1)), zpos + andarTam);
			
			var aux = 4*i + j*4*this.slices;
			this.indices.push(aux+0);
			this.indices.push(aux+2);
			this.indices.push(aux+1);
			this.indices.push(aux+2);
			this.indices.push(aux+3);
			this.indices.push(aux+1);

			var ang = teta*i + teta/2;
			var xNormal = Math.cos(ang);
			var yNormal = Math.sin(ang);
			this.normals.push(xNormal, yNormal, 0);
			this.normals.push(xNormal, yNormal, 0);
			this.normals.push(xNormal, yNormal, 0);
			this.normals.push(xNormal, yNormal, 0);
 		}
	}
 	
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };