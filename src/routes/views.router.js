import { Router } from "express";
import { prodManager,msjManager } from "../utils.js";


const router =Router()
const prod =prodManager()
const msj =msjManager()

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/allproducts', async (req, res) => {
    let allprod = await prod.getProducts()
    res.render('home',{allprod});
});

router.get('/createProd', (req,res)=>{
    res.render('createProd')
})

router.get('/realTimeProducts', (req,res)=>{

    res.render('realTimeProducts')
})
router.get('/serchProd', (req,res)=>{

    res.render('serchProd')
})
router.get("/mesage",async (req,res)=>{
    const mesage =await msj.readMesage()
    /* await msj.deleteMesage() */
    res.render("mesage",{mesage})
})


export default router;