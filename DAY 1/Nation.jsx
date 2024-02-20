import React from 'react'; // Import React if you're using JSX

function Nation(props) {
    return (
        <div className="nation">
            <h2>Name: {props.name}</h2>
            <p>Capital: {props.capital}</p>
            <p>Population: {props.pop}</p>
        </div>
    );
}

export default Nation;
