import express from 'express';
import { __dirname } from './dirname.js';
import * as services from './restaurantService.js';
// import * as scripts from './scripts.cjs';
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

router.get('/pruebas', (req, res) => {
    res.render('greeting', {
        name: req.query.userName
    });
});
*/
router.get('/', (req, res) => {
    res.render('header', {
       posts:services.getPosts(0,5),
       cssfile: "styles.css",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});
router.get('/new', (req, res) => {
    res.render('new', {
       cssfile: "styles.css",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});

router.get('/created', (req, res) => {

    console.log('trough')
    let category=req.query.categoria_producto;
    let name = req.query.nombre_producto;
    let description = req.query.descripcion_producto;
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
        valoration: services.valorationForMustache(parseInt(post.valoration)),
        // link: scripts.pictureLinkBig(post.link),
        link: post.link,
        cssfile: "styles.css",
        // jsfile: "scripts.cjs",
        productCounter:((services.getPostNumber()-services.getDeletedCount()))
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

router.get('/post/:id/modification', (req, res) => {
    let id =req.params.id;
    let post = services.getPost(id);
    console.log(post);
    res.render(`modification`,{
        // jsfile: "scripts.cjs",
        cssfile: "styles.css",
        post,
        ingredientsArray: post.ingredients.join('-'),
        productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});
router.get('/post/:id/modification/done', (req, res) => {
    let id = req.params.id;
    let post=services.getPost(id);
    post.category=req.query.categoria_producto;
    post.title = req.query.nombre_producto;
    post.description = req.query.descripcion_producto;
    post.ingredients = req.query.ingredientes_producto.split('-');
    post.valoration = req.query.valoracion_producto;
    let link = req.query.foto_producto
    if (link == '')
    link='https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
    post.link=link;
    console.log(post);
    res.redirect(`/post/${id}`);
});
router.get('/post/:postid/deleteIngredient/:ingredientid/deleted', (req,res) => {
    let id=req.params.postid;
    let ingredientid=req.params.ingredientid;
    //let confirmation =confirm("¿Esta seguro de que quiere borrar el ingrediente?");
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
    res.render('confirmationForIngredient', {
        ingredientToDelete:post.ingredients[ingredientid],
        id,
        ingredientid,
        post,
        // jsfile: "scripts.cjs",
        cssfile: "styles.css",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});
router.get('/post/:postid/deletePost', (req,res) => {
    let id=req.params.postid;
    let post=services.getPost(id);
    res.render('confirmationForItem', {
        post,
        // jsfile: "scripts.cjs",
       cssfile: "styles.css",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
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


router.get('/post/:id/deletePost/deleted', (req,res) => {
    let id = req.params.id;
    services.addDeletedCount();
    console.log(services.getDeletedCount());
services.deletePost(id);
    res.redirect(`/`);
});

router.get('/morepost', (req, res) => {

    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const products = services.getPosts(from,to);

    res.render('moreproducts', {
        posts: products
    });
});

export default router;