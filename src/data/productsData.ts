interface Product {
    type: string;
    title: string;
    description: string;
    imageUrl: string;
    isMainProduct: boolean
}
interface Sponsor {
    title: string;
    description: string;
    imageUrl: string;
}

const products: Product[] = [
    {
        type: "Lavatrice",
        title: "Lavatrice MAYTAG 500W super clean wash maker",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici maytag",
        imageUrl: "./images/Maytag-logo.png",
        isMainProduct: true
    },
    {
        type: "Tubo Anticalcare",
        title: " Tubo super clean water",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici whirpool",
        imageUrl: "./images/logo.png",
        isMainProduct: false
    },
];

const Sponsors: Sponsor[] = [
    {
        title: "Distributore Autorizzato MAYTAG",
        description: "La Maytag Corporation è un'azienda americana che produce" +
    " e commercializza elettrodomestici per la casa e commerciali. " +
    "La Maytag Washing Machine Company è stata fondata nel 1893 dall'imprenditore Frederick Maytag\n" + "\n" +
    "I prodotti dell'azienda \"Agas\" sono distribuiti con autorizzazione ufficiale da MYTAG. " +
    "Garantiamo qualità e affidabilità come distributore autorizzato. " +
    "Scegliete sicurezza ed eccellenza con i prodotti \"Agas\".",
        imageUrl: "https://cdn.discordapp.com/attachments/1017600421335937104/1215490580944134194/Maytag-logo.png?ex=65fcf0d1&is=65ea7bd1&hm=cca1b142e9b4acaa52d1f25b8eb7add9aa95d01d1a02715fec81b394b1f9afc9&"
    },
    {
        title: "Distributore Autorizzato Whirlpool",
        description: "La Whirlpool Corporation è un produttore e marketer " +
    "multinazionale americano di elettrodomestici per la casa.I " +
    "prodotti dell'azienda 'Agas' sono distribuiti con autorizzazione " +
    "ufficiale da Whirlpool. Garantiamo qualità e affidabilità come " +
    "distributore autorizzato. Scegliete sicurezza ed eccellenza con i " +
    "prodotti 'Agas'.",
        imageUrl: "https://cdn.discordapp.com/attachments/1017600421335937104/1215494786618753044/png-clipart-whirlpool-corporation-home-appliance-washing-machines-brand-maytag-others-thumbnail-removebg-preview.png?ex=65fcf4bb&is=65ea7fbb&hm=b5ff35b83c0e2441d562820c72a9a6dc42b167580e16c2ccab3125bbd2ceeeff&"
    },
    {
        title: "Distributore Autorizzato American Dryer corp.",
        description: "La American Dryer Corporation, o ADC, è leader nell'asciugatura industriale grazie alla loro innovazione e design guidato dagli ingegneri. I prodotti 'Agas' sono distribuiti con autorizzazione ufficiale da American Dryer Corp, garantendo qualità e affidabilità come distributore autorizzato. Scegliete sicurezza ed eccellenza con i prodotti 'Agas'.",
        imageUrl: "https://media.discordapp.net/attachments/1017600421335937104/1215490579560144936/adc-logo.png?ex=65fcf0d0&is=65ea7bd0&hm=55dbd415e5d050ea1ad72465444cf1c769b68a2dc426f3459e215a967e254577&=&format=webp&quality=lossless&width=230&height=174"
    }
]

export default products;