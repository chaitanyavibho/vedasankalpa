import React from "react";
import Header from "../layouts/Header";
import { Container } from "@mui/material";
import '../styles/pages/terms_conditions.css';
import Footer from '../layouts/Footer';


function Terms_conditions(){
    return(
        <>
        <Header/>
        <section className="terms_conditions">
            <Container>
                <div className="terms_conditions_title">
                    <h2>Terms and Conditions</h2>
                </div>
            </Container>
        </section>
        <section className="terms_conditions_content_main">
            <Container>
                <div className="terms_conditions_content">
                    <h3>Terms and Conditions for the Platform</h3>
                    <p>These Terms and Conditions govern the relationship between Vaidika Dharma Pvt Ltd or Vedasankalpa ("the Company") and users, including donors, campaigners, recipients, and corporate entities accessing the online giving campaigns and corporate social responsibility services provided by the Platform.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>User Definition</h3>
                    <p>The term "User" refers to donors, campaigners, recipients (individuals, hospitals, or charitable organizations), corporate entities using corporate social responsibility services, and visitors browsing the Platform.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Platform Services</h3>
                    <p>The Platform (Vedasankalpa) facilitates various services, it includes, Allowing Users/Devotees to book sevas with temples, individual purohits/pandits, or a campaigner and performs the seva virtually. Allows User/Devotee to Donate to campaigners, and fundraising events, allow campaigners to raise funds for charitable and social impact activities(Annadaan, Gauseva, temple construction, or tips), online giving programs, and corporate social responsibility services. The Platform acts as an intermediary connecting campaigners with donors.</p>
                    <p>The platform Initiates the campaigns in collaboration with renowned temples, individual purohits/pandits, or trusts/companies, where Vedasankalpa acts as the campaigner.</p>
                    <p>These Terms of Use govern your access to and use of all content, functionality, or services provided on or through Vedasankalpa. and fundraising events, allow campaigners to raise funds for charitable and social impact activities, online giving programs, and corporate social responsibility services. The Platform acts as an intermediary connecting campaigners with donors.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Campaigns and Donations</h3>
                    <p>Campaigners raise funds by asking donors in India and abroad (Donors) to donate money to their programs, projects and listed purposes (Pujas, Homam, Donations) The Platform lists and hosts Users, and acts as an online intermediary that enables Campaigners to connect with desired Donors to make and receive donations. Also, the platform organises Puja and Homam by consulting with Vedapandits.</p>
                    <p>We are only enabling and providing a platform for identified services as captured in these T&Cs, and except fees, tips and the agreed amount by the campaigner paid to us, all transactions whether gratuitous or otherwise shall always be between User and Donor.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Corporate Social Responsibility (CSR) Services</h3>
                    <p>The Platform assists companies and organizations in planning, initiating, and managing CSR activities. This includes services such as CSR policy formulation, program design, monitoring, evaluation, budget computation, grant-making, due diligence, and regulatory support.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>User Eligibility Requirements</h3>
                    <p><span>Individual Users</span> : To use the Platform, individuals must be at least 18 years old and possess the legal capacity to enter into contracts as defined by the Indian Contract Act, 1872. By accessing or utilizing the Platform, you affirm and confirm that you have the competence to enter into a contract, or you have obtained the necessary parental/guardian consent if you are below 18 years of age.</p>
                    <p><span>Charitable Organizations and Legal Entities</span> : For charitable organizations or any legal entities, excluding natural persons, registering on the Platform, it is essential to declare that you are duly authorized by the organization to accept and adhere to these Terms and Conditions (T&Cs). Additionally, you must have the legal authority to bind the organization to the terms outlined in these T&Cs.</p>
                </div>
                <div className="terms_conditions_mini_content">
                    <h3>Registration</h3>
                    <p><span>Exploring Platform Sections</span> : While certain sections of the Platform are accessible without registration, access to all features and sections necessitates user registration. Users can establish an account by creating a username and password (Verification with OTP) for their User Account.</p>
                    <p><span>Onboarding and Verification Process</span> : The registration process may involve an onboarding procedure with user verification conducted before registration. This verification process may also be carried out through third-party entities.</p>
                    <p><span>Registration Obligations</span> : Users are obligated to furnish accurate, complete, and up-to-date registration information. Failure to comply with this requirement constitutes a breach and may lead to the immediate termination of the User Account.</p>
                    <p><span>Confidentiality and Security</span> : Users must ensure the confidentiality of their username and password, refraining from disclosing this information to any third party. The use of the same username and password by multiple users is prohibited. Users shall not utilize another account without explicit permission from the account holder. Any unauthorized use or security breach must be promptly reported in writing to the Platform.</p>
                    <p><strong>Note :</strong> <span className="services">VedaSankalpa.com</span> operates under Vaidika Dharma Services Private Limited, will be receiving Invoices and bill in the name of Vaidika Dharma Services Private Limited</p>
                </div>
            </Container>
        </section>
        <Footer/>
        </>
    )
}
export default Terms_conditions;