import express, { json } from 'express';
import fs from 'fs';
const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Status:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:  
 *         Model:
 *           type: string
 *           description: The box_name
 *         Input_Mode_1:
 *           type: string
 *           description: The input1_mode
 *         Input_Mode_2:
 *           type: string
 *           description: The input2_mode
 *         Unit_Temperature:
 *           type: string
 *           description: The FPGA
 *         IP_Address: 
 *           type: string
 *           description: The ip_address_control
 *         Software_Version:
 *           type: string
 *           description: The 
 *         Hardware_Version:
 *           type: string
 *           description: The 
 *         Licences:
 *           type: string
 *           description: The 
 *         Device_MAC_Address:
 *           type: string
 *           description: The 
 *         UnitName:
 *           type: string
 *           description: The 
 *         Serial_Number:
 *            type: string#
 *            description: The 
 *       example:
 *         Model: SAMQ-NG1
 *         Input_Mode_1: INPUT_MODE_SDI
 *         Input_Mode_2: INPUT_MODE_SDI
 *         Unit_Temperature: 42
 *         IP_Address: 192.168.39.3
 *         Software_Version: v4.0.7.1
 *         Hardware_Version: v1.0.4
 *         Licences: 007
 *         Device_MAC_Address: 2C:54:91:88:C9:E3
 *         UnitName: Bob
 *         Serial_Number: 000001
 */

/**
  * @swagger
  * tags:
  *   name: Status
  *   description: The status managing API
  */

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Returns the list of all the box information
 *     tags: [Status]
 *     responses:
 *       200:
 *         description: The list of the box info
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Status'
 */


router.get('/', (req, res)=>{
    fs.readFile('./status.json', (err, result)=>{
        const jsonObj = JSON.parse(result)[0];
        const statusObj = [{
            "Model": jsonObj["box_name"],
            "Software_Version": "v4.0.7.1",
            "Hardware_Version": "v1.0.4",
            "Licences": "007",
            "Device_MAC_Address": "2C:54:91:88:C9:E3",
            "UnitName": "Bob",
            "Input_Mode_1": jsonObj["input1_mode"],
            "Input_Mode_2": jsonObj["input2_mode"],
            "Unit_Temperature": jsonObj["FPGA"],
            "IP_Address": jsonObj["ip_address_control"],            
            "Serial_Number": "000001"           
        }];

        if(err){
            throw err;
        }else{
            res.send(statusObj)
        }
    })
    //res.send(products);
});


export default router;