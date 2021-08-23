import  model  from './model.js'

const categoriesController = (req, res) => {
	try {
		res.status(200).json( model.categories() )
	} catch (error) {
		console.log(error)
	}
}

const categoriesPostController = (req, res) => {
	try {
		res.status(200).json( model.categoriepost(req.body) )
	} catch (error) {
		console.log(error)
	}
}

const subcategoriesController = (req, res) => {
	try {
		res.status(200).json( model.subCategories() )
	} catch (error) {
		console.log(error)
	}
}

const subcategoriePostController = (req, res) => {
	try {
		res.status(200).json( model.subcategoriepost(req.body) )
	} catch (error) {
		console.log(error)
	}
}

const productsController = (req, res) => {
	try {
		res.status(200).json( model.products() )
	} catch (error) {
		console.log(error)
	}
}

const productsQuery = (req, res) => {
	try {
		res.status(200).json( model.productQuery(req.query) )
	} catch (error) {
		console.log(error)
	}
}




export {
	categoriesController,
	categoriesPostController,
	subcategoriesController, 
	subcategoriePostController,
	productsController, 
	productsQuery,
}