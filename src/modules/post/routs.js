import express from 'express'
const router = express.Router()

import { categoriesController } from './controller.js'
import { categoriesPostController } from './controller.js'
import { subcategoriesController } from './controller.js'
import { subcategoriePostController } from './controller.js'
import { productsController } from './controller.js'
import { productsQuery } from './controller.js'

router.route('/categories')
	.get( categoriesController )
	.post( categoriesPostController )

router.route('/subcategories')
	.get( subcategoriesController )
	.post( subcategoriePostController )

router.route('/products')
	.get( productsController )
	.post( productsQuery )



export default router