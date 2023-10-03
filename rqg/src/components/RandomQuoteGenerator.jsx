import React from "react";
import { useState } from 'react';

const RQG = () => {
    const [quote, setQuote] = useState({
        set1: {
            quote: "Ang mahalaga, importante.",
            author: "Joshua Luigi Delos Santos"
        },
        set2: {
            quote: "I was born at a very young age.",
            author: "Joshua Luigi Delos Santos"
        }
    })
    return (
        <div>
            <div id="quote-box" className="card m-4 p-4 text-center mx-auto">
                {/*insert variable of the changing quote here*/}
                <p id="text" className="h1">{quote.set1.quote}</p>
                {/*insert variable of the corresponding author here*/}
                <p id="author" className="text-muted">{quote.set1.author}</p>
                <button className="btn btn-success text-white mx-auto" id="new-quote">New Quote</button>
                <button id="tweet-quote" className="btn btn-primary mt-1 mx-auto">Tweet Quote</button>
            </div>
        </div>
    )

}

export default RQG