interface Produto {
    id: string;
    titulo: string;
    preco: number;
    imagem: any;
}

// Esse array simula os dados que poderiam vir através da API
export const produtos: Produto[] = [
    {
        id: "1",
        titulo: "Bone",
        preco: 99.00,
        imagem: require('../assets/bone.jpg')
    },
    {
        id: "2",
        titulo: "Camiseta",
        preco: 99.00,
        imagem: require('../assets/camiseta-roxa.jpg')
    },
     {
        id: "3",
        titulo: "Calça",
        preco: 150.00,
        imagem: require('../assets/calça.jpg')
    },
     {
        id: "4",
        titulo: "Tenis",
        preco: 199.00,
        imagem: require('../assets/tenis.webp')
    },

];