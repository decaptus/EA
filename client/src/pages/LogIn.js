import React, {useState,useEffect} from "react";                                           //useeffect going to come the component will update
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';                                        //allows us tu dispatch an action

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import LogIn_Form from '../components/LogIn_Form/LogIn_Form';
import Register_Form from '../components/Register_Form/Register_Form';
import { getPosts } from '../actions/posts';




const LogIn = () => {
  
return(
  <LogIn_Form>
    
  </LogIn_Form>
  
  

      
  
  

  );
  
  

}
    



export default LogIn;




