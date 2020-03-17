import axios from "axios";

export default {
  // Gets all books
  getClients: function() {
    return axios.get("/api/clients");
  },
  // Gets the book with the given id
  getClient: function(id) {
    return axios.get("/api/clients/" + id);
  },
  // Updates the client with the given id
  updateClient: function(id) {
    return axios.put("/api/clients/" + id);
  },
  // Deletes the book with the given id
  deleteClient: function(id) {
    return axios.delete("/api/clients/" + id);
  },
  // Saves a book to the database
  saveClient: function(clientData) {
    console.log(`client info ${clientData.name}`)
    return axios.post("/api/clients", clientData);
  }
};