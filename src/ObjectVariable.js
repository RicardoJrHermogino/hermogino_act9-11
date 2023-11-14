    import React from 'react';



    const ObjectVariable = () => {
        return (
            <>
            <br/>
                    <div style={inputContainer}>
                        <form>
                        <span style={txt}>Email</span>
                            <input type="email" placeholder="Enter your email" style={InputStyle}/>
                            <span style={txt}>Password</span>
                            <input type="password" placeholder="***************" style={InputStyle}/>
                            <span style={txt}>Forgot password?</span>
                            <button style={signInbutton}>Login</button>
                        </form>
                    </div>
            
            </>
        );
        
    }


    const inputContainer = {width: "365px", marginLeft: "255px",}
    const txt = {fontFamily: "'Poppins', sans-serif", fontSize:"13px", marginLeft:"15px"};
    const InputStyle = {height: "50px", width: "100%",border: "solid black 1px",borderRadius: "50px", padding: "25px",boxSizing: "border-box",fontSize: "12px",fontFamily: "'Poppins', sans-serif",};
    const signInbutton = {height: "48px", width: "100%",border: "0",borderRadius: "50px",boxSizing: "border-box",fontSize: "15px",fontFamily: "'Poppins', sans-serif", fontWeight:"bold", backgroundColor: "#ccb79f", }

    

    export default ObjectVariable;