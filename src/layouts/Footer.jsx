import { Button, Container} from "@mui/material";
import React from "react";
import '../styles/layouts/footer.css';
import Facebook from '../assets/images/icons/facebook.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Instagram from '../assets/images/icons/instagram.svg';
import Grid from '@mui/material/Grid';
import Download from '../assets/images/icons/download-file.svg';
import Footer_bg from '../assets/images/icons/footer-bg.png'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import logo from '../assets/images/logo/logo.svg'
    import { Link } from "react-router-dom";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:'4px',
  };
function Footer(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        
        <>
         <Modal className="login_modal"
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                timeout: 500,
                },
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                <section className="great-things">
                    <div className="great-things-content">
                        <h2>Great things coming soon</h2>
                        <p>Big ideas drive our tiny but rapidly expanding company. Await updates!</p>
                        <div class="banner-buttons">
                            <Link>
                            <Button onClick={() => handleClose()} disableRipple disableElevation className="banner-btn-1">Close</Button>
                            </Link>
                        </div>
                    </div>
                </section>
                </Box>
                </Fade>
            </Modal>
        <section className="footer">
            <Container>
                <div className="footer-main">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                        <div className="footer-logo">
                            <Link to='/'>
                            <img src={logo} />
                            </Link>
                            <div className="protect_dharma">
                            <h2>Take your Step to Protect Dharma</h2>
                            <p>Join hands with us to partake in multiple Sevas. Embrace the acts of Gau Seva, Annadanam, and extend your support to Temple Construction.</p>
                            </div>
                        <div className="copy-rights-content">
                            <p>Copyright © 2024. Veda Sankalpa. All rights reserved.</p>
                        </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <div className="footer-address">
                        <p><span>Address</span> : Vaidika Dharma Services Pvt. Ltd.Unit No 203, 2nd Floor Suite No.549, SBR CV Towers, Sector-I,Sy No 64, HUDA Techno Enclave, Madhapur, Hyderabad - 500081</p>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                    <div className="services">
                        <p>Services</p>
                        <ul>
                            <li><Button onClick={handleOpen}>Email Marketing</Button></li>
                            <li><Button onClick={handleOpen}>Campaigns</Button></li>
                            <li><Link to='/privacy_policy'>Privacy Policy</Link></li>
                            <li><Link to='/terms_conditions'>Terms & Conditions</Link></li>
                            <li><Link to='/cancellation_policy'>Cancellation Policy</Link></li>
                        </ul>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                    <div className="services about">
                        <p>About</p>
                        <ul>
                            <li><Button onClick={handleOpen}>Our Story</Button></li>
                            <li><Button onClick={handleOpen}>Benefits</Button></li>
                            <li><Button onClick={handleOpen}>Team</Button></li>
                            <li><Button onClick={handleOpen}>Careers</Button></li>
                        </ul>
                        <div className="social-icons">
                        <ul>
                            <li><Link to='https://www.facebook.com/Vedasankalpa' target="_blank"><img src={Facebook}/></Link></li>
                            <li><Link to='https://www.instagram.com/vedasankalpaoriginal?igsh=dnd0eTAwYW8zaGph' target="_blank"><img src={Instagram}/></Link></li>
                        </ul>
                    </div>
                    </div>
                    </Grid>
                    </Grid>
                </div>  
            </Container>
            <div className="Footer_bg">
            <img src={Footer_bg}/>
            </div>
        </section>
       
        </>
    )
}
export default Footer;