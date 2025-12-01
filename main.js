
function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // --- 1. Vertex Buffer ---
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // --- 2. Color Buffer ---
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // --- 3. Normal Buffer ---
    var normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // --- 4. Index Buffer ---
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    // --- Compile Shaders ---
    var vertexShaderCode = document.getElementById("vertexShaderCode").text;
    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    
    // aPosition
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPos = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPos);

    // aColor
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    var aColor = gl.getAttribLocation(program, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aColor);

    // aNormal 
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    var aNormal = gl.getAttribLocation(program, "aNormal");
    gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aNormal);

    // --- Uniforms ---
    var Pmatrix = gl.getUniformLocation(program, "uProj");
    var Vmatrix = gl.getUniformLocation(program, "uView");
    var Mmatrix = gl.getUniformLocation(program, "uModel");
    var Nmatrix = gl.getUniformLocation(program, "uNormalMatrix");

    var projMatrix = glMatrix.mat4.create();
    var viewMatrix = glMatrix.mat4.create();
    var modelMatrix = glMatrix.mat4.create();
    var normalMatrix = glMatrix.mat3.create(); 

    glMatrix.mat4.perspective(projMatrix,
        glMatrix.glMatrix.toRadian(45),   
        canvas.width / canvas.height,      
        0.1,                              
        100.0                              
    );

    glMatrix.mat4.lookAt(viewMatrix,
        [0.0, 0.0, 8.0],   
        [0.0, 0.0, 0.0],   
        [0.0, 1.0, 0.0]    
    );

    var angle = 0;
    
    function render(){
        if (!freeze){
            angle += 0.01;
        }

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        gl.clearColor(0.0, 0.0, 0.0, 0.0); 
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.uniformMatrix4fv(Pmatrix, false, projMatrix);
        gl.uniformMatrix4fv(Vmatrix, false, viewMatrix);

        // Reset Model Matrix
        glMatrix.mat4.identity(modelMatrix);
        
        // Global Rotation
        glMatrix.mat4.rotate(modelMatrix, modelMatrix, angle, [0, 1, 0]); 
        glMatrix.mat4.rotate(modelMatrix, modelMatrix, angle * 0.3, [1, 0, 0]); 

        // Helper function untuk menggambar objek dan menghitung lighting matrix
        function drawObject(offset, count, translateX){
            var localModel = glMatrix.mat4.clone(modelMatrix);
            glMatrix.mat4.translate(localModel, localModel, [translateX, 0.0, 0.0]);
            
            gl.uniformMatrix4fv(Mmatrix, false, localModel);

            glMatrix.mat3.normalFromMat4(normalMatrix, localModel);
            gl.uniformMatrix3fv(Nmatrix, false, normalMatrix);

            gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_SHORT, offset); 
        }

        // --- Gambar Huruf H ---
        drawObject(0, 108, -2.5);

        // --- Gambar Huruf A ---
        drawObject(216, 108, 0.0);

        // --- Gambar Angka 8 ---
        drawObject(432, 252, 2.5);

        window.requestAnimationFrame(render);
    }
    render();
}
