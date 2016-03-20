/**
 * MyCilinder
 * @constructor
 */
 function MyCilinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCilinder.prototype = Object.create(CGFobject.prototype);
 MyCilinder.prototype.constructor = MyCilinder;

 MyCilinder.prototype.initBuffers = function() {
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
	var andarTam = 1/(this.stacks);

	for(var i = 0;i <= this.stacks;i++){
		var zpos = i*andarTam;
		for(var j = 0;j < this.slices;j++){
			var x = Math.cos(teta*j);
			var y = Math.sin(teta*j); 
			this.vertices.push(x, y, zpos);
			this.normals.push(x, y, 0);
 		}
	}
 	
 	for(var i = 0;i < this.stacks;i++){
 		for(var j = 0;j < this.slices;j++){
 			if(j === this.slices-1){
 				this.indices.push(j+i*this.slices);
				this.indices.push(j+i*this.slices+1);
				this.indices.push(j+(i+1)*this.slices);

				this.indices.push(j+i*this.slices);
				this.indices.push(i*this.slices);
				this.indices.push(j+i*this.slices+1);
 			}
 			else{
				this.indices.push(j+i*this.slices);
				this.indices.push(j+i*this.slices+1);
				this.indices.push(j+(i+1)*this.slices);

				this.indices.push(j+i*this.slices+1);
				this.indices.push(j+(i+1)*this.slices+1);
				this.indices.push(j+(i+1)*this.slices); 				
 			}

 		}
 	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };