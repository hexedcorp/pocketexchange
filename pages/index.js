import React from "react";
import NoSSR from 'react-no-ssr';
import "../style/styles.scss";
import Shit from "../compontents/Currency";


function Home() {
    return (
        <div>
            <h1>💵 pocketexchange.xyz 💷</h1>
            <p>a simple exchange app that converts most currencies!</p>
            <NoSSR>
            <React.Suspense fallback={<div>Loading...</div>}>    
                <Shit/>
            </React.Suspense>
            </NoSSR>
        </div>
    );
}
export default Home;
