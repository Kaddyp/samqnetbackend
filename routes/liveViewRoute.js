import express, { json } from 'express';
import fs from 'fs';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: LiveView
 *   description: The liveView managing API
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     LiveView:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:  
 *         mode_selection:
 *           type: boolean
 *           description: The Mode Selecting
 *         mix_selection:
 *           type: boolean
 *           description: The Mix Selecting
 *         source_label:
 *           type: string
 *           description: The Label
 *         gain:
 *           type: Number
 *           description: The Gain
 *         balance:
 *           type: Number
 *           description: The Balance
 *         source_select:
 *           type: Number
 *           description: The Source Select
 *         meter:
 *           type: String
 *           description: The Meter
 *       example:
 *         mode_selection : 0
 *         mix_selection : 0  
 *         source_label : Label 0
 *         gain : 100
 *         balance : 2
 *         source_select : 1
 *         meter: 20 30
 */
 

/**
 * @swagger
 * /liveView:
 *   get:
 *     summary: Returns the list of all the channel information
 *     tags: [LiveView]
 *     responses:
 *       200:
 *         description: The list of the channel info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LiveView'
 */


router.get('/', (req, res)=>{
    fs.readFile('./liveView.json', (err, result)=>{   
        if(err){
            throw err;
        }else{
            res.send(JSON.parse(result))
        }
    })
    //res.send(products);
});


export default router;