import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActions, Button, CardActionArea, CardMedia, CardContent, Typography, Grid, Container, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

import myimage from '../assets/images/PvalueHist.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    textAlign: 'left',
    height: '300px',
  },
}));

export default function Home() {
  const classes = useStyles();

  const myPlots = [
    {
      title: 'P value Distribution',
      link: 'PvalueDistribution',
      des: 'The first demo for little mountain, which reads a table contains p-value, and return the distribution of this p value. Also it returns various adjusted p value distribution.'
    }
  ]

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={4}>

          {
            myPlots.map((item, index) => {
              return (
                <Grid key={index} item xs={6} md={4}>
                  <Card elevation={1} className={classes.card}>
                    <CardActionArea style={{ height: '300px' }} component={Link} to={item.link}>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="120"
                        image={myimage}
                        style={{ borderBottom: '1px solid #f4f4f4' }}
                      />
                      <CardContent>
                        <Typography component="div" color="primary">
                          <Box fontWeight={500} style={{ marginBottom: '0.5em', color: 'black' }}>
                            {item.title}
                          </Box>
                          <Box fontSize="15px" style={{ color: 'darkgrey' }}>
                            {item.des}
                          </Box>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
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
