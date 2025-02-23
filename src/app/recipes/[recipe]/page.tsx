import {recipes} from "@/app/recipes/data";
import RecipePage from "./RecipePage"; // Import the Client Component


export async function generateStaticParams() {
    return recipes.map((recipe) => ({
        recipe: recipe.slug
    }))
}

export default function Page() {
    return <RecipePage/>;
};
