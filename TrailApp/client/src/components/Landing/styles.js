import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    backgroundColor: '#454B1B',
    boxShadow: 'none',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(3),
  },
  subtitle: {
    marginTop: theme.spacing(3),
    color: 'white',
  },
  body: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));