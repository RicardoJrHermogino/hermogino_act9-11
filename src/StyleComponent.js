import React from 'react';
import {design} from './Style';
import fblogo from './fb.png';
import googlelogo from './google.svg';
import githublogo from './github.svg';


const StyleComponent = () => {
    return (
        <>
        <br/>
            <div style={design.container}>
                    <span style={design.orTxt}>or singin with</span>
                    <div style={design.socAcc}>
                            <img src={googlelogo} alt="Logo" style={design.Google} />
                            <img src={fblogo} alt="Logo" style={design.Fb} />
                            <img src={githublogo} alt="Logo" style={design.Github} />
                    </div>
                    <div style={design.socAcctxt}>
                            <span style={design.Googletxt}>Google</span>
                            <span style={design.Fbtxt}>Facebook</span>
                            <span style={design.Githubtxt}>Github</span>
                    </div>
                    <div style={design.bottom}>
                            <span style={design.DHA}>Don't have an account?</span><br/>
                            <button style={design.button}>Sign up</button>
                    </div>
                    
            </div>
        
        </>
    );
}

export default StyleComponent;