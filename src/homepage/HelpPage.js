/** @format */

import { Container, Tab, Tabs, Card } from "react-bootstrap";
import Profile from "../profile/Profile";

const HelpPage = () => {
  return (
    <div>
      <h2 style={{ marginTop: "15px", marginBottom: "0px" }}>
        TeaTime Help Page
      </h2>
      <img
        style={{ height: "200px" }}
        thumbnail={true}
        src="https://bycooper.com/wp-content/uploads/2021/03/white-glossy-mug-11oz-handle-on-left-6056aa04aae9a.png"
      ></img>
      {/* 
      <p>
        Confused? Let us offer you a short explanation of how this whole thing
        works...
      </p> */}
      <div>
        <Container style={{ border: "2px" }}>
          <Tabs
            defaultActiveKey="whatIsTeaTime"
            id="help_page_tab"
            className="mb-3"
          >
            <Tab eventKey="whatIsTeaTime" title="What is TeaTime?">
              <p>
                <i>The Tea Application you've long been waiting for...</i>{" "}
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>TeaTime is the nexus for all your tea adventures.</li>
                <li>
                  Αfter creating your own personal account, you can keep track
                  of your teas, browse a huge database of to discover new teas,
                  and construct your very own wish list!
                </li>
                <br></br>
                <li>
                  <b>Tech details:</b> On a more technical note, TeaTime is a
                  full stack application consisting of an Express/Node.js
                  backend and a React Frontend. API calls are made to the
                  Express backend, with full CRUD capabilities on a PSQL
                  database. API calls are also made to the external API,
                  Spoonacular. The frontend was polished with React-Bootstrap.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="gettingStarted" title="Getting Started">
              <ul style={{ textAlign: "left" }}>
                <li>
                  When first entering the TeaTime application, you have two
                  options: <b>Signup</b> and <b>Login</b>
                </li>
                <br></br>
                <li>
                  <b>Login</b> - If you already have an account, select login
                  and enter your username and password.
                </li>
                <li>
                  <b>Signup</b> - If you do not have an account... select signup
                  button. Now, enter your details.
                </li>
                <br></br>
                <li>
                  "Will my password be safe?" - Yes. TeaTime will take your
                  password and <i>encrypt</i> it, never exposing it to sneaky
                  cyber attacks.{" "}
                </li>
                <br></br>
                <li>
                  <b>Local Storage</b> - Did your cat accidentaly close your
                  browser window? It would be a nuisance to have to enter your
                  login details again. Fear not, your account details will be
                  stored on local storage so you only need to access the site
                  again and you will be automatically logged in.
                </li>
                <li>
                  <b>Profile</b> - If you ever want to revist your account
                  details, simply click the profile button on the navigation bar
                  at the top of your page.
                </li>
                <li>
                  <b>Data</b> - all of your tea data will be stored on an
                  external database and will not be lost when you refresh the
                  page, or access the website from a friend's house. That being
                  said, we promise not to sell your data (unless someone offers
                  a great price).
                </li>
              </ul>
            </Tab>
            <Tab eventKey="myTeas" title="Track Your Teas">
              <ul style={{ textAlign: "left" }}>
                <li>
                  One of the amazing features of TeaTime is the ability to track
                  all the teas that you currently own.
                </li>
                <li>
                  Click on the <b>My Teas</b> tab, to access the page.
                </li>
                <br></br>
                <li>
                  <b>Add Tea</b> - The button labeled 'Add New Tea' allows you
                  to manually enter details of the tea that you own.
                </li>
                <li>
                  <b>Add to Wish List</b> - Each tea can be removed from the My
                  Teas list and added to the Wish List by simply clicking on the
                  "+ wish list" button.
                </li>
                <li>
                  <b>Delete Tea</b> - Conversely, you may delete any tea on this
                  page, by simply pressing the button.
                </li>
                <li>
                  <b>Tea Details</b> - Want more details on a particular tea?
                  Just click on it. You will be sent to a page built just for
                  that tea.
                </li>
                <li>
                  <b>Edit Tea</b> - Once you are on a Tea detail page, you can
                  edit the information.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="discover" title="Finding New Teas">
              <ul style={{ textAlign: "left" }}>
                <li>
                  TeaTime gives users the option to discover new teas by
                  searching a huge database. You can even add teas to your
                  WishList or MyTeas.
                </li>
                <li>
                  Click on the <b>Discover</b> tab, to access the page.
                </li>
                <br></br>
                <li>
                  <b>Search</b> - You are greeted by a large search bar. Simply
                  type in any tea you are interested in, and click the blue
                  search button.
                </li>
                <li>
                  <b>Spoonacular</b> - With some help from our friends over at
                  Spoonacular, you can look through their <i>massive</i>{" "}
                  database of teas.
                </li>
                <li>
                  <b>Add to Wish List</b> - Found a tea that you are interested
                  in? Click to add it to your wish list.
                </li>
                <li>
                  <b>Add to My Teas</b> - Do you already own this tea? Add it to
                  My Tea list directly by pressing the button.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="wishList" title="Wish List">
              <ul style={{ textAlign: "left" }}>
                <li>
                  With TeaTime, you can store teas you hope to one day own!
                </li>
                <li>
                  Click on the <b>Wish List</b> tab, to access the page.
                </li>
                <br></br>
                <li>
                  <b>Add to My Teas</b> - Once you purchase the tea, simply
                  click the button to switch it over to your My Teas list.
                </li>
                <li>
                  <b>Delete Tea</b> - Not interested in this tea anymore? You
                  may delete any tea on this page, by simply pressing the
                  button.
                </li>
              </ul>
            </Tab>
            <Tab eventKey="About" title="About the Developer">
              <p>
                My name is Alexander, and I'm just your friendly neighborhood
                developer.
              </p>
              <p>
                <b>Contact me:</b> alexanderaboutanos@gmail.com
              </p>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </div>
  );
};

export default HelpPage;
