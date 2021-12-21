import React from 'react'; 
import { Typography,  Card, CardContent } from '@material-ui/core';
import { useDispatch } from 'react-redux';
 

const Markermap = ({marker: marker, setCurrentId }) => {
    const dispatch = useDispatch(); 

    return(

      
    <Card style={{ width: '100%' }}  >
        
      <CardContent>
        <Typography variant="body2" >ss</Typography>
      </CardContent>
        
    </Card>

   
    );
}   
export default Markermap;
