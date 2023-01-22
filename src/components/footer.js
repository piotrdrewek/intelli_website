import React from 'react';
import { Typography, Link } from "@mui/material";
import { ReactComponent as CatImg } from "./logo_black.svg";

class Footer extends React.Component {
    render() {

      return (
        <div className='Footer'>
            <div>
              <CatImg height={50} width={70} />
              <Typography color='grey'>INTELLI AUTOMATION SP. Z O. O.</Typography>
            </div>

            <Typography color='grey'> Made By:{' '}
            <Link href="https://www.linkedin.com/in/piotr-drewek/" color='#808080'>Piotr Drewek</Link>
            </Typography>
        </div>
        );
        }
    }
    export default Footer;