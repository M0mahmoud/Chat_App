// import React from "react";
// import { Route } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";


// const privateRoute = ({ component: Component, authenticated, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// };

// const PublicRoute = ({ component: Component, authenticated, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       authenticated === false ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/chat" />
//       )
//     }
//   />
// );