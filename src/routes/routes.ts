import { Router } from "express";
import {Request, Response } from "express"
import {products} from '././../models/products';
const router = Router();
import ProductosDaosMongo from './../daos/productos/ProductosDaosMongo';
import CarritoDaosMongo from './../daos/carritos/CarritoDaosMongo';
const CartMongo = new CarritoDaosMongo('mongodb://localhost:27017/ecommerce');
const ProductsMongo = new ProductosDaosMongo('mongodb://localhost:27017/ecommerce');



//PRODUCTOS MONGO

router.get("/getAllMongo", async  (req:Request,res:Response)=>{
    try {
       
       let prods =  await  ProductsMongo.getProducts()
       console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});

router.get("/createMongo", async  (req:Request,res:Response)=>{

    const newProd = {
        name: 'Producto 1',
        description: 'Descripcion 1',
        price: 100,
        code: 'codigo de prueba',
        image: 'imagen de prueba'
    }
        
    try {
       
       let prods =  await ProductsMongo.createProduct(newProd)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});


router.get("/getId/:id", async  (req:Request,res:Response)=>{

   
        
    try {
       
        let prods =  await  ProductsMongo.getProduct(req.params.id);
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});

router.get("/updateMongo/:id", async  (req:Request,res:Response)=>{

    const newProd = {
        name: 'Producto editado',
        description: 'Descripcion editada',
        price: 322,
        code: 'codigo de prueba',
        image: 'imagen de prueba'
    }
        
    try {
       
       let prods =  await ProductsMongo.updateProduct(req.params.id,newProd)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});

router.get("/deleteMongo/:id", async  (req:Request,res:Response)=>{
        
    try {
        let prods =  await  ProductsMongo.deleteProduct(req.params.id);
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});


//CARRITO MONGO 


router.get("/carritoMongoCreate/", async  (req:Request,res:Response)=>{
        
    try {

        
        let prods =  await  CartMongo.createCart();
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});

router.get("/CarritoAddProductToCartMongo/:id", async  (req:Request,res:Response)=>{
        
    try {
        const newProd = {
            name: 'Producto 1',
            description: 'Descripcion 1',
            price: 100,
            code: 'codigo de prueba',
            image: 'imagen de prueba'
        }
        
        let prods =  await  CartMongo.addProductToCart(req.params.id,'626719320ddcfa21ace47d09')
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});



router.get("/getCartMongo/:id", async  (req:Request,res:Response)=>{
        
    try {
       
        
        let prods =  await  CartMongo.getCart(req.params.id)
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
});


router.get("/updateProductInCart/:id", async  (req:Request,res:Response)=>{
        
    try {
        
        
        let prods =  await  CartMongo.updateProductOfCart(req.params.id,'626719320ddcfa21ace47d09')
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
}); 


router.get("/deleteCartMongo/:id", async  (req:Request,res:Response)=>{
        
    try {
        
        
        let prods =  await  CartMongo.deleteCart(req.params.id)
        console.log(prods)
        res.send(prods);
    } catch (error) {
        console.log(error)
        res.send('error')
    }
    
}); 
export default router;
