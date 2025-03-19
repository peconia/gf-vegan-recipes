'use client';

import React from "react";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { recipes } from "@/app/recipes/data";
import { notFound } from 'next/navigation';
import {formatFraction} from "@/utils/quantityHelper";

export default function RecipePage() {
    const params = useParams();
    const recipeSlug = params.recipe as string;

    const recipe = recipes.find((r) => r.slug === recipeSlug);

    if (!recipe) {
        notFound();
    }

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
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{formatFraction(ingredient.quantity)} {ingredient.unit} {ingredient.ingredient}</li>
                ))}
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
