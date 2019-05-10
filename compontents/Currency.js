import React from "react";
import {useCurrencies} from "../lib/useCurrencies";
import { CurrencyForm } from "./CurrencyForm";

function Shit(){
    const shit = useCurrencies();
    console.log(shit);
    console.log(typeof shit);
    if(shit && typeof shit === 'object') {
        return <CurrencyForm currencies={shit.currencies}/>
    } else return (<h1>fack it didn't work</h1>)
}

export default Shit;