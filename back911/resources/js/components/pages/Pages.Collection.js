import React, { useState, useEffect } from 'react';
import PagesCollectionItem from "./Pages.Collection.Item";

export default function PagesCollection() {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        console.log("useEffect for all start");
        fetch("/api/pages")
            .then(res=> { return res.json()})
            .then(data=> setPages(data))
            .catch(err=> {console.log(err);})
        }, []);

    useEffect(() => {
        console.log("useEffect for all pages");
    }, [pages]);

    return (
        <div>
            <h1> Список страниц: </h1>
            <ul>
                {pages.map(p=>
                    <li key={"pageCollectionItem_" + p.id}><PagesCollectionItem page={p}/></li>
                )}
            </ul>
        </div>
    );
}
