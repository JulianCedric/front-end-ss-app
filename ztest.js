






import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;



// 7/22 JP Notes: MUCH cleaner code - easier to pass props (eliminated one level by moving state / functions / state-->props from App.js to AccountContainer.js)
  // also: additional notes below (from old version earlier today)

  import React from "react";
  import Transaction from "./Transaction";
  
  const TransactionsList = (props) => {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Session</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Student</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Notes</h3>
            </th>
          </tr>
          {props.transactions.map(transaction=>(<Transaction key={transaction.id} {...transaction}/>))}
        </tbody>
      </table>
    );
  };
  
  export default TransactionsList;
  
  /////////////////////////////////////////////////
  
  // 7/22 JP Notes: TransactionsList was originally a functional component, but I changed it: 
  
  // import React from "react";
  // import Transaction from "./Transaction";
  
  // const TransactionsList = () => {
  //   return (
  //     <table className="ui celled striped padded table">
  //       <tbody>
  //         <tr>
  //           <th>
  //             <h3 className="ui center aligned header">Date</h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">Description</h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">Category</h3>
  //           </th>
  //           <th>
  //             <h3 className="ui center aligned header">Amount
  //             </h3>
  //           </th>
  //         </tr>
  //         {/* render Transactions here */}
  //       </tbody>
  //     </table>
  //   );
  // };
  
  // export default TransactionsList;
  



create_table "sessions", id: false, force: :cascade do |t|
t.bigint "tutor_id", null: false
t.bigint "student_id", null: false
t.string "date"
t.boolean "preAssessmentCompletionStatus"
t.text "comment"
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false
end


<tr>
                <th>Date</th>
                <th>Student</th>
                <th>My Notes</th>
                <th> + </th>
                <th> - </th>
            </tr>















// 7/28 - Checklist

// Display about page content onto homepage 





// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useHistory,
//   useLocation,
//   useParams
// } from "react-router-dom";

// // This example shows how to render two different screens
// // (or the same screen in a different context) at the same URL,
// // depending on how you got there.
// //
// // Click the "featured images" and see them full screen. Then
// // "visit the gallery" and click on the colors. Note the URL and
// // the component are the same as before but now we see them
// // inside a modal on top of the gallery screen.

// export default function ModalGalleryExample() {
//   return (
//     <Router>
//       <ModalSwitch />
//     </Router>
//   );
// }

// function ModalSwitch() {
//   let location = useLocation();

//   // This piece of state is set when one of the
//   // gallery links is clicked. The `background` state
//   // is the location that we were at when one of
//   // the gallery links was clicked. If it's there,
//   // use it as the location for the <Switch> so
//   // we show the gallery in the background, behind
//   // the modal.
//   let background = location.state && location.state.background;

//   return (
//     <div>
//       <Switch location={background || location}>
//         <Route exact path="/" children={<Home />} />
//         <Route path="/gallery" children={<Gallery />} />
//         <Route path="/img/:id" children={<ImageView />} />
//       </Switch>

//       {/* Show the modal when a background page is set */}
//       {background && <Route path="/img/:id" children={<Modal />} />}
//     </div>
//   );
// }

// const IMAGES = [
//   { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
//   { id: 1, title: "Lime Green", color: "LimeGreen" },
//   { id: 2, title: "Tomato", color: "Tomato" },
//   { id: 3, title: "Seven Ate Nine", color: "#789" },
//   { id: 4, title: "Crimson", color: "Crimson" }
// ];

// function Thumbnail({ color }) {
//   return (
//     <div
//       style={{
//         width: 50,
//         height: 50,
//         background: color
//       }}
//     />
//   );
// }

// function Image({ color }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 400,
//         background: color
//       }}
//     />
//   );
// }

// function Home() {
//   return (
//     <div>
//       <Link to="/gallery">Visit the Gallery</Link>
//       <h2>Featured Images</h2>
//       <ul>
//         <li>
//           <Link to="/img/2">Tomato</Link>
//         </li>
//         <li>
//           <Link to="/img/4">Crimson</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// function Gallery() {
//   let location = useLocation();

//   return (
//     <div>
//       {IMAGES.map(i => (
//         <Link
//           key={i.id}
//           to={{
//             pathname: `/img/${i.id}`,
//             // This is the trick! This link sets
//             // the `background` in location state.
//             state: { background: location }
//           }}
//         >
//           <Thumbnail color={i.color} />
//           <p>{i.title}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// function ImageView() {
//   let { id } = useParams();
//   let image = IMAGES[parseInt(id, 10)];

//   if (!image) return <div>Image not found</div>;

//   return (
//     <div>
//       <h1>{image.title}</h1>
//       <Image color={image.color} />
//     </div>
//   );
// }

// function Modal() {
//   let history = useHistory();
//   let { id } = useParams();
//   let image = IMAGES[parseInt(id, 10)];

//   if (!image) return null;

//   let back = e => {
//     e.stopPropagation();
//     history.goBack();
//   };

//   return (
//     <div
//       onClick={back}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//         background: "rgba(0, 0, 0, 0.15)"
//       }}
//     >
//       <div
//         className="modal"
//         style={{
//           position: "absolute",
//           background: "#fff",
//           top: 25,
//           left: "10%",
//           right: "10%",
//           padding: 15,
//           border: "2px solid #444"
//         }}
//       >
//         <h1>{image.title}</h1>
//         <Image color={image.color} />
//         <button type="button" onClick={back}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// // App.js changes: 


// <Route exact path="/sessions/new" render={(props) => <NewSessionForm handleNewSession={this.handleNewSession} {...props}/>}/>


// // Home.js change: 

// componentDidMount(){
//   fetch(API)
//   .then(resp => resp.json())
//   .then(sessions => this.props.x)
// }

// // 'state' moved to App.js so that handleNewSession() could be passed direclty to NewSessionForm.js

// componentDidMount(){
//   fetch(API)
//   .then(resp => resp.json())
//   .then(sessions => this.setState({sessions: [...this.state.sessions, newSession]}))
// }

// <Route exact path="/sessions/new" render={(props) => <NewSessionForm {...props} />}/>
