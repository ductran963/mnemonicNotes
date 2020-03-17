/* eslint-disable */
import React, { useState, useEffect, Component } from "react";
import {  NavLink } from "react-router-dom";
// import React, { Component } from "react";
import "../App.css";
// import ReactDOM from 'react-dom';
import API from '../utils/API'
import 'typeface-roboto';
// import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Input from '@material-ui/core/Input'
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
// import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';

// import ClientsRedirect from "./pages/Clients";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import WorkIcon from '@material-ui/icons/Work';
import CreateIcon from '@material-ui/icons/Create';
// import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
// import e from "express";
import { Input, TextArea, FormBtn } from "../components/Form";
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
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    headline: {
        textAlign: 'center', // <-- the magic


    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "95%",
        height: "200%",

    },

}));

const inputStyle = {
   
    height: 40,
    width: "100em",
  };


class App extends Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
          </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }
}
export default function ClientForm() {
    // Setting our component's initial state
    const [clients, setClients] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all clients and store them with setClients
    useEffect(() => {
        loadClients()
    }, [])

    // Loads all clients and sets them to clients
    function loadClients() {
        API.getClients()
            .then(res =>
                setClients(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a client from the database with a given id, then reloads clients from the db
    // function deleteClient(id) {
    //     API.deleteClient(id)
    //         .then(res => loadClients())
    //         .catch(err => console.log(err));
    // }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveClient method to save the client data
    // Then reload clients from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name && formObject.notes) {
            API.saveClient({
                name: formObject.name,
                location: formObject.location,
                contactInfo: formObject.occupation,

                specialNotes: formObject.notes
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();


    return (
        <React.Fragment>
            <CssBaseline />
            
            <main>
                {/* Hero unit */}
                
                <Container className={classes.cardGrid} maxWidth="md">
                    <Card className={classes.card}>
                        <br />
                        <Typography component = "h2" className={classes.headline} gutterBottom variant="h2" justifyContent="center">
                            Add Friend Notes
                      </Typography>

                        <CardContent className={classes.cardContent}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <Typography>
                                    <AccountCircle /> Name:
                                </Typography>
                                <Input
                                    onChange={handleInputChange}
                                    name="name"
                                    placeholder="name"
                                    style={inputStyle}
                                />
                                <Typography>
                                    <LocationOnIcon /> Location:
                                </Typography>
                                <Input
                                    onChange={handleInputChange}
                                    name="location"
                                    placeholder="location"
                                    style={inputStyle}
                                />
                                <Typography>
                                    <WorkIcon /> Occupation:
                                </Typography>
                                 <Input
                                    onChange={handleInputChange}
                                    name="occupation"
                                    placeholder="occupation"
                                    style={inputStyle}
                                />
                                <Typography>
                                    <PhoneIcon /> Phone:
                                </Typography>
                                 <Input
                                    onChange={handleInputChange}
                                    name="phone"
                                    placeholder="phone"
                                    style={inputStyle}
                                    
                                />
                                <Typography>
                                    <CreateIcon /> Notes:
                                </Typography>
                                <TextArea
                                    onChange={handleInputChange}
                                    name="notes"
                                    placeholder="notes"
                                    style={{width: "500%"}}
                                    
                                    
                                />
                                
                                {/* <FormBtn
                                    disabled={!(formObject.name && formObject.notes)}
                                    onClick={handleFormSubmit}
                                >
                                    <NavLink to="/" style={{color: 'secondary', textDecoration: 'none'}} >Saved Clients</NavLink>
                                    
                                </FormBtn> */}


                                
                                
                                



                            </form>
                            

                        </CardContent>
                        <CardActions>
                            {/* <Button onclick={() => handleFormSubmit()} className={classes.textField} variant="contained" color="primary">
                                Submit <SendIcon />

                            </Button> */}
                            <FormBtn
                                disabled={!(formObject.name && formObject.notes)}
                                onClick={handleFormSubmit}
                                
                            >
                                <NavLink to="/" style={{ color: 'secondary', textDecoration: 'none' }} >Saved Clients</NavLink>
                                
                               
                            </FormBtn>

                        </CardActions>
                        <br />
                        
                        
                    </Card>
                    
                </Container>
              
            </main>
            {/* Footer */}
            {/* <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
          </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Add links or copy right info
          </Typography>

            </footer> */}
            {/* End footer */}
        </React.Fragment>
    );
}



