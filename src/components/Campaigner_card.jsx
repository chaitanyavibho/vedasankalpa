import React from "react";
import right_white_arrow from '../assets/images/sepical-offer/right-white-arrow.svg';
import '../styles/components/campaigner_card.css'
import { Button, Link } from "@mui/material";

function Campaigner_card (){

    return(
        <div className="campaigner_card_main">
        <div className="campaigner_card_content">
            <div className="campaigner_box">
                <h3>Homa and Puja</h3>
                <p>Purohith/Temple can register here to perform Pujas and Homas</p>
               
            </div>
            <div className="campaigner_box">
                <h3>Donation</h3>
                <p>An NGO/Trust can register here to have their sevas in the platform</p>
            </div>
            <div className="campaigner_box">
                <h3>Temple construction</h3>
                <p>Temples which are under construction or under renovation can register with us.</p>               
            </div>
            <div className="campaigner_box">
                <h3>Veda Patashala</h3>
                <p>Veda Patashalas are onboarded to perform sevas and provide extended support for patashala.</p>
            </div>
        </div>
    </div>
    )
}
export default Campaigner_card;