import { v4 as uuidv4 } from 'uuid';
const post = [
        {
            id:uuidv4(),
            titulo : 'Articulo #1',
            texto: 'Este es el texto del primer articulo'
        },
        {
            id:uuidv4(),
            titulo : 'Articulo #2',
            texto: 'Este es el texto del segundo articulo'
        },
        {
            id:uuidv4(),
            titulo : 'Articulo #3',
            texto: 'Este es el texto del tercero articulo'
        }
];
 export default post;