import React from "react";

const Jumbotron = () => {
    return(
        <div className="p-4 bg-secondary-subtle border border-dark rounded-3 mt-5" id="jumbotron">
            <h5>NINE INCH NAILS: Major Releases</h5>
            <p>Nine Inch Nails front-man Trent Reznor has a vast and varied portfolio of music ranging from full cinematic scores, to collaboration projects, to classic record releases. Below is a chronological snapshot of his main record releases with Nine Inch Nails.</p>
            <a className="btn btn-outline-danger" type="button" href="https://en.wikipedia.org/wiki/Trent_Reznor" target="_blank">Trent Reznor Wiki</a> <a className="btn btn-outline-danger" type="button" href="https://en.wikipedia.org/wiki/Nine_Inch_Nails" target="_blank">Nine Inch Nails Wiki</a>
        </div>
    );
}

export default Jumbotron;