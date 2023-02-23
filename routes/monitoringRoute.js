import express, { json } from 'express';
import fs from 'fs';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Monitoring
 *   description: The Monitoring managing API
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Monitoring:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:  
 *         Loudspeaker_vol:
 *           type: Number
 *           description: The Loudspeaker Volume monitoring
 *         Dim_Cut:
 *           type: Number
 *           description: The Cut Dim monitoring {0, 1, 2}
 *       example:
 *         Loudspeaker_vol : 95
 *         Dim_Cut : 0
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
    fs.readFile('./Monitoring.json', (err, result)=>{   
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result))
        }
    })
    //res.send(products);
});


export default router;