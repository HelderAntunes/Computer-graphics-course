/**
 * MyLamp
 * @constructor
 */
 function MyLamp(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyLamp.prototype = Object.create(CGFobject.prototype);
 MyLamp.prototype.constructor = MyLamp;

 MyLamp.prototype.initBuffers = function() {

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
	var andarTam = 1/(this.stacks-1);
	var ladoTam = 1/(this.slices-1);

	for(var i = 0;i < this.stacks;i++){
		var ypos = Math.sin(-Math.PI/2*i*andarTam+Math.PI/2);
		var aux = Math.sin(Math.PI/2*i*andarTam);
		for(var j = 0;j < this.slices;j++){
			var x = Math.cos(Math.PI*2*j*ladoTam)*aux;
			var z = Math.sin(Math.PI*2*j*ladoTam)*aux; 
			this.vertices.push(x, ypos, z);
			this.normals.push(x, ypos, z);
 		}
	}
 	
 	for(var i = 0;i < this.stacks-1;i++){
 		for(var j = 0;j < this.slices-1;j++){
 			
			this.indices.push(j+i*this.slices);
			this.indices.push(j+i*this.slices+1);
			this.indices.push(j+(i+1)*this.slices);
			this.indices.push(j+i*this.slices+1);
			this.indices.push(j+(i+1)*this.slices+1);
			this.indices.push(j+(i+1)*this.slices); 				

 		}
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };