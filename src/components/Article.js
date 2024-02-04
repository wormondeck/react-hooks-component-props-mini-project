import React from 'react';

function Article({title, date = 'January 1, 1970', preview, minutes}) {
    function calculateCoffeeCups(minutes) {
        const numCups = Math.ceil(minutes / 5);
        const numBox = Math.ceil(minutes / 10)
        if (minutes < 30) {
            return '☕️'.repeat(numCups)
        } else {
            return '🍱'.repeat(numBox)
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{calculateCoffeeCups(minutes)} {minutes} min read</p>
        </article>
    );
};

export default Article;