import {useState, useEffect} from "react";
import {signToCountry} from "./signToCountry";


async function getCurrencies(curr = 'EUR'){
    try {
        const req = await fetch('https://api.exchangeratesapi.io/latest');
        const data = await req.json();
        const {base, date} = data;
        const currencies = [];
        console.log(currencyObj);
        Object.entries(data.rates).forEach(([key, value]) =>
            currencies.push({sign: key, rate: value, fullName: signToCountry(key)})
        );
        currencies.push({sign: 'EUR', value: 1.000, fullName: signToCountry('EUR')});
        const currencyObj = {
            base,
            date,
            currencies
        }
        window.localStorage.setItem('currencies', JSON.stringify(currencyObj));

        return currencyObj;
    } catch(e) {
        console.log(e);
        return 'Something bad happened while fetching currency rates :(';
    }
}

export function useCurrencies(curr = 'EUR') {
    const currencies = window.localStorage.getItem('currencies');
    const [state, setState] = useState();
    let data;
    if(!currencies) {
        data = getCurrencies();
    }

    useEffect(() => {
        if(!currencies) {
            setState(data);
        }
        /* add date check statement here later. */ 

    }, []);
    return state;
}