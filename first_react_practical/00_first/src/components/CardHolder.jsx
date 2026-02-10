import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react';
import Count from './Count1/Count';
let obj;
export default function CardHolder() {

    var [count, SetCount] = useState(0);
    var [name, NameChange] = useState("Manan");
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=9631a675593c4bdeacbe108a6d45ef99")
            .then((res) => res.json())
            .then((data) => {
                obj = data
                console.log(obj);
                NameChange(obj.articles[0].author)
            })
    }, [count])
    function funCall() {
        SetCount(++count);
    }
    return (
        <>
             <div className="content">
                <Card image="https://i.pinimg.com/originals/52/ae/64/52ae64cc0311e8c032acfa6858c055e7.jpg" des="Gojo Satoru is one of the central characters in Jujutsu Kaisen and is widely regarded as the strongest jujutsu sorcerer of his era."title={name} />
                <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6-gIpSkWFDgJ-FwoEMd1FGnPl-c-ubPWGQ&s" des="Naruto Uzumaki is a determined ninja who rises from an outcast child to the Hokage by never giving up and believing in bonds, hard work, and self-growth."
                    title="Naruto Uzumaki" />
            </div>
           
        </>
    )
}