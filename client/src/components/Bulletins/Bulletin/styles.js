import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },

  tag: {
    font: 'Arial',
    background: '#588fe5',
    display: 'inline-block',
    color: '#fff',
    position: 'relative',
    padding: '10px',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
    margin: '0 30px 0 0',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#739fe4'
    },
    tagBefonore : {
      background: '#fff',
      width: '10px',
      height: '10px',
      content: "",
      display: 'inline-block',
      borderRadius: '20px',
      margin: '0 5px 0 0',

    },
    tagAfter: {
      display: 'inline-block',
      border: '19px solid',
      borderColor: 'transparent transparent transparent #588fe5',
      height: 0,
      width: 0,
      position: 'absolute',
      right: '-38px',
      top: 0,
      content: "",
      display: 'inline-block',
    }

    
},







 


});