'use client';

import React from "react";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { recipes, Ingredient, IngredientSection } from "@/app/recipes/data";
import { notFound } from 'next/navigation';
import {formatFraction} from "@/utils/quantityHelper";

export default function RecipePage() {
    const params = useParams();
    const recipeSlug = params.recipe as string;

    const recipe = recipes.find((r) => r.slug === recipeSlug);

    if (!recipe) {
        notFound();
    }

    const isIngredientSection = (item: Ingredient | IngredientSection): item is IngredientSection => {
        return 'title' in item && Array.isArray((item as IngredientSection).ingredients);
    };

    return (
        <div className="container">
            <h1>{recipe.title}</h1>
            {recipe.image && (
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={600}
                    height={400}
                    className="recipe-image"
                />
            )}
            <div className="description">
                <p>{recipe.description}</p>
            </div>
            <div className="general-info">
                <h2>Information</h2>
                <div className="total-time">
                    <p><strong>Total time:</strong> {recipe.totalTime}</p>
                </div>
                <div className="yields">
                    <p><strong>Yield:</strong> {recipe.yields}</p>
                </div>
                {recipe.oven && (
                    <div className="oven-info">
                        <p>
                            <strong>Oven:</strong> {recipe.oven.type} {recipe.oven.temperature}
                        </p>
                    </div>
                )}
            </div>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((item, index) => {
                    if (isIngredientSection(item)) {
                        return (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.ingredients.map((ing, idx) => (
                                        <li key={idx}>
                                            {formatFraction(ing.quantity)} {ing.unit} {ing.ingredient}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    } else {
                        // plain ingredient object, no subsection
                        return (
                            <li key={index}>
                                {formatFraction(item.quantity)} {item.unit} {item.ingredient}
                            </li>
                        );
                    }
                })}
            </ul>

            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>

            <h2>Credits</h2>
            <p>{recipe.credit?.text} <a href={recipe.credit?.link}>{recipe.credit?.linkText}</a>.</p>

            <Link href="/" className="back-link">
                Back to Home
            </Link>
        </div>
    );
}
