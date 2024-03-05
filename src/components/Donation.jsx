import React from "react";
import donate from '../assets/images/donate-now.png'
import sslb_bg from '../assets/images/donate-bg.png'
import { Button, Link } from "@mui/material";
import '../styles/components/donation.css'

function Donation (){
    return(

        <div className="small_support_large_box">
        <div className="bg">
            <img src={sslb_bg}/>
        </div>
        <div className="small_support_overlap">
        <div className="small_support_large_box_image">
            <img src={donate}/>
        </div>
        <div className="small_support_large_box_content">
            <h3>Small support large</h3>
            <p>Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences Lorem Epson is a dummy text to fill the sentences </p>
        </div>
        </div>
    </div>
    )
}
export default Donation;