import React from 'react';

function Press() {
    return (
        <section id="press">
            <img className="press-logo" src={require("../images/TechCrunch.png")} alt="tc-logo"/>
            <img className="press-logo" src={require("../images/tnw.png")} alt="tnw-logo"/>
            <img className="press-logo" src={require("../images/bizinsider.png")} alt="biz-insider-logo"/>
            <img className="press-logo" src={require("../images/mashable.png")} alt="mashable-logo"/>
        </section>
    )
}

export default Press;