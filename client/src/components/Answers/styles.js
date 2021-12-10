import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '90%',
        position: 'relative',
      },
      question:{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      cardActions: {
        padding: '0 16px 25px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
      hover:{
        opacity:0.8
      }
}));