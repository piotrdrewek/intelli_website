import React from 'react';
import {  Button } from '@mui/material';
import { ReactComponent as CatImg } from "./logo.svg";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render() {
console.log("render");
      return (
        <div className='Appbar'>
          <CatImg height={80} width={160} />
          <div className='Menu'>
            <Button component={Link} to={'/'} color='inherit' size='large'>Home</Button>
            <Button component={Link} to={'/services'} color='inherit' size='large'>Services</Button>
            <Button component={Link} to={'/about'} color='inherit' size='large'>About</Button>
            <Button component={Link} to={'/contact'} color='inherit' size='large'>Contact</Button>
          </div>
        </div>
        );
        }
    }
    export default Navbar;