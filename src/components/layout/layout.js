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
        <Box my={1} >
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

        <Container maxWidth="md">
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
  title: {
    color: "black",
    fontWeight: "900",
    cursor: 'pointer'
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
  smallTitleIcon: {
    marginTop: '1em',
    width: 50, height: 50, borderRadius: 50 / 2,
  },
  TitleIcon: {
    // marginRight: '1em',
    width: 60, height: 60, borderRadius: 60 / 2
  },
  imageIcon: {
    position: "absolute",
    padding: '0.2em',
    // top: "0.5em",
    bottom: '-2em',
    right: '2em',
    height: '5em',
    width: '5em',
    // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  verticalAlign: {
    backgroundColor: `rgba(245, 245, 245, 0)`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: '0em',
  }
});

export default (withStyles(styles)(Layout))