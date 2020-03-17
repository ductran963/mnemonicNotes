import Button from '@material-ui/core/Button';
import 'typeface-roboto';
// import React from 'react';
import AppBar from '@material-ui/core/AppBar';

// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
// import API from "../utils/API"
import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Clients from "../src/pages/Clients";
import FriendForm from "../src/pages/FriendForm";
import ClientForm from "../src/pages/ClientForm";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/nav/index";
{/* <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/clientform">clientform</NavLink></li>
            <li><NavLink to="/clientdetail">clientdetail</NavLink></li>
          </ul> */}
// import React, { useState, useEffect, Component } from "react";
// import React, { Component } from "react";
// import "../App.css";
// import ReactDOM from 'react-dom';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));






function App() {

  const classes = useStyles();
  // const preventDefault = event => event.preventDefault();
  return (
    
    <Router>
      <div>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <HomeIcon className={classes.icon} />
              {/* <a href="https://www.w3schools.com">Visit W3Schools.com!</a> */}
              <Typography variant="h6" color="textSecondary" noWrap>

                {/* <Link href="/" onClick={preventDefault} color="inherit">
                  {'Home'}
                </Link> */}
                <Link>
                <NavLink exact to="/"style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                </Link>
                
                
              </Typography>
              
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Mnemonic Notes
              </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  "I'm really good with names"
              </Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        {/* <Link href="./clientform" onClick={preventDefault} color="inherit">

                          {'Add Client'}
                        </Link> */}
                        
                        <NavLink to="/clientform" style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'white', textDecoration: 'none'}}>Add Clients</NavLink>
                        
                        

                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">

                        {/* <Link href="" onClick={preventDefault} color="inherit">
                          {'Add Friend'}
                        </Link> */}
                        
                        <NavLink to="/friendform">Add Friends</NavLink>
                        
                       
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </div>
          </main>
        </React.Fragment>




        <div className="content">
          <Route exact path="/" component={Clients} />
          <Route path="/clientform" component={ClientForm} />
          <Route path="/friendform" component={FriendForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;