const Products = [
    {
        id: 1,
        name: 'Gran Reserva',
        price: 323.45,
        category: 'ron',
        image: 'https://prolicores.ar/img/ron/Ron%20Santa%20Teresa%20Gran%20Reserva%20750ml.png',
        stock: 5,
        description: '750  ml Unidad',
    },
    {
        id: 2,
        name: 'Havana Club Añejo',
        price: 234.56,
        category: 'ron',
        image: 'https://prolicores.ar/img/ron/Ron%20Havana%20Club%20A%C3%B1ejo%20Especial%20750%20ml.jpg',
        stock: 5,
        description: ' 1 L unidad',
    },
    {
        id: 3,
        name: 'Dorado New Style',
        price: 234.56,
        category: 'vodka',
        image: 'https://prolicores.ar/img/ron/Ron%20New%20Style%20Dorado%201%20L.png',
        stock: 5,
        description: '700 ml  unidad',
    },
    {
        id: 4,
        name: 'Imperial Golden ',
        price: 234.56,
        category: 'cerveza',
        image: 'https://prolicores.ar/img/cervezas/Cerveza%20Imperial%20Golden%20Lata%20473%20mL.png',
        stock: 5,
        description: '473 ml  unidad',
    },
    {
        id: 5,
        name: ' Heineken',
        price: 234.56,
        category: 'cerveza',
        image: 'https://prolicores.ar/img/cervezas/Cerveza%20Heineken%206%20x%20473%20mL.webp',
        stock: 5,
        description: ' 455 ml Six pack',
    },
    {
        id: 6,
        name: 'Imperial Ipa',
        price: 234.56,
        category: 'cerveza',
        image: 'https://prolicores.ar/img/cervezas/Cerveza%20Imperial%20Ipa%20Lata%20473%20ml.png',
        stock: 5,
        description: '354 ml  unidad',
    },
    {
        id: 7,
        name: 'Vodka Smirnoff',
        price: 234.56,
        category: 'vodka',
        image: 'https://prolicores.ar/img/vodka/Vodka%20Smirnoff%20700ml.jpg',
        stock: 5,
        description: '700 ml  unidad',
    },
    {
        id: 8,
        name: 'Skyy Infusions',
        price: 234.56,
        category: 'vodka',
        image: 'https://prolicores.ar/img/vodka/Vodka%20Skyy%20Infusions%20Raspberry%20750%20Ml.webp',
        stock: 5,
        description: '750 ml  unidad',
    },
    {
        id: 9,
        name: 'Sernova Tropical',
        price: 234.56,
        category: 'vodka',
        image: 'https://prolicores.ar/img/vodka/Vodka%20Sernova%20Tropical%20Passion%20700mL.png',
        stock: 5,
        description: '750 ml  unidad',
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (Products.length === 0) {
            reject(new Error('No hay productos'))
        }
        setTimeout(() => {
            resolve(Products)
        }, 500)
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                Products.find((product) => product.id.toString() === id.toString())
            );
        }, 2000);
    });
};
export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                Products.filter((product) => product.category === category)
            )
        }, 3000);
    });
};





export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products.filter((product) => product.category === category));
        }, 2000);
    });
};


export default Products;