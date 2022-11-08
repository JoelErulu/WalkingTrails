import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import trailimage from './trailback.jpg';



export default makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${trailimage})`,
  },
  paper: {
    backgroundColor: 'black',
    opacity: '50%',
    color: 'white',
    boxShadow: '5px 10px 8px #171515',
    textAlign: 'center',
    width: '45%',
    height: '500px',
    display: 'inline-block',
    margin: '5px',

  },
  container: {
    marginLeft: '50px',
  
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