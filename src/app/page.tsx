import { TransitionLink } from '@/components/TransitionLink';
import {recipes} from "@/app/recipes/data";

export default function Home() {

    const recipesByCategory = recipes.reduce((acc, recipe) => {
        if (!acc[recipe.category]) {
            acc[recipe.category] = [];
        }
        acc[recipe.category].push(recipe);
        return acc;
    }, {} as Record<string, typeof recipes>);

    return (
        <div className="container">
            <h1>Gluten free vegan recipes</h1>
            <p>          {`
        Here is a collection of recipes I've tried and that work for me. Everything is gluten free AND vegan, and also super tasty!
      `}</p>
            <div className="categories">
                {Object.entries(recipesByCategory).map(([category, recipes]) => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ul>
                            {recipes.map((recipe) => (
                                <li key={recipe.slug}>
                                    <TransitionLink direction="forward" href={`/recipes/${recipe.slug}`}>
                                        {recipe.title}
                                    </TransitionLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}