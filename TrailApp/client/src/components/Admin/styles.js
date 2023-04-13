import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
      flexDirection: 'row',
  },
  gridItem: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  submit: {
    padding: theme.spacing(1),
    top: '5%',
  },
  welcomeAdmin: {
    border: 'soild',
    background: 'white',
    textAlign: 'center',
    fontSize: 40,
  },
}));