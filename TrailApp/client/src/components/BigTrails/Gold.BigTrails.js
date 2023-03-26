import { Container } from '@material-ui/core';
import gold from '../../images/gold.png';
import useStyles from './styles.js';

const Gold = () => {

    const classes = useStyles();

    return (
    <Container component="main" maxWidth="lg">
        <img className={classes.image} src={gold} alt="Gold Trail"/>
    </Container>

    );
};

export default Gold;