import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Image() {

    const[imageSource, setImageSource] = useState([]);

    useEffect(() => {
        fetchImages()
    }, []);

    const fetchImages = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const image = await res.json();
        setImageSource(image.message);
        console.log(image.message);
    }

    let urlString = imageSource;
    let startIndex = 29;

    function getName(url, firstSlash) {
        let stringCharacters = [];

        for(let index = firstSlash + 1; index < url.length; index++) {

            let characterSet = urlString.charAt(index);

            if(characterSet !== '/') {
                stringCharacters.push(characterSet);
            } else {
                break;
            }
        }
        return stringCharacters.join("");
    }

    console.log(getName(urlString, startIndex));
   
    return(
        <div className="breedDiv">
            <img className="breedImage" src={imageSource} alt="Source"/>
            <h4><p className="breedString">It's a match!!! Your dog has matched with a <em>{getName(urlString, startIndex)}</em> breed. A love story might be on the way...</p></h4>
        </div>
    )
}

export default Image;