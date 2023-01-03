
function nuevoProducto(titulo, descripcion,  categoria, ingredientes, valoracion, enlace) {

    let producto = {

        titulo: titulo,
        descripcion: descripcion,
        categoria: categoria,
        ingredientes: ingredientes,
        valoracion: valoracion,
        enlace:enlace,


        toString: function(){
            return 'titulo:'+this.titulo+' descripcion:'+this.descripcion+' categoria:'+this.categoria+' valoracion:'+this.valoracion+' enlace:'+ this.enlace;
        }
    }

    return producto;
}


let productos = [ 
    nuevoProducto('Agua', 'Botella de agua', 'Bebida', ['Hidrógeno','hidrógeno','oxígeno'], '5', 'https://www.pizzeriadolomiti.es/wp-content/uploads/2016/09/45.jpg'), 
    nuevoProducto('Arroz', 'Plato de arroz a la cubana', 'Plato principal',['Arroz', 'tomate', 'platano macho frito', 'huevo frito'], '4','https://i.blogs.es/6e72b1/arroz-a-la-cubana-portada/650_1200.jpg'),
    nuevoProducto('Natillas', 'Natillas de vainilla', 'Postre', ['Leche', 'azúcar', 'vainilla', 'canela en rama', 'ralladura de limón', 'yema de huevo'], '4', 'https://t2.rg.ltmcdn.com/es/posts/8/6/7/natillas_caseras_47768_orig.jpg'),
    nuevoProducto('Spaghettis', 'Spaghettis con tomate', 'Plato Principal',['Espaguetis', 'tomate','orégano', 'albahaca'], '3', 'https://assets.unileversolutions.com/recipes-v2/236933.jpg' ),
];
   
 
 
 
/*
function mostrarProducto(indice){
   let content = document.getElementById('principal');
 //   let producto = productos [id]


 content.innerHTML= ` 
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-item_menu-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" sty src="${pictureLinkBig(productos[indice].enlace)}"   alt="..." /></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">`+productos[indice].titulo+`</h1>
                        <div class="fs-5 mb-5">
                            <p>`+productos[indice].descripcion+`</p>
                        <p style="text-aling:left;">${valProducto(productos[indice].valoracion)}</p> 
                        ${pintarIngredientes(indice)}
                        <input type="text" name="new_ingredient" class="form-control" size="25" id="new_ingredient" placeholder="Ingresa el tipo de producto a añadir"><br>
                        <button type="button" class="btn btn-outline-dark mt-auto"value="addIngredient" onclick=addIngredient(`+indice+`)>Añadir elemento</button>
                        </div>
                         <div class="d-flex">
                            <button class="btn btn-outline-dark flex-shrink-0 me-3" onclick ="modificarProducto(${indice})"type="button">
                                Modificar
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0 me-3" type="button" onclick="borrarProducto(`+indice+`)">
                                Borrar
                            </button>
                            <button class="btn btn-outline-dark flex-shrink-0 me-3" type="button" onclick="volver()">
                                Volver
                        </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    `
    
}


function pintarIngredientes(post){
    let Ingredients_rendered = '';

    for (let i = 0; i < post.ingredients.length; i++) {
        Ingredients_rendered += ` <p class="lead">`+post.ingredients[i] +`
        <button class="btn btn-outline-dark flex-shrink-0 me-3" type="button" onclick="borrarIngrediente(`+i+`,`+post+`)">
                                Borrar ingrediente
                            </button></p>`;
    }
    return Ingredients_rendered;

}


function borrarIngrediente(posicion, indice){
    if (confirm("¿Esta seguro de que quiere borrar el ingrediente?"))
    {
        productos[indice].ingredientes.splice(posicion,1);
        mostrarProducto(indice);
    } 
}

function mostrarTodos(){
    let content = document.getElementById('item_menu');
    let indice=0;
    let stars='';
    if (productos.length !== 0) { 
        console.log(content.innerHTML);
    for (let producto of productos) {
        content.innerHTML += `
            <div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src="${pictureLinkSmall(producto.enlace)}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder"><span>`+producto.titulo+`</span></h5>
                        <b>${producto.categoria}</b> <br>
                        ${producto.descripcion}
                        <div class="pru">
                        ${valProducto(producto.valoracion)}
                        </div>
                        
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="mostrarProducto(`+indice+`)" href="#">Mas info</a></div>
                </div>
            </div>
        </div> `;
    indice=indice+1;
    }
    }
    else 
        content.innerHTML = `<b style="color:red;">NO HAY ELEMENTOS<b>`;
    numProductos(productos);
}

function crearElemento(num,indice) {
    let content = document.getElementById('principal');
if (num==1) {
    content.innerHTML= `        <div class=" quest">
    <form id="product_form" action="" role="form" onsubmit=elemModif(${indice})>
    <div id="quiz">
        <div class="form-group">
            <label for="tipo_producto" name="tipo_producto">Categoría de producto:</label>
            <input type="text" name="categoria_producto" class="form-control" size="25" id="product_category" placeholder="Ingresa el tipo de producto a añadir" required>
        </div>
        <div class="form-group">
            <label for="nombre_producto" name="nombre_producto">Nombre:</label>
            <input type="text" name="nombre_producto" class="form-control" id="product_name" placeholder="Ingresa el nombre del producto" required>
        </div>
        <div class="form-group">
            <label for="descripción_producto" name="descripción_producto">Descripción del producto:</label>
            <input type="text" name="descripción_producto" class="form-control" id="product_description" placeholder="Ingresa la descripción" required>
        </div> 
        <div class="form-group">
            <label for="ingredientes_producto" name="ingredientes_producto">Ingredientes del producto:</label>
            <input type="text" name="ingredientes_producto" class="form-control" id="product_ingredients" placeholder="Ingresa los ingredientes separados por un guión (-)" required>
        </div>
        <div class="form-group">
        <label for="foto_producto" name="foto_producto">Link de foto del producto <span style="color:lightgrey">(Opcional)</span></label>
        <input type="text" name="foto_producto" class="form-control" id="product_link" placeholder="Ingresa el enlace">
        </div>
    </div>
        <br>
        <div class="form-group">
        <label for="valoracion_producto">Valoración de producto</label>
        <select name="valoracion_producto" id="product_valoration">
            <option value="1">1 estrella</option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
        </select>
        </div>
        <br>
        <div class="text-center">
        <input type="submit" class="btn btn-outline-dark mt-auto"value="Confirmar modificación">
        <button type="button" class="btn btn-outline-dark mt-auto"value="cancelar" onclick=volver()>Cancelar</button>
        </div>
    </form>   
</div><br>`  
} else{
    content.innerHTML= `        <div class=" quest">
    <form id="product_form" action="" role="form" onsubmit=guardarProducto()>
    <div id="quiz">
        <div class="form-group">
            <label for="tipo_producto" name="tipo_producto">Categoría de producto:</label>
            <input type="text" name="categoria_producto" class="form-control" size="25" id="product_category" placeholder="Ingresa el tipo de producto a añadir" required>
        </div>
        <div class="form-group">
            <label for="nombre_producto" name="nombre_producto">Nombre:</label>
            <input type="text" name="nombre_producto" class="form-control" id="product_name" placeholder="Ingresa el nombre del producto" required>
        </div>
        <div class="form-group">
            <label for="descripción_producto" name="descripción_producto">Descripción del producto:</label>
            <input type="text" name="descripción_producto" class="form-control" id="product_description" placeholder="Ingresa la descripción" required>
        </div> 
        <div class="form-group">
            <label for="ingredientes_producto" name="ingredientes_producto">Ingredientes del producto:</label>
            <input type="text" name="ingredientes_producto" class="form-control" id="product_ingredients" placeholder="Ingresa los ingredientes separados por un guión (-)" required>
        </div>
        <div class="form-group">
        <label for="foto_producto" name="foto_producto">Link de foto del producto <span style="color:lightgrey">(Opcional)</span></label>
        <input type="text" name="foto_producto" class="form-control" id="product_link" placeholder="Ingresa el enlace">
        </div>
    </div>
        <br>
        <div class="form-group">
        <label for="valoracion_producto">Valoración de producto</label>
        <select name="valoracion_producto" id="product_valoration">
            <option value="1">1 estrella</option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
        </select>
        </div>
        <br>
        <div class="text-center">
        <input type="submit" class="btn btn-outline-dark mt-auto"value="añadir producto">
        <button type="button" class="btn btn-outline-dark mt-auto"value="cancelar" onclick=volver()>Cancelar</button>
        </div>
    </form>   
</div><br>`;
}
}
*/
function borrarProducto(indice){
    if (confirm("¿Esta seguro de que quiere borrar el elemento?"))
    {
        productos.splice(indice,1);
        volver();
    }   

}
/*
function volver(){
    let content = document.getElementById('principal');
    content.innerHTML= ` 
    <section class="py-5 bg-light">
                <div class="container px-4 px-lg-5 mt-5">
                    <h2 class="fw-bolder mb-4">Productos</h2>
                    <div class="row text-center mb-10">
                        <div class="col-mb-12 ">&nbsp;</div>
                    </div>
                    <div id="item_menu" class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    </div>
                </div>
            </section>`;
    mostrarTodos();
}
*/
function guardarProducto(){
    // leer los campos del formulario
    let name = document.getElementById('product_name').value;
    let category = document.getElementById('product_category').value;
    let description = document.getElementById('product_description').value;
    let ingredients = document.getElementById('product_ingredients').value;
    let valoration = document.getElementById('product_valoration').value;
    let image = document.getElementById('product_link').value;
    // nuevoProducto
    let nuevo = nuevoProducto(name,description,category,ingredients.split('-'),valoration,image);
    // add a Productos
    productos.push(nuevo);
    volver();
}
function modificarProducto(indice){
    let name = productos[indice].titulo;
    let category = productos[indice].categoria;
    let description = productos[indice].descripcion;
    let ingredients = productos[indice].ingredientes.join('-');
    let valoration = productos[indice].valoracion;
    let image = productos[indice].enlace;

    
    
    //delete productos[indice];
    crearElemento(1,indice);
    document.getElementById('product_category').value=category;
    document.getElementById('product_name').value=name;
    document.getElementById('product_description').value=description;
    document.getElementById('product_ingredients').value=ingredients;
    document.getElementById('product_valoration').value=valoration;
    document.getElementById('product_link').value=image;

    
}
function numProductos(productos) {
    let product_counter= document.getElementById('product_counter')
    product_counter.innerHTML=productos.length;
}
function valProducto(number) {
    switch (number) {
        case '1':{
          stars= '<div class="d-flex justify-content-left small text-warning mb-2"><div class="bi-star-fill"></div></div>';
          break
         }
         case '2':{
          stars= '<div class="d-flex justify-content-left small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>';
          break
         }
         case '3':{
          stars= '<div class="d-flex justify-content-left small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>';
          break
         }
         case '4':{
          stars= '<div class="d-flex justify-content-left small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>';
          break
         }
         case '5':{ 
          stars= '<div class="d-flex justify-content-left small text-warning mb-2"><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div></div>';
          break
         }
     }
     return stars;
}

function pictureLinkSmall(link){
    if (link == '')
    link= 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
        return link;
}
function pictureLinkBig(link){
    if (link== 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg')
    link= 'https://dummyimage.com/600x700/dee2e6/6c757d.jpg';
    
        return link;
}
function elemModif(indice){
    productos[indice].categoria=document.getElementById('product_category').value;
    productos[indice].titulo=document.getElementById('product_name').value;
    productos[indice].descripcion=document.getElementById('product_description').value;
    productos[indice].ingredientes=document.getElementById('product_ingredients').value;
    productos[indice].valoracion=document.getElementById('product_valoration').value;
    productos[indice].enlace=document.getElementById('product_link').value;
    volver();
}
function addIngredient(indice){
    let quiz = document.getElementById('new_ingredient').value;
    productos[indice].ingredientes.push(quiz);
    mostrarProducto(indice);
}
function valorationForMustache(number){
    array=[];
    blank='';
    for (let i=1; i<=number; i++){
        array.push(blank);
    }
 return array;
}
//let exports ={};
//exports.nuevoProducto=nuevoProducto;
//exports.productos=productos;
//exports.mostrarProducto=mostrarProducto;
//exports.pintarIngredientes=pintarIngredientes;
//exports.borrarIngrediente=borrarIngrediente;
//exports.mostrarTodos=mostrarTodos;
//exports.crearElemento=crearElemento;
exports.borrarProducto=borrarProducto;
//exports.volver=volver;
exports.guardarProducto=guardarProducto;
exports.modificarProducto=modificarProducto;
exports.numProductos=numProductos;
exports.valProducto=valProducto;
exports.pictureLinkSmall=pictureLinkSmall;
exports.pictureLinkBig=pictureLinkBig;
exports.elemModif=elemModif;
exports.addIngredient=addIngredient;
exports.valorationForMustache=valorationForMustache;

//mostrarTodos();

//item_menu
