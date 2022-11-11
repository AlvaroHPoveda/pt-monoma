
let immovables = [
    {
        id: 1,
        title: 'Ático Dúplex de Obra Nueva',
        description: 'Matiano, Sant Boi de Llobregat',
        price: '330.000€',
        img: 'https://i.postimg.cc/85NfL7VF/Rectangle1.png',
        imgSlider01:'https://i.postimg.cc/9fTphp66/Rectangle3.png',
        imgSlider02:'https://i.postimg.cc/ZqR5DKyM/Rectangle4.jpg',
        imgSlider03:'https://i.postimg.cc/kg5C7YXV/Rectangle5.jpg',
        area: '102m^',
        room: '3',
        bathroom: '2',
        descriptionDetail: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..'
    },
    {
        id: 2,
        title: 'Ático Dúplex de Obra Nueva',
        description: 'Matiano, Sant Boi de Llobregat',
        price: '330.000€',
        img: 'https://i.postimg.cc/ZqR5DKyM/Rectangle4.jpg',
        imgSlider01:'https://i.postimg.cc/ZqR5DKyM/Rectangle4.jpg',
        imgSlider02:'https://i.postimg.cc/9fTphp66/Rectangle3.png',
        imgSlider03:'https://i.postimg.cc/kg5C7YXV/Rectangle5.jpg',
        area: '102m^',
        room: '3',
        bathroom: '2',
        descriptionDetail: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..'
    },
    {
        id: 3,
        title: 'Ático Dúplex de Obra Nueva',
        description: 'Matiano, Sant Boi de Llobregat',
        price: '330.000€',
        img: 'https://i.postimg.cc/kg5C7YXV/Rectangle5.jpg',
        imgSlider01:'https://i.postimg.cc/kg5C7YXV/Rectangle5.jpg',
        imgSlider02:'https://i.postimg.cc/ZqR5DKyM/Rectangle4.jpg',
        imgSlider03:'https://i.postimg.cc/9fTphp66/Rectangle3.png',
        area: '102m^',
        room: '3',
        bathroom: '2',
        descriptionDetail: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..'
    },
    {
        id: 4,
        title: 'Ático Dúplex de Obra Nueva',
        description: 'Matiano, Sant Boi de Llobregat',
        price: '330.000€',
        img: 'https://i.postimg.cc/sXWmJ4jf/Rectangle6.jpg',
        imgSlider01:'https://i.postimg.cc/sXWmJ4jf/Rectangle6.jpg',
        imgSlider02:'https://i.postimg.cc/ZqR5DKyM/Rectangle4.jpg',
        imgSlider03:'https://i.postimg.cc/kg5C7YXV/Rectangle5.jpg',
        area: '102m^',
        room: '3',
        bathroom: '2',
        descriptionDetail: 'Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..Dúplex de obra seminueva en Marianao. Finca del 2019. El piso consta de una planta con entrada al salón y final en terraza. El salón da entrada a la cocina y al pasillo que distribuye una de las habitaciones dobles y uno de los cuartos. de baño de tres piezas..'
    },    
];

export function getAllImmovables(){
    return immovables;
}

export function getImmovables(id){
    return immovables.find(immovable => immovable.id === id);
}

export function deleteImmovables(id){
    return immovables = immovables.filter(immovable => immovable.id !== id);
}