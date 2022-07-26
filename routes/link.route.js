import { Router } from "express";
import { 
    createlink, 
    getLink, 
    getLinks, 
    removeLink,
    updateLink } from "../controllers/link.controller.js";
import { requireToken } from "../middlewares/requireToken.js";
import { bodyLinkValidator, 
    paramLinkValidator } from "../middlewares/validatorManager.js";
const router = Router();

//GET                     /api/v1/links         all lines
//GET                     /api/v1/links/:id     single line
//POST                    /api/v1/links         create line
//PATCH/PUT               /api/v1/links         update line
//DELETE                  /api/v1/links         remove line

router.get('/',requireToken, getLinks)
router.get('/:nanoLink', getLink)
router.post('/',requireToken,bodyLinkValidator, createlink)
router.delete('/:id',requireToken,paramLinkValidator, removeLink)
router.patch('/:id',requireToken,paramLinkValidator, bodyLinkValidator,updateLink)
export default router;