import React from "react";

export const CurrencyForm = ({currencies}) => {
    if (currencies){
            return (
            <div>
                <select>
                    {currencies.map(c => <option value={c.sign} key={c.rate}>{c.fullName}</option>)}
                </select>
            </div>
        )
    } else {
        return <h1>loading...</h1>
    }
}