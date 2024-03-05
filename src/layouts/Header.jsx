import React from "react";
import { Button, Container} from "@mui/material";
import rightarrow from '../assets/images/icons/white-right-arrow.svg'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import logo from '../assets/images/logo/logo.svg'
import '../styles/layouts/header.css'
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
  
function Header(){
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return(
        
        <>
            <div className="app_title">
                <Container>
                    <ul>
                        <li className="app_title_logo">
                            <Link to="/">
                                <img className="logo" src={logo}/>
                            </Link>
                        </li>
                    </ul>
                </Container>
            </div>
        <section className="login_in">
            <div>
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
                    {/* {open === "otp-page" ? <Enter_otp /> : <Log_in setOpen={setOpen} />} */}
                </Box>
                </Fade>
            </Modal>
            </div>

        </section>
            </>
    )
}
export default Header;