/**
 * MyDisk
 * @constructor
 */
 function MyDisk(scene) {
 	CGFobject.call(this,scene);
	
 	this.initBuffers();
 };

 MyDisk.prototype = Object.create(CGFobject.prototype);
 MyDisk.prototype.constructor = MyDisk;

 MyDisk.prototype.initBuffers = function() {
    
	this.vertices = [];
 	this.indices = [];
 	this.normals = [];
    this.texCoords = [];
      
    var aux = 30*Math.PI/180;
     
    this.vertices.push(0,0,0);
    this.normals.push(0,0,1);
    this.texCoords.push(0.5, 0.5);
    for(var i = 0;i < 12;i++){
        this.vertices.push(Math.cos(i*aux), Math.sin(i*aux), 0);
        this.normals.push(0,0,1);
        this.texCoords.push(Math.cos(i*aux)*0.5+0.5,-Math.sin(i*aux)*0.5+0.5);
    }
      
     for(var i = 0;i < 11;i++){
          this.indices.push(0, i+1, i+2);
     }
     this.indices.push(0, 12, 1);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };