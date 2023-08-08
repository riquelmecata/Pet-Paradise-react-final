const products = [
    {id: "1", titulo:"BRIT CARE PUPPY SALMON & POTATO", descripcion:"Fórmula libre de granos para cachorros de todas las razas (4 semanas a 12 meses).Ideal también para perras gestantes. Brit Care Puppy All Breed está adecuadamente balanceado y es altamente digestible. Alimento Super Premium formulado con los requerimientos especiales de los cachorros desde el periodo de destete. El alimento es sensible en el tacto gastrointestinal. Todos los nutrientes dan soporte adecuado al desarrollo de los huesos, articulaciones y dientes.", precio:23900, imagen:"https://raw.githubusercontent.com/riquelmecata/ProyectoFinal-Riquelme/master/images/44410269.jpg", categoria:"perros", stock: 15},
    {id: "2", titulo:"EUKANUBA PUPPY LARGE BREED", descripcion:"Eukanuba Puppy Large Breed es un alimento formulado para cachorros de raza grande (de los 25 kg a los 40 kg de peso en la edad adulta) y de 2 meses a los 15 meses de edad", precio:59990, imagen:"https://raw.githubusercontent.com/riquelmecata/ProyectoFinal-Riquelme/master/images/34307134.png", categoria:"perros", stock: 20},
    {id: "3", titulo:"ROYAL CANIN MAXI LIGHT 15 KG", descripcion:"Ayuda a reducir la energía consumida por el perro en un 20%, utilizando el mismo volumen de la ración, comparado con MAXI Adult. Ayuda a mantener el peso ideal gracias a su alto contenido de proteínas (25% mín.) y un moderado nivel de grasas. En riquecido con L-carnitina, que estimula la utilización de las grasas y evita su depósito como grasa corporal. De esta manera ayuda a preservar el tono muscular.", precio:65990, imagen:"https://raw.githubusercontent.com/riquelmecata/ProyectoFinal-Riquelme/master/images/2904043444_MAXI_LIGHT-02.jpg", categoria:"perros", stock: 50},
    {id: "4", titulo:"3x2 PRO PLAN KITTEN POLLO E HIGADO LATA 85 GR", descripcion:"PACK 3x2 PRO PLAN KITTEN POLLO E HIGADO LATA 85 GR", precio:3990, imagen:"https://dojiw2m9tvv09.cloudfront.net/22023/product/M_kitten-pollo-higado-lata9034.jpg?85", categoria:"gatos", stock: 3},
    {id: "5", titulo:"PRO PLAN URINARY CAT", descripcion:"Pro Plan Cat Urinary esta especialmente formulado para obtener un PH en la orina ligeramente mas ácido para ayudar a disolver cálculos de estruvita.", precio:58990, imagen:"https://raw.githubusercontent.com/riquelmecata/ProyectoFinal-Riquelme/master/images/34310099.jpg", categoria:"gatos", stock: 15},
    {id: "6", titulo:"Alimento Comida Ave", descripcion:"1 kg. de mix semillas para especies de aves pequeñas. Especialmente formulada para canarios.", precio:2590, imagen:"https://http2.mlstatic.com/D_NQ_NP_937683-MLC46432246864_062021-O.webp", categoria:"exoticos", stock: 10}
]

export const pedirDatos = () => {

    return new Promise((resolve, reject)=> {
        setTimeout( () => {
            resolve(products);
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}