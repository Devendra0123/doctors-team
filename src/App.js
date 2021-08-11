import React from "react";
import Navbar from "./component/navbar";
import LandingPage from "./component/landingPage";
import Doctorlist from "./component/doctorList";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AllMedicine from "./component/allMedicine";
import "./styles.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import BlogForm from "./component/blogForm";
import Blogpost from "./component/blogpost";
import News from "./component/news";
import RegisterDoctor from "./component/registerDoctor";
import RegisterPatient from "./component/registerPatient";
import SingleNews from "./component/singleNews";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <LandingPage />
              <Doctorlist />
              <AllMedicine />
              <Blogpost />
              <News />
            </Route>
            <Route path="/blog_form">
              <BlogForm />
            </Route>
            <Route exact path="/register_doctor">
              <RegisterDoctor />
            </Route>
            <Route exact path="/register_patient">
              <RegisterPatient />
            </Route>
            <Route exact path="/news/:newsId" component={SingleNews} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
