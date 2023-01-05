export const posts = new Map();
let nextId = 0;
let deletedCount =0;

addPost({ 
    title: "Agua",
    description: "Botella de agua",
    category: "Bebida",
    ingredients: ['Hidrógeno','hidrógeno','oxígeno'],
    valoration: "5",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://www.pizzeriadolomiti.es/wp-content/uploads/2016/09/45.jpg",
});
addPost({ 
    title: "Arroz",
    description: "Plato de arroz a la cubana",
    category: "Plato principal",
    ingredients: ['Arroz', 'tomate', 'platano macho frito', 'huevo frito'],
    valoration: "4",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://i.blogs.es/6e72b1/arroz-a-la-cubana-portada/650_1200.jpg",
});
addPost({ 
    title: "Natillas",
    description: "Natillas de vainilla",
    category: "Postre",
    ingredients: ['Leche', 'azúcar', 'vainilla', 'canela en rama', 'ralladura de limón', 'yema de huevo'],
    valoration: "4",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://t2.rg.ltmcdn.com/es/posts/8/6/7/natillas_caseras_47768_orig.jpg",
});
addPost({ 
    title: "Spaghettis",
    description: "Spaghettis con tomate",
    category: "Plato Principal",
    ingredients: ['Espaguetis', 'tomate','orégano', 'albahaca'],
    valoration: "3",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://assets.unileversolutions.com/recipes-v2/236933.jpg",
});
addPost({ 
    title: "Tortilla",
    description: "Tortilla de patatas",
    category: "Plato Principal",
    ingredients: ['Patatas', 'Huevo','Cebolla', 'aceite'],
    valoration: "5",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.webp",
});
addPost({ 
    title: "Paella",
    description: "Paella española",
    category: "Plato Principal",
    ingredients: ['Arroz', 'Pollo','Marisco', 'Verduras'],
    valoration: "5",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://images.hola.com/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-t.jpg?tx=w_1200",
});

addPost({ 
    title: "Chuletas",
    description: "Chuletas de cordero ",
    category: "Plato Principal",
    ingredients: ['Chuletas de cordero', 'Patatas fritas','Lechuga', 'Tomate'],
    valoration: "4",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://media-cdn.tripadvisor.com/media/photo-s/08/11/09/b0/el-nilo.jpg",
});

addPost({ 
    title: "Cerveza",
    description: "Cerveza Mahou",
    category: "Bebida",
    ingredients: ['Cerveza'],
    valoration: "5",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://cdn.shopify.com/s/files/1/0271/8158/0388/products/mahou-5-estrellas-botella-33-cl-escerveza-3.jpg?v=1648893644/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-t.jpg?tx=w_1200",
});

addPost({ 
    title: "Flan",
    description: "Flan de huevo",
    category: "Postre",
    ingredients: ['Leche', 'Huevo','Azucar'],
    valoration: "3",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://lacocinademasito.com/wp-content/uploads/Flan-de-huevo-casero-4.jpg",
    
});

addPost({ 
    title: "Escalope",
    description: "Filete de pollo",
    category: "Plato Principal",
    ingredients: ['Filete de pollo', 'Patatas fritas', 'Huevo frito'],
    valoration: "4",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://i.pinimg.com/originals/dd/2d/ef/dd2defa858011eaa25966a15102d6f0d.jpg",
});

addPost({ 
    title: "Croquetas",
    description: "Croquetas variadas",
    category: "Plato Principal",
    ingredients: ['Leche', 'Jamon','Pan rallado', 'Bechamel'],
    valoration: "5",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://www.laespanolaaceites.com/wp-content/uploads/2019/06/croquetas-de-cordero-1080x671.jpg",
});

addPost({ 
    title: "Zumo",
    description: "Zumo de naranja",
    category: "Bebida",
    ingredients: ['Naranja'],
    valoration: "4",
    stars:`<div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div><div class="bi-star-fill"></div>`,
    link:"https://www.supereko.net/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/z/u/zumo_de_naranja_maquina.jpg",
});


export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
    }

export function deletePost(id){
    posts.delete(id);
    }
export function getPosts(from, to){
   let values = [...posts.values()];
   if (from != undefined){
        return values.slice(from, to);
   } else{
        return values;
   }
}

export function getPost(id){
    return posts.get(id);
    }
export function getPostNumber(){
    return nextId;
}
export function addDeletedCount(){
    deletedCount++;
}
export function getDeletedCount(){
    return deletedCount;
}

export function valorationForMustache(number){
    let array=[];
    let blank='';
    for (let i=1; i<=number; i++){
        array.push(blank);
    }
 return array;
}

console.log(getPostNumber()-getDeletedCount());