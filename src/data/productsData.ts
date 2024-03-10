interface Product {
    type: string;
    title: string;
    description: string;
    imageUrl: string;
    brand: string;
    isEletric: boolean;
    isCoin: boolean;
    isMain: boolean;
}

interface Sponsor {
    title: string;
    description: string;
    imageUrl: string;
}

const products: Product[] = [
    {
        type: "washer",
        title: "Lavatrice",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici maytag",
        imageUrl: "https://cdn.discordapp.com/attachments/1017600421335937104/1216174217217839124/top-load1-metallic-mobile.png?ex=65ff6d80&is=65ecf880&hm=edbf487d14f6b6d9142a2e50d4c6664acde1f657483f25cf46c5617fece1c4b6&",
        brand: 'none',
        isEletric: false,
        isCoin: false,
        isMain: false
    },
    {
        type: "dryer",
        title: "Asciugatrice",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici whirpool",
        imageUrl: "https://media.discordapp.net/attachments/1017600421335937104/1216174116965711982/hero-MED7230HC.tif.png?ex=65ff6d68&is=65ecf868&hm=cacb94f2c25fbedd68d82af0902ab956952b57aa546872955b84d5e46dc4544f&=&format=webp&quality=lossless&width=884&height=884",
        brand: 'none',
        isEletric: false,
        isCoin: false,
        isMain: false
    },
    {
        type: "detergent",
        title: "Detersivi",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "https://media.discordapp.net/attachments/1017600421335937104/1216174117347135598/removal.ai_66f6ec1f-79d7-4d15-8569-345a50e82c32-detersivo-polvere-dash-power.png?ex=65ff6d68&is=65ecf868&hm=a36f1878e45923f79bc0dce4a05d9e5a34afda918619da736acef5cb16720a6e&=&format=webp&quality=lossless&width=668&height=884",
        brand: 'none',
        isEletric: false,
        isCoin: false,
        isMain: false
    },
    {
        type: "water_filter",
        title: "Tubo Anticalcare",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "https://media.discordapp.net/attachments/1017600421335937104/1216174116214931587/removal.ai_63c7ca46-d7cd-4452-ae1a-792f03386648-screenshot-2024-03-09-at-18-59-09.png?ex=65ff6d68&is=65ecf868&hm=500fdc7c9b2536f56e62be46a64c6c1b4fabfda90c82044f0c9bd109ccbad0da&=&format=webp&quality=lossless&width=870&height=884",
        brand: 'none',
        isEletric: false,
        isCoin: false,
        isMain: false
    },
    // Eletric Washer Maytag
    {
        type: "washer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: true,
        isCoin: false,
        isMain: true
    },
    {
        type: "washer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: true,
        isCoin: true,
        isMain: true
    },
    // Eletric Dryer Maytag
    {
        type: "dryer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: true,
        isCoin: false,
        isMain: true
    },
    {
        type: "washer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: true,
        isCoin: true,
        isMain: true
    },
    // Gas Washer Maytag
    {
        type: "dryer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: false,
        isCoin: false,
        isMain: true
    },
    {
        type: "dryer",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: false,
        isCoin: true,
        isMain: true
    },
    {
        type: "detergent",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: false,
        isCoin: true,
        isMain: true
    },
    {
        type: "water_filter",
        title: "Lavatrice Maytag",
        description: "Qui troverai tutti i modelli di asciugatrici e lavatrici ADC",
        imageUrl: "./images/logo.png",
        brand: 'maytag',
        isEletric: false,
        isCoin: true,
        isMain: true
    },

];

const sponsors: Sponsor[] = [
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
];

export { products, sponsors };