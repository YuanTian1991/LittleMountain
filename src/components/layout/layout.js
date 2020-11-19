import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


import { Container, Box, Toolbar, Grid, Button } from '@material-ui/core';
import StickyFooter from "./footer.js"

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { classes } = this.props

    return (
      <Container maxWidth="lg">
        <Box>
          <Toolbar className={classes.toolbarSecondary}>
            <Grid container spacing="1" alignItems="center">
              <Grid item>              <Link
                to='/'
                className={classes.Link}
              >
                Little Mountain
              </Link></Grid>
              <Grid>
                <p style={{ fontSize: '0.85em', color: 'darkgrey' }}> &nbsp;&nbsp;&nbsp;A set of online Bioinformatic Analysis Tool </p>
              </Grid>
            </Grid>


            <div className={classes.toolbarButtons}>
              <a
                href='https://yuantian1991.github.io/'
                className={classes.Link}
              >
                Tian
              </a>
            </div>
          </Toolbar>
        </Box>

        <Container maxWidth="lg" className={classes.mainContainer}>
          <main>{this.props.children}</main>
        </Container>
        <StickyFooter />
      </Container>

    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  toolbarSecondary: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarButtons: {
    marginLeft: 'auto',
  },
  Link: {
    textDecoration: "none",
    color: 'black',
    fontWeight: 'bold',
    "&:hover ": {
      color: 'black',
      textDecoration: "none",
    }
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  toolbar: {
    paddingRight: theme.spacing(3),
    cursor: 'pointer'
  },
  mainContainer: {
    minHeight: '80vh'
  }
});

export default (withStyles(styles)(Layout))