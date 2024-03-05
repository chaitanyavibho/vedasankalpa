import React from "react";
import Header from "../layouts/Header";
import { Container } from "@mui/material";
import '../styles/pages/terms_conditions.css';
import Footer from '../layouts/Footer';


function Privacy_policy(){
    return(
        <>
        <Header/>
        <section className="terms_conditions">
            <Container>
                <div className="terms_conditions_title">
                    <h2>Privacy policy</h2>
                </div>
            </Container>
        </section>
        <section className="terms_conditions_content_main">
            <Container>
                <div className="terms_conditions_content">
                    <h3>Privacy Policy for the Platform</h3>
                    <p>Welcome to VedaSankalpa! At VedaSankalpa, we prioritize safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our website and services. By accessing our Site or using our Service, you agree to this Privacy Policy and our Terms of Use</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Usage Terms</h3>
                    <p>Users agree to provide accurate information about fundraisers, use Donations within a reasonable time for the intended purpose, and bear applicable tax liabilities. Dishonored Payments must be rectified promptly. Users are responsible for updating bank details or legal certificates.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Terms for Donors</h3>
                    <p>The minimum donation amount is subject to change. Donors can remain anonymous, and donations are processed securely. Donors are encouraged to conduct due diligence before donating. All donations made are non-refundable, and the Platform reserves the right to modify or suspend the donation facility.</p>
                    <p>These terms are subject to amendments, and continued use implies acceptance of any changes. Users not agreeing to amendments can contact <a href="mailto:support@vedasankalpa.com">support@vedasankalpa.com</a> . The Platform is not liable for issues arising from payment methods, and third-party payment gateways process personal information at their responsibility.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Terms for Pujas and Homam</h3>
                    <p>The amount for the Puja or Homam services is contingent upon the specific rituals chosen by the User/Devotee. Users are required to input all the necessary details for the selected Puja or Homam, and the provided information is processed securely.</p>
                    <p>These terms may undergo amendments, and the ongoing use of the services implies acceptance of any changes. Users who do not agree with the amendments can reach out to <a href="mailto:support@vedasankalpa.com">support@vedasankalpa.com</a> . It is important to note that the Platform is not responsible for issues related to payment methods, and the processing of personal information by third-party payment gateways is their sole responsibility.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Information collected on the website from a user</h3>
                    <p><span>Information collected via Website</span> : We collect "Personal Information" and "Non-Personal Information". Personal Information includes details like your name, email, phone number, gotra/gotram, nakshatra/nakshatram, rashi, date of birth and address, provided during registration. Non-personal information includes anonymous data, demographic information, and preferences.</p>
                    <p><span>Information collected via Technology</span> : We use cookies to enhance your experience, tracking information like referring URLs, browser type, device details, and access timestamps. Cookies help personalize services based on user preferences.</p>
                    <p><span> Information you provide us</span> : Creating an account requires your email, username, and mobile OTP. By registering, you authorise us to collect, store, and use your email address as outlined in this Privacy Policy.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Use and Share of Information collected from the user</h3>
                    <p><span>Personal Information</span> : We do not sell, trade, or rent your Personal Information for marketing without consent. Personal Information is shared with vendors supporting our services. We may disclose it if required by law or for legal processes.</p>
                    <p><span>Non-Personal Information</span> : Non-Personal Information enhances services, analyses usage patterns, and may be shared with partners and advertisers. In business transactions, your Personal Information may be transferred as part of our assets.</p>
                    <p><span>Protection of Information gathered</span> : Users are obligated to furnish accurate, complete, and up-to-date registration information. Failure to comply with this requirement constitutes a breach and may lead to the immediate termination of the User Account.</p>
                    <p><span>Confidentiality and Security</span> : We implement security measures, including encryption and firewalls, to protect against unauthorized access. However, no method is foolproof. By using our Service, you acknowledge associated risks.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Users Rights Regarding Personal Information</h3>
                    <p>You have the right to control our contact with you for marketing purposes at any time. If you receive promotional communications, you can opt out of further marketing messages by following the unsubscribe instructions included in each promotional email. Alternatively, you can express your preference not to receive marketing communications from us by emailing <a href="mailto:Support@VedaSankalpa.com">Support@VedaSankalpa.com</a> or using the WhatsApp chat option on the Site.</p>
                    <p>It's important to note that even if you choose to opt out of promotional messages, you may still receive administrative emails, such as periodic updates to our Privacy Policy, to keep you informed about essential information.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Links to Other Websites</h3>
                    <p>Our Privacy Policy applies to information collected on our Site. We are not responsible for the privacy practices of linked websites or applications.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Updates to Our Privacy Policy</h3>
                    <p>The Company retains the right to modify this policy and our Terms of Service as needed. We will keep you informed of substantial changes to our Privacy Policy by sending a notice to the primary email address provided in your account or by prominently displaying a notice on our site. Significant changes will be effective 30 days after such notification. Non-material changes or clarifications will take immediate effect. It is advisable to regularly check the Site and this privacy page for any updates</p>
                    <p>If you have queries or questions, contact us at <a href="mailto:Support@VedaSankalpa.com.">Support@VedaSankalpa.com.</a></p>
                    <p><strong>Note :</strong> <span className="services">VedaSankalpa.com</span> operates under Vaidika Dharma Services Private Limited, will be receiving Invoices and bill in the name of Vaidika Dharma Services Private Limited</p>
                </div>
            </Container>
        </section>
        <Footer/>
        </>
    )
}
export default Privacy_policy;