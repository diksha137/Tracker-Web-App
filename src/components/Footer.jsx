import React from "react"

function Footer(){

    const new_date=new Date();
    const date= new_date.getFullYear();
    return (
        <footer>
            <p>Copyright @ {date}</p>
        </footer>
    );
}


export default Footer;