import express from 'express';
import { __dirname } from './dirname.js';
import * as services from './app.js';
import * as scripts from './scripts.cjs';
const router = express.Router();





router.get('/', (req, res) => {
    res.render('head', { 
    //cssfile: __dirname+"/../public/styles.css",
    //jsfile: __dirname+"/../src/scripts.js"
    cssfile: "styles.css",
    jsfile: "scripts.js"
    });
});
router.get('/pruebas', (req, res) => {
    res.render('greeting', {
        name: req.query.userName
    });
});

router.get('/viewer', (req, res) => {
    res.render('viewer', {
    id:services.getPosts().id,
       posts:services.getPosts(),
       cssfile: "styles.css"
    });
});
router.get('/new', (req, res) => {
    res.render('new', {
       cssfile: "styles.css"
    });
});

router.get('/created', (req, res) => {

    console.log('trough')
    let category=req.query.categoria_producto;
    let name = req.query.nombre_producto;
    let description = req.query.descricpión_producto;
    let ingredients = req.query.ingredientes_producto;
    let valoration = req.query.valoración_producto;
    let link = req.query.foto_producto
    console.log(category + name+ description);

    services.addPost({title:name, description:description, category:category, ingredients:ingredients, valoration:valoration, link:link});

    res.redirect('/viewer'); //redirección a /viewer para evitar copias de elemento al recargar la página
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
        jsfile: "scripts.cjs"
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
       cssfile: "styles.css"
    });
});
export default router;