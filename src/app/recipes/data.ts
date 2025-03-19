export interface OvenInfo {
    type: string;
    temperature: string;
}

export interface Credit {
    text: string;
    link: string;
    linkText: string;
}

export interface Ingredient {
    quantity: number;
    unit: string;
    ingredient: string;
}

export interface Recipe {
    slug: string;
    title: string;
    category: string;
    description: string;
    totalTime: string;
    yields: string,
    oven?: OvenInfo;
    image: string;
    ingredients: Ingredient[];
    instructions: string[];
    credit?: Credit;
}

export const recipes: Recipe[] = [
    {
        slug: 'quick-bread-buns',
        title: 'Quick bread buns',
        category: 'Baking - Bread',
        description: 'Easy bread buns that can be frozen and reheated in the microwave to get fresh bread every day. High in fiber, about 5.5g per bun when made with buckwheat.',
        totalTime: "1 hour",
        yields: "9 buns",
        image: '/gf-vegan-recipes/breadbuns.jpg',
        oven: {type: "Circo roast / fan", temperature: "195 °C"},
        ingredients: [
            {
                quantity: 2,
                unit: 'tbsp',
                ingredient: 'chia seeds',
            },
            {
                quantity: 2,
                unit: 'tbsp',
                ingredient: 'psyllium husks',
            },
            {
                quantity: 5,
                unit: 'dl',
                ingredient: 'warm water',
            },
            {
                quantity: 125,
                unit: 'g',
                ingredient: 'rice flour',
            },
            {
                quantity: 110,
                unit: 'g',
                ingredient: 'buckwheat flour (sub with sorghum/oat/rice flour)',
            },
            {
                quantity: 80,
                unit: 'g',
                ingredient: 'ground almonds',
            },
            {
                quantity: 0.5,
                unit: 'tsp',
                ingredient: 'baking soda',
            },
            {
                quantity: 1,
                unit: 'tsp',
                ingredient: 'salt',
            },
            {
                quantity: 1.5,
                unit: 'tbsp',
                ingredient: 'apple cider vinegar',
            },
        ],
        instructions: [
            'Mix the chia seeds, psyllium husks and water in the mixer bowl. Leave to form a gel for about 10-15 minutes.',
            'Mix all the other dry ingredients together.',
            'Start preheating the oven to 195 °C fan.',
            'Add the vinegar to the chia seed mix, stir until combined.',
            'Use your hand or the mixer flat edge beater to combine the wet and dry ingredients. No need to knead, just mix enough to be combined.',
            "Immediately divide the dough into 9 even sized buns (small handful each) on a baking tray lined with parchment. The dough is a bit sticky, it's okay, just make the buns as round and nice as you can.",
            'Bake for 20 minutes in 195 °C, then lower the oven to 175 °C and bake for another 20 minutes.',
            'Let the buns cool down before eating to allow the crumb to form. Can be frozen and reheated in the microwave.'
        ],
        credit: {
            text: "Adapted from",
            link: "https://erikoisenhyvaa.wordpress.com/2018/11/05/herkan-vatsan-mantelisampylat-gluteeniton-vegaaninen/",
            linkText: "Erikoisen hyvää"
        },
    },
    {
        slug: 'naan',
        title: 'Garlic Naan',
        category: 'Baking - Bread',
        description: "Tasty naan bread to go with a curry. Fluffy, can't believe it's gluten freeeee.",
        totalTime: "45 mins",
        yields: "4 small naans - for two greedy people (or 4 polite)",
        image: '/gf-vegan-recipes/naan.jpg',
        ingredients: [
            {
                quantity: 2,
                unit: 'tbsp',
                ingredient: 'psyllium husks',
            },
            {
                quantity: 180,
                unit: 'g',
                ingredient: 'warm water',
            },
            {
                quantity: 118,
                unit: 'g',
                ingredient: 'millet flour (plus more for flouring the surface)',
            },
            {
                quantity: 65,
                unit: 'g',
                ingredient: 'tapioca starch',
            },
            {
                quantity: 0.5,
                unit: 'tbsp',
                ingredient: 'sugar',
            },
            {
                quantity: 0.75,
                unit: 'tsp',
                ingredient: 'baking powder (gf)',
            },
            {
                quantity: 0.5,
                unit: 'tsp',
                ingredient: 'salt',
            },
            {
                quantity: 38,
                unit: 'g',
                ingredient: 'vegan yogurt (alpro plain no sugars works)',
            },
            {
                quantity: 1,
                unit: 'tbsp',
                ingredient: 'olive oil',
            },
            {
                quantity: 20,
                unit: 'g',
                ingredient: 'vegan butter',
            },
            {
                quantity: 1,
                unit: 'clove',
                ingredient: 'garlic',
            },
            {
                quantity: 1,
                unit: 'small bunch',
                ingredient: 'fresh coriander',
            },
        ],
        instructions: [
            'Mix the psyllium husks and water in a bowl. Leave to form a gel for a few mins.',
            'In the stand mixer bowl, mix together millet, tapioca, sugar, baking powder and salt.',
            'Add the yogurt and oil to the psyllium gel, mix well, and then pour into the dry ingredients.',
            'Mix on the stand mixer with the dough hook attachment until the dough comes together. Should come off the sides and not have any dry patches, feel springy.',
            'Turn the dough to a slightly floured surface and turn into a ball, then divide into 4 equal portions.',
            "Roll out each naan to have about 18 cm diameter, be about 5mm thick. (Over 6mm can cook too slowly, under 4mm may not get fluffy enough.)",
            'Heat a stainless steel pan to very hot (8 on induction cooker). Test a drop of water beads and dances off. Do not add any oil!!',
            'While waiting for the pan to heat or cooking the naans, melt the vegan butter and mix it with finely chopped garlic. Chop up the coriander.',
            'Place one naan at a time on the hot pan, cover with lid and cook until bubbles start to form on the top. Took me a couple of minutes. Check the bottom is not burning but is getting some colour.',
            'Flip the naan and cook a couple of minutes on the other side until you see golden brown/charred parts.',
            'Remove the naan from heat and brush with the garlic butter, the sprinkle with coriander.',
            'Repeat for all the naans, then enjoy!',
        ],
        credit: {
            text: "Adapted from",
            link: "https://theloopywhisk.com/2023/03/05/easy-gluten-free-naan-bread/",
            linkText: "Loopy whisk"
        },
    },
];
