import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

function Clients() {
    // Setting our component's initial state
    const [clients, setClients] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all clients and store them with setClientss
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
    function deleteClient(id) {
      API.deleteClient(id)
        .then(res => loadClients())
        .catch(err => console.log(err));
    }
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    // When the form is submitted, use the API.saveClient method to save the client data
    // Then reload clients from the database
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.name && formObject.contactInfo) {
        API.saveClient({
          name: formObject.name,
          location: formObject.location,
          contactInfo: formObject.contactInfo,
          specialNotes: formObject.specialNotes
        })
          .then(res => loadClients())
          .catch(err => console.log(err));
      }
    };
  
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Client Detail Reference</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="contactInfo"
                  placeholder="Contact Info (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="location"
                  placeholder="Location (Optional)"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="specialNotes"
                  placeholder="Special Notes (Optional)"
                />
                <FormBtn
                  disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>My Potential Clients</h1>
              </Jumbotron>
              {clientss.length ? (
                <List>
                  {clients.map(client => (
                    <ListItem key={client._id}>
                      <Link to={"/clients/" + client._id}>
                        <strong>
                          {client.name} by {client.contactInfo}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => deleteClient(client._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Clients;
  