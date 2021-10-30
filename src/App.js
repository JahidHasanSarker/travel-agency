import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddNewService from "./Component/AddNewService/AddNewService";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageAllOrders from "./Component/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Component/MyOrders/MyOrders";
import OrderPlaced from "./Component/OrderPlaced/OrderPlaced";
import Services from "./Component/Services/Services";
import NotFound from "./Component/NotFound/NotFound";
import PrivateRoute from "./Component/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (

        <AuthProvider>
          <Router>
            <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>
                <Route path="/myOrders">
                  <MyOrders />
                </Route>
                <Route path="/manageAllOrders">
                  <ManageAllOrders />
                </Route>
                <Route path="/addNewService">
                  <AddNewService />
                </Route>
                <PrivateRoute path="/orderPlaced/:id">
                  <OrderPlaced />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            <Footer />
          </Router>
        </AuthProvider>
    
  );
}

export default App;
