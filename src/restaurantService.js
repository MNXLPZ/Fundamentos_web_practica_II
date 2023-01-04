export const posts = new Map();
let nextId = 0;
let deletedCount =0;

addPost({ 
    title: "Agua",
    description: "Botella de agua",
    category: "Bebida",
    ingredients: ['Hidrógeno','hidrógeno','oxígeno'],
    valoration: "5",
    link:"https://www.pizzeriadolomiti.es/wp-content/uploads/2016/09/45.jpg",
});
addPost({ 
    title: "Arroz",
    description: "Plato de arroz a la cubana",
    category: "Plato principal",
    ingredients: ['Arroz', 'tomate', 'platano macho frito', 'huevo frito'],
    valoration: "4",
    link:"https://i.blogs.es/6e72b1/arroz-a-la-cubana-portada/650_1200.jpg",
});
addPost({ 
    title: "Natillas",
    description: "Natillas de vainilla",
    category: "Postre",
    ingredients: ['Leche', 'azúcar', 'vainilla', 'canela en rama', 'ralladura de limón', 'yema de huevo'],
    valoration: "4",
    link:"https://t2.rg.ltmcdn.com/es/posts/8/6/7/natillas_caseras_47768_orig.jpg",
});
addPost({ 
    title: "Spaghettis",
    description: "Spaghettis con tomate",
    category: "Plato Principal",
    ingredients: ['Espaguetis', 'tomate','orégano', 'albahaca'],
    valoration: "3",
    link:"https://assets.unileversolutions.com/recipes-v2/236933.jpg",
});
addPost({ 
    title: "Tortilla",
    description: "Tortilla de patatas",
    category: "Plato Principal",
    ingredients: ['Patatas', 'Huevo','Cebolla', 'aceite'],
    valoration: "5",
    link:"https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.webp",
});
addPost({ 
    title: "Paella",
    description: "Paella española",
    category: "Plato Principal",
    ingredients: ['Arroz', 'Pollo','Marisco', 'Verduras'],
    valoration: "5",
    link:"https://images.hola.com/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-t.jpg?tx=w_1200",
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