import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    inner: {
      overflow: 'hidden',
      transition: 'max-height 0.2s ease',
    },

  },
  question:{
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },


});