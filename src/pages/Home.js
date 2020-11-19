import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, Button, CardActionArea, CardMedia, CardContent, Typography, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: '250px',
    // width: '250px'
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={4}>

          {
            [1, 2, 3, 4].map((item, index) => {
              return (
                <Grid item xs={6} md={4}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="120"
                        image="https://blog.datawrapper.de/img/posts/introducing-scatter-plot-1.gif"
                        title="Contemplative Reptile"
                        style={{ borderBottom: '1px solid #f4f4f4' }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="subtitle1">
                          Lizard
              </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                          across all continents except Antarctica
              </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Share
            </Button>
                      <Button size="small" color="primary">
                        Learn More
            </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }


        </Grid>
      </div>
    </Container>
  );
}
