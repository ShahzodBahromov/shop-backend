import { read, write } from '../../lib/orm.js'

const categories = () => {
	let categoriespost = read('categories')
	let subCategoriespost = read('subCategories')
	let array = []
	let arr = []
	let obj = {}

	const test = categoriespost.forEach(elem => {
        
        let asd = subCategoriespost.filter(el => el.category_id === elem.category_id)
        
        let dfg
        for (const i of asd) {
            obj = {
                subCategoryId: i.sub_category_id,
                subCategoryName: i.sub_category_name,
            }
            arr.push(obj)
        }
        dfg = {
            categoryId: elem.category_id,
            categoryName: elem.category_name,
            subCategories: arr
        }	
        array.push(dfg)
    });
    return array
}

const categoriepost = (data) => {
	let posts = read('categories')
	let category_id = posts.length ? posts[posts.length - 1].category_id + 1 : 1
	let newCotgory = { category_id, category_name: data.categorieName }
	posts.push(newCotgory)
	write('categories', posts)
}

const subCategories = () => {
	let subCategoriespost = read('subCategories')
	let products = read('products')
	console.log(products);
	let array = []
	let arr = []
	let obj = {}

	const test = subCategoriespost.forEach(elem => {
        
        let asd = products.filter(el => el.sub_category_id === elem.sub_category_id)
        
        let dfg
        for (const i of asd) {
            obj = {
                productId: i.product_id,
                productName: i.product_name,
				model: i.model,
				price: i.price,
				color: i.color
            }
            arr.push(obj)
        }
        dfg = {
            categoryId: elem.sub_category_id,
            categoryName: elem.sub_category_name,
            products: arr
        }	
        array.push(dfg)
    });
    return array
}

const subcategoriepost = (data) => {
	let posts = read('subCategories')
	let sub_category_id = posts.length ? posts[posts.length - 1].sub_category_id + 1 : 1
	let newCotgory = { sub_category_id, category_id: data.categorieId, sub_category_name: data.subcategorieName }
	posts.push(newCotgory)
	write('subCategories', posts)
}

const  products = () => {
	let categoriespost = read('categories')
	let subcatName = []
    for (let i in categoriespost) {
        for (let x in categoriespost[i].products) {

            subcatName.push({
                subCategoryId: categor[i].subCategoryId,
                productName: categor[i].products[x].productName,
                model: categor[i].products[x].model,
                price: categor[i].products[x].price,
                color: categor[i].products[x].color,
            })
        }
    }

    return subcatName
}

const productQuery = ( data ) => {
    let posts = read('products')

    let storage = []
        for (let i in posts) {
            let counter = 0
            let length = 0
            for (let j in data) {
                if (data[j] === posts[i][j]) {
                    counter++
                }
                length += 1
            }
            if (counter === length) {   
                storage.push(posts[i]);
            }
        }
        return storage
}


export default {
	categories,
	categoriepost,
	subCategories,
	subcategoriepost,
	products,
	productQuery
}
