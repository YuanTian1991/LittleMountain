import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { CssBaseline, Container, Typography, Paper, Tabs, Tab, Box, TextField, Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PvalueDistribution() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="lg">
        <Typography variant="h4" gutterBottom style={{ fontWeight: "900" }}>
          P Value Distribution
        </Typography>
        <Typography variant="body1">
          Paste a table contain just one "pValue" column header into below textArea.
        </Typography>


        <Paper square elevation={0} style={{ marginTop: '1em', backgroundColor: 'rgb(0,0,0,0)' }}>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Paste Area" />
            <Tab label="Table" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <TextField
              autoFocus
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              rowsMax={10}
              InputLabelProps={{
                shrink: true
              }}
              helperText={
                <Typography
                  variant="caption"
                  className={classes.centerText}
                  display="block"
                >
                  Check how to <Button size="small">copy data directly from R session</Button> and paste here.
                </Typography>
              }
              placeholder="Paste your Differential Methylation/Expression/AnyOmic Table here.
-
1. There must be one column header as 'pValue'
2. Click below help link to see how to copy from R directly"
              margin="normal"
            />



          </TabPanel>
        </Paper>
      </Container>
    </div >
  );
}
