import express from 'express';
import mustacheExpress from 'mustache-express';
import bodyParser from 'body-parser';
import { __dirname } from './dirname.js';
import greetingRouter from './greetingRouter.js';

const app = express();
console.log('la ruta es  '+__dirname);
app.set('views', __dirname + '/../views'); //configuraciones .settings para variables (<-- views.)
app.set('view engine', 'mustache'); //motor de plantilla
app.engine('mustache', mustacheExpress());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname)); //dirname devuelve la ruta de la carpeta en la que estamos (src), la función devuelve la ruta de public
console.log('la ruta express static es  '+__dirname);

app.use('/', greetingRouter);

export const posts = new Map();
let nextId = 0;
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
export function addPost(post) {
    let id = nextId++;
    post.id = id.toString();
    posts.set(post.id, post);
    }
export function deletePost(id){
    posts.delete(id);
    }
export function getPosts(){
    return [...posts.values()];
    }
export function getPost(id){
    return posts.get(id);
    }
export function getPostNumber(){
    return nextId;
}

app.listen(3000, () => console.log('Listening on port 3000!'));