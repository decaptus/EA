import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    image: {
        marginLeft: '10px',
        marginTop: '5px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '60px',
        width: '300px',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          marginTop: 20,
          justifyContent: 'center',
        },
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: "#FFFFFF"
    },
      



    }));