import express, { json } from 'express';
import fs from 'fs';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: phaseMeter
 *   description: The phaseMeter managing API
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     phaseMeter:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:  
 *         Phase_mode:
 *           type: Number
 *           description: The Phase Mode
 *       example:
 *         Phase_mode : 95
 */
 

/**
 * @swagger
 * /phaseMeter:
 *   get:
 *     summary: Returns the list of all the channel information
 *     tags: [PhaseMeter]
 *     responses:
 *       200:
 *         description: The list of the channel info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/phaseMeter'
 */


router.get('/', (req, res)=>{
    fs.readFile('./Phase.json', (err, result)=>{   
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result))
        }
    })
    //res.send(products);
});


export default router;