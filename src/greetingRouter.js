import express from 'express';
import { __dirname } from './dirname.js';
import * as services from './app.js';
import * as scripts from './scripts.cjs';
const router = express.Router();




/*
router.get('/', (req, res) => {
    res.render('header', { 
    //cssfile: __dirname+"/../public/styles.css",
    //jsfile: __dirname+"/../src/scripts.js"
    cssfile: "styles.css",
    jsfile: "scripts.js"
    });
});
*/
router.get('/pruebas', (req, res) => {
    res.render('greeting', {
        name: req.query.userName
    });
});

router.get('/', (req, res) => {
    res.render('header', {
       posts:services.getPosts(),
       cssfile: "styles.css",
       productCounter:services.getPostNumber()
    });
});
router.get('/new', (req, res) => {
    res.render('new', {
       cssfile: "styles.css",
       productCounter:services.getPostNumber()
    });
});

router.get('/created', (req, res) => {

    console.log('trough')
    let category=req.query.categoria_producto;
    let name = req.query.nombre_producto;
    let description = req.query.descricpión_producto;
    let ingredients = req.query.ingredientes_producto;
    let valoration = req.query.valoracion_producto;
    let link = req.query.foto_producto
    if (link == '')
        link='https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
    console.log(valoration,+'  '+link);

    services.addPost({title:name, description:description, category:category, ingredients:ingredients.split('-'), valoration:valoration, link:link});

    res.redirect('/'); //redirección a /viewer para evitar copias de elemento al recargar la página
});

router.get('/post/:id', (req, res) => {
    let id =req.params.id;
    let post = services.getPost(id); 

    res.render('show_post', {
        id,
        post,
       // ingredients: scripts.pintarIngredientes(post),
        valoration: scripts.valorationForMustache(parseInt(post.valoration)),
        link: scripts.pictureLinkBig(post.link),
        cssfile: "styles.css",
        jsfile: "scripts.cjs",
        productCounter:services.getPostNumber()
    });
});
/*
router.get('/post/:id/modif', (req, res) => {  //esta se sitúa en /post/:id/modif
    let id =req.params.id;
    let post = services.getPost(id);
    console.log(post);
    post.user='Prueba modificacion';
    res.render('show_post', {
        id,
        post,
        cssfile: "styles.css"
    });
}); */

router.get('/post/:id/modif', (req, res) => { //esta se sitúa en el mismo link en el que estaba (ambas funcionan y hacen lo mismo)
    let id =req.params.id;
    let post = services.getPost(id);
    console.log(post);
    post.title='Prueba modificacion';
    res.redirect(`/post/${id}`);
});

router.get('/post/:postid/deleteIngredient/:ingredientid/deleted', (req,res) => {
    let id=req.params.postid;
    let ingredientid=req.params.ingredientid;
    //let confirmation =confirm("¿Esta seguro de que quiere borrar el ingrediente?");

    console.log('trough');

            let post = services.getPost(id);
            console.log(post);
            post.ingredients.splice(ingredientid,1);
        res.redirect(`/post/${id}`);
        
        


/*    if (confirmation=true) {
    let post = services.getPost(id);
        console.log(post);
        post.ingredients.splice(ingredientid,1);
    res.redirect(`/post/${id}`);
        
    }
   */ 
});

router.get('/post/:postid/deleteIngredient/:ingredientid', (req,res) => {
    let id=req.params.postid;
    let ingredientid=req.params.ingredientid;
    let post=services.getPost(id);
    res.render('confirmation', {
        ingredientToDelete:post.ingredients[ingredientid],
        id,
        ingredientid,
        post,
        jsfile: "scripts.cjs",
       cssfile: "styles.css",
       productCounter:services.getPostNumber()
    });
});

router.get('/post/:id/addIngredient', (req,res) => {
    let id = req.params.id;
    let post=services.getPost(id);
    let newIngredient=req.query.newIngredient;
    console.log(newIngredient);
    post.ingredients.push(newIngredient);
    res.redirect(`/post/${id}`);
}); 
export default router;