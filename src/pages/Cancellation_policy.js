import React from "react";
import Header from "../layouts/Header";
import { Container } from "@mui/material";
import '../styles/pages/terms_conditions.css';
import Footer from '../layouts/Footer';


function Cancellation_policy(){
    return(
        <>
        <Header/>
        <section className="terms_conditions">
            <Container>
                <div className="terms_conditions_title">
                    <h2>Cancellation Policy</h2>
                </div>
            </Container>
        </section>
        <section className="terms_conditions_content_main">
            <Container>
                <div className="terms_conditions_content">
                    <h3>For Donations</h3>
                    <p><span>All Donations made are Non refundable</span></p>
                    <p>We retain the right to make changes to, temporarily or permanently suspend the donation facility, with or without prior notice. In such cases, we shall not be held liable to the Donor or any third party for such modifications or discontinuation. Donations made will be allocated to the directed User, and no substitution of donations or campaigns is permitted.</p>
                    <p>If, for valid reasons, we suspect that the Campaigner has not adhered to the Donor's intentions without prior communication to the Donor and us, we retain the sole discretion to refund the Donation to the Donor. Furthermore, we may choose to withhold any additional disbursement of the Donation, and the Campaigner is expected to promptly comply with such directives.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>For Pujas/Homam</h3>
                    <p>If, for any reason, you are dissatisfied with a booking, we encourage you to familiarize yourself with our Cancellation and Refund Policy. The following terms apply to any religious sevas you have booked with us.</p>
                    <p><span>Your Order Cancellation Rights</span> :  Generally, we do not entertain cancellations. However, if an order was mistakenly booked or duplicated due to technical issues from our payment gateway partner, you may contact us for an order cancellation request via email at support@Vedasankalpa.com. Such requests should be submitted within 3 days of order booking. Please note that we reserve the right to decline cancellation requests that do not meet the specified conditions at our sole discretion.</p>
                    <p><span>Conditions for Refund</span> : Sevas(Puja/Homam) that have been booked and performed are not eligible for refunds. For sevas booked but not yet performed, cancellations can only be made under the stipulated cancellation terms.</p>
                    <p><strong>Note :</strong> <span className="services">VedaSankalpa.com</span> operates under Vaidika Dharma Services Private Limited, will be receiving Invoices and bill in the name of Vaidika Dharma Services Private Limited</p>
                </div>
            </Container>
        </section>
        <Footer/>
        </>
    )
}
export default Cancellation_policy;