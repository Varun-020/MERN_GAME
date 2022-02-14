import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: 280,
        background: "#F08179",
        color: "#FFF",

    },
    title: {
        fontSize: 18,
        fontWeight: 600
    },
    pos: {
        marginBottom: 12,
    },
    action: {
        display: 'flex',
        justifyContent: "center"
    },
    content: {
        padding: 5,
        display: 'flex',
        justifyContent: "center"
    },
    banner: {
        border: "1px solid red",
        height: '50',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

function Cards({ link, name }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Typography className={classes.title} gutterBottom>
                    {name}
                </Typography>
                <CardMedia
                    className={classes.media}
                    image="./images/dealer.jpg"
                    title="Paella dish"
                />
            </CardContent>
            <CardActions className={classes.action}>
                <Link to={link}>
                    <Button size="small" color="primary" variant="contained">Play</Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default Cards