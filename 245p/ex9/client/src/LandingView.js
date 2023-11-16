import React from 'react'

import Main from "./main.js";

import { MAIN_DATA } from "./data.js";

function LandingView(){
    return(
        <React.Fragment>
            <Main content={MAIN_DATA[0].content} />
        </React.Fragment>
    )
}

export default LandingView