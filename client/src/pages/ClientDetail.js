// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// function ClientDetail(props) {
//   const [client, setClient] = useState({})

//   // When this component mounts, grab the client with the _id of props.match.params.id
//   // e.g. localhost:3000/clients/599dcb67f0f16317844583fc
//   const {id} = useParams()
//   useEffect(() => {
//     API.getClient(id)
//       .then(res => setClient(res.data))
//       .catch(err => console.log(err));
//   }, [])

//   return (
//       <Container fluid>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1>
//                 {client.name} by {ClientDetail.name}
//               </h1>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Location</h1>
//               <p>
//                 {client.location}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Telephone</h1>
//               <p>
//                 {client.telephone}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Occupation</h1>
//               <p>
//                 {client.occupation}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-10 md-offset-1">
//             <article>
//               <h1>Special Notes</h1>
//               <p>
//                 {client.specialNotes}
//               </p>
//             </article>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-2">
//             <Link to="/">← Back to Authors</Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default ClientDetail;