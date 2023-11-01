class ProductManager {
    
    constructor(){
        this.contador = 0;
        this.products = [];  
    }
    addProduct(product){
       if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code ||  !product.stock){
        console.error(`Debe ingresar todos los campos`);
        return;
       }
       if (this.products.some((accProduct) => accProduct.code === product.code)) {
        console.error(`Debe ingresar un codigo diferente`);
        return;
      }
      product.id = this.contador++;
      this.products.push(product)
    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        const findProduct = this.products.find((producto) => producto.id === id);
        if(!findProduct){
            console.error(`No se encontro el producto`);
        }
        return findProduct;  
    }    
}

const productManager = new ProductManager();

productManager.addProduct({
    title:`productito`, 
    description:`muchas cositas`,
    price: 35,
    thumbnail:`productito.jpg`,
    code: 43,
    stock: 3,
});

productManager.addProduct({
    title:`productazo`, 
    description:`pocas cositas`,
    price: 53,
    thumbnail:`productazo.jpg`,
    code: 34,
    stock: 9,
});

productManager.addProduct({
    title:`producteto`, 
    description:`demasiadas cositas`,
    price: 65,
    thumbnail:`producteto.jpg`,
    code: 34,
    stock: 4,
});
productManager.addProduct({

    description:`interminables cositas`,
    price: 65,
    thumbnail:`productisimo.jpg`,
    code: 5454,
    stock: 4,
});

const mostrandoProductos = productManager.getProducts();

console.log(mostrandoProductos);

const idProducto = productManager.getProductById(1);

console.log(idProducto);

const idProductoFaltante = productManager.getProductById(34);

console.log(idProductoFaltante);