import React from 'react';
import './Coin.css';

function Coin({ name, image, symbol, price, priceChange }) {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypt" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{price}</p>
                    {priceChange < 0 ? (
                        <p className="red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="green">{priceChange.toFixed(2)}%</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Coin
