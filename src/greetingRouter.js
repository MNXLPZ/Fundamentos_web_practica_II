import express from 'express';
import { __dirname } from './dirname.js';
import * as services from './restaurantService.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.render('header', {
       posts:services.getPosts(0,5),
       cssfile: "styles.css",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});

router.get('/created', (req, res) => {

    console.log('trough')
    let category=req.query.product_category;
    let name = req.query.product_title;
    let description = req.query.product_description;
    let ingredients = req.query.product_ingredients;
    let valoration = req.query.product_valoration;
    let link = req.query.product_image;
    if (link == '')
        link='https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
    console.log(valoration,+'  '+link);

    let stars='';
    for (let i=1; i<=parseInt(valoration); i++) {
        stars +='<div class="bi-star-fill"></div>'; 
    }

    services.addPost({title:name, description:description, category:category, ingredients:ingredients.split('-'), valoration:valoration, stars:stars, link:link});

    res.redirect('/'); 
});

router.get('/post/:id', (req, res) => {
    let id =req.params.id;
    let post = services.getPost(id); 

    res.render('show_post', {
        id,
        post,
        link: post.link,
        cssfile: "styles.css",
        // jsfile: "scripts.cjs",
        productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});

router.get('/post/:id/modification', (req, res) => {
    let id =req.params.id;
    let post = services.getPost(id);
    console.log(post);
    res.render(`new_modification`,{
        // jsfile: "scripts.cjs",
        actionForm1:"/post/",
        actionForm2:"/modification/done",
        message:"Confirmar modificación",
        backLink:"/post/",
        cssfile: "styles.css",
        post,
        ingredientsArray: post.ingredients.join('-'),
        productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});
router.get('/new', (req, res) => {
    res.render('new_modification', {
       cssfile: "styles.css",
       actionForm1:"/created",
       message:"Crear Item",
       backLink:"/",
       productCounter:((services.getPostNumber()-services.getDeletedCount()))
    });
});
router.get('/post/:id/modification/done', (req, res) => {
    let id = req.params.id;
    let post=services.getPost(id);
    console.log(req.query.categoria_producto);
    post.category=req.query.product_category;
    post.title = req.query.product_title;
    post.description = req.query.product_description;
    post.ingredients = req.query.product_ingredients.split('-');
    post.valoration = req.query.product_valoration;
    let link = req.query.product_image;
    if (link == '')
    link='https://dummyimage.com/450x300/dee2e6/6c757d.jpg';
    let stars='';
    for (let i=1; i<=parseInt(post.valoration); i++) {
        stars +='<div class="bi-star-fill"></div>'; 
    }
    post.stars=stars;
    post.link=link;
    console.log(post);
    res.redirect(`/post/${id}`);
});
router.get('/post/:postid/deleteIngredient/:ingredientid/deleted', (req,res) => {
    let id=req.params.postid;
    let ingredientid=req.params.ingredientid;
            let post = services.getPost(id);
            console.log(post);
            post.ingredients.splice(ingredientid,1);
        res.redirect(`/post/${id}`);
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