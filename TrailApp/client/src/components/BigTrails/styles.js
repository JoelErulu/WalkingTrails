import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  textfield: {
    marginBottom: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
}));