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
          marginTop: 5,
          justifyContent: 'center',
        },
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: "#FFFFFF",
        marginLeft:'13px'
    },
    tittle: {
        alignItems: 'center',
        display: 'flex',
        fontSize:'40px',
        marginRight:'200px',
        color: "#FFFFFF",
    },
    dropdown: {
        marginRight:'10px',
        background: 'transparent',
        border: 'transparent',
    },
    dropdown_text: {
        fontSize:'20px',
    },

}));