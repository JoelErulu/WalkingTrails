import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  select: {
    margin: theme.spacing(0, 0, 2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));