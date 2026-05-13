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

// Add a new interface for ingredient sections
export interface IngredientSection {
    title: string;
    ingredients: Ingredient[];
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
    // Allow ingredients to be either plain Ingredient objects or sections
    ingredients: (Ingredient | IngredientSection)[];
    instructions: string[];
    credit?: Credit;
}

export const recipes: Recipe[] = [
    {
        slug: 'pumpkin-cake',
        title: 'Pumpkin cake',
        category: 'Baking',
        description: 'Easy pumpkin cake from fresh pumpkin and oranges. Uses up the pumpkin from the veg box and is super tasty!',
        totalTime: "3 hours",
        yields: "1 cake",
        image: '/gf-vegan-recipes/pumpkin-cake.jpg',
        oven: {type: "Circo roast / fan", temperature: "165 °C"},
        ingredients: [
            {
                title: 'Cake base',
                ingredients: [
                    {
                        quantity: 200,
                        unit: 'g',
                        ingredient: 'coarsely grated pumpkin',
                    },
                    {
                        quantity: 1,
                        unit: '',
                        ingredient: 'orange',
                    },
                    {
                        quantity: 162,
                        unit: 'g',
                        ingredient: 'gluten-free flour',
                    },
                    {
                        quantity: 120,
                        unit: 'g',
                        ingredient: 'almond flour / ground almonds',
                    },
                    {
                        quantity: 0.25,
                        unit: 'tsp',
                        ingredient: 'xanthan gum (if your gf flour blend does not already contain it)',
                    },
                    {
                        quantity: 120,
                        unit: 'g',
                        ingredient: 'light brown sugar',
                    },
                    {
                        quantity: 0.5,
                        unit: 'tsp',
                        ingredient: 'baking soda',
                    },
                    {
                        quantity: 2,
                        unit: 'tsp',
                        ingredient: 'baking powder (gluten free)',
                    },
                    {
                        quantity: 1,
                        unit: 'tsp',
                        ingredient: 'cinnamon',
                    },
                    {
                        quantity: 0.5,
                        unit: 'tsp',
                        ingredient: 'ground cloves',
                    },
                    {
                        quantity: 0.5,
                        unit: 'tsp',
                        ingredient: 'ground ginger',
                    },
                    {
                        quantity: 0.25,
                        unit: 'tsp',
                        ingredient: 'ground nutmeg',
                    },
                    {
                        quantity: 1,
                        unit: 'pinch',
                        ingredient: 'salt',
                    },
                    {
                        quantity: 90,
                        unit: 'g',
                        ingredient: 'oil (neutral flavour)',
                    },
                    {
                        quantity: 100,
                        unit: 'g',
                        ingredient: 'plant based milk',
                    }
                ]
            },
            {
                title: 'Topping',
                ingredients: [
                    {
                        quantity: 125,
                        unit: 'g',
                        ingredient: 'softened vegan butter',
                    },
                    {
                        quantity: 250,
                        unit: 'g',
                        ingredient: 'icing sugar',
                    },
                    {
                        quantity: 1,
                        unit: '',
                        ingredient: 'orange',
                    }, {
                        quantity: 1,
                        unit: 'pinch',
                        ingredient: 'salt',
                    },
                    {
                        quantity: 1,
                        unit: 'handful',
                        ingredient: 'walnut or pecan halves for decoration (optional)',
                    },
                ]
            }
        ],
        instructions: [
            'Grate the pumpkin coarsely on a plate. Zest the orange on to the same plate.',
            'Prepare the 8" (20cm) spring form cake tin, add parchment paper to the bottom and grease the sides with a bit of oil.',
            'Preheat the oven to 165 °C fan.',
            'In a large mixing bowl, combine all the dry ingredients: gluten-free flour, almond flour, xanthan gum, sugar, baking soda, baking powder, spices and salt. Mix well.',
            'Juice the orange into  a measuring jug, you should have around 100 ml of juice.',
            'Add the oil and plant based milk to the orange juice, mix well.',
            'Pour the wet ingredients into the dry ingredients, and mix until just combined.',
            'Fold in the grated pumpkin and orange zest.',
            'Pour the batter into the prepared cake tin and smooth the top with a spatula.',
            'Bake in 165 °C fan oven for about 50 minutes, until a skewer inserted into the centre comes out clean.',
            'Let the cake cool completely on a wire rack before removing from the tin.',
            'Prepare the topping. In the stand mixer bowl with paddle attachment, beat the vegan butter 2-3 mins until creamy.',
            'Add the icing sugar and beat for 5 more mins until fluffy, scraping down the sides with a spatula as needed.',
            'Zest the orange straight into the bowl and squeeze in a splash of the juice.',
            'Add a pinch of salt if you used unsalted butter. Mix until combined.',
            'If the topping is too stiff, add a tiny splash of orange juice to loosen it up. If ot is too runny, add a bit more icing sugar.',
            'Spread the topping thickly on top of the cooled cake with a spatula. Decorate with walnut or pecan halves if desired.',
            'Slice and enjoy! Store any leftovers in the fridge.',
        ],
        credit: {
            text: "Adapted from",
            link: "https://biancazapatka.com/en/pumpkin-cake-recipe/#recipe",
            linkText: "Bianca Zapatka's blog"
        },
    },
    {
        slug: 'quick-bread-buns',
        title: 'Quick bread buns',
        category: 'Baking - Bread',
        description: 'Easy bread buns that can be frozen and reheated in the microwave to get fresh bread every day. High in fibre, about 5.5g per bun when made with buckwheat.',
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
    {
        slug: 'nut-roast',
        title: 'Nut Roast',
        category: 'Dinner',
        description: "Little individual nut roasts, perfect for a Sunday roast or a Christmas dinner.",
        totalTime: "35 mins",
        yields: "2 portions",
        oven: {type: "Circo roast / fan", temperature: "200 °C"},
        image: '/gf-vegan-recipes/nut_roast.jpg',
        ingredients: [
            {
                quantity: 1,
                unit: '',
                ingredient: 'small onion (or some shallots)',
            },
            {
                quantity: 90,
                unit: 'g',
                ingredient: 'nuts (you can mix whatever you like, I often use hazelnuts, pistachio, walnuts and almonds)',
            },
            {
                quantity: 1,
                unit: 'stick',
                ingredient: 'celery (optional)',
            },
            {
                quantity: 2,
                unit: 'cloves',
                ingredient: 'garlic',
            },
            {
                quantity: 1,
                unit: 'tin',
                ingredient: 'black beans (or some other beans you like, kidney beans work well)',
            },
            {
                quantity: 2,
                unit: 'tsp',
                ingredient: 'apricot jam (or peach or some other sweet jam, cranberry works nicely for Christmas)',
            },

        ],
        instructions: [
            'Roughly chop the nuts. Chop the onion and celery finely and crush the garlic.',
            'Heat up a frying pan without oil and toast the nuts until they start to smell nice. Remove from the pan into a mixing bowl.',
            'Add some oil to the pan and fry the onion and celery until they start to soften.',
            'Add the garlic and fry for a minute more.',
            'Rinse the beans well and then add them to the pan and cook for a few minutes until they are heated through.',
            'Season with salt and pepper, you can also add herbs or spices you like.',
            'Add the fried veg into the mixing bowl with the nuts, and use a potato masher to mash everything together. You want to keep some texture, but also make sure the beans are mashed.',
            'Line a small oven tray with parchment paper. Divide the mix into two portions and shape them to domes / half ball shapes. Squeeze them  gently to ensure they hold together.',
            'Stir your jam to make it a bit more runny (add a tiny splash of water if needed), then brush the tops of the nut roasts with the jam.',
            "Wait until you have about 15 mins of roasting time left for your other roastables, and then bake the nut roasts in 200 °C fan oven for around 15 minutes. (You can cook a bit more or less if your oven temp for the other dishes is different, it doesn't matter too much)",
        ],
        credit: {
            text: "Adapted from",
            link: "https://www.mindfulchef.com/healthy-recipes/nut-roast-with-cranberry-gravy-1",
            linkText: "Mindful chef"
        },
    },
    {
        slug: 'cabbage-stew',
        title: 'Kaalilaatikko - cabbage stew',
        category: 'Dinner',
        description: "Traditional Finnish delicacy, just like my grandma made it. But vegan.",
        totalTime: "3 hours",
        yields: "4 portions",
        oven: {type: "Circo roast / fan", temperature: "175 °C"},
        image: '/gf-vegan-recipes/cabbage_stew.jpg',
        ingredients: [
            {
                quantity: 1,
                unit: '',
                ingredient: 'large onion (or 2 small)',
            },
            {
                quantity: 1,
                unit: '',
                ingredient: 'cabbage, about 1kg (can use white, savoy or whatever)',
            },
            {
                quantity: 3,
                unit: '',
                ingredient: 'medium carrots (2 large or 4 small)',
            },
            {
                quantity: 4,
                unit: 'cloves',
                ingredient: 'garlic',
            },
            {
                quantity: 2,
                unit: 'dl',
                ingredient: 'pudding rice',
            },
            {
                quantity: 4,
                unit: 'dl',
                ingredient: 'water (for rice)',
            },
            {
                quantity: 2,
                unit: 'dl',
                ingredient: 'soy mince (TVP)',
            },
            {
                quantity: 2,
                unit: '',
                ingredient: 'stock cubes',
            },
            {
                quantity: 7,
                unit: 'dl',
                ingredient: 'water (for stock)',
            },
            {
                quantity: 2,
                unit: 'tbsp',
                ingredient: 'gluten free soy sauce (or tamari)',
            },
            {
                quantity: 2,
                unit: 'tsp',
                ingredient: 'dried marjoram',
            },
            {
                quantity: 0.5,
                unit: 'dl',
                ingredient: 'black treacle',
            },

        ],
        instructions: [
            'Add the rice and 4 dl water to small saucepan with a lid. Cook until the water has been absorbed into the rice. (Bring to boil, then low heat for 10 mins, then turn heat off but keep the pan on the stove and leave to steam under the lid for another 10 mins.)',
            'Chop the onion and thinly slice the carrots. Fry in a large pot (5+ litres), starting from onions and add in the carrot after a few minutes.',
            'While the rice, onions and carrots are cooking, discard the outer cabbage leaves and the hard stem, and chop the rest to small ish pieces. Add the cabbage into the pan as you chop it, and keep frying together with the onions until it all starts to soften slightly.',
            'Finely chop the garlic and add to the cabbage, continuing frying for another minute or so.',
            "Start preheating the oven to 175°C fan.",
            'Add in the soy mince, stock cubes, 7 dl boiled water and soy sauce to the cabbage pot, and stir until the stock cubes have fully dissolved and everything is boiling.',
            'Turn down the heat to low. Season with salt and the marjoram, you can also add pepper if you like.',
            'Add in the rice and any remaining water from that pot, and the treacle. (You can eyeball the treacle amount, I usually dip a large spoon in the treacle jar and mix that in as it is so sticky.) Mix thoroughly and check the flavour. You want this to be fairly salty, so add a bit more salt if needed.',
            'Pour into a large oven dish. You should have enough liquid so that the ingredients are mostly covered, but the top layer is not fully submerged. Add a splash of stock or water if needed and mix it in.',
            "Cover with foil loosely and bake for 1 hour to 1 hour and 30 mins. After that, remove the foil and bake for another 30 mins to crisp up the top. (The longer you cook the nicer it gets, but you can get away with shorter cooking time if you're too hungry to wait!)",
            "Serve with lingonberry jam. Trust me it's the best way!",
            'Leftovers can be stored in the fridge and reheated in the same temp for 40 mins or so, no foil. Add a splash of water to the top if it looks dry as you put it in the oven.',
        ],
        credit: {
            text: "Veganised from my grandma's recipe",
            link: "",
            linkText: ""
        },
    },
];
