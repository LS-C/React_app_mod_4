import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./components/mainpage/MainPage";
import ShowContainer from "./components/mainpage/ShowContainer";
import IndexCard from "./components/mainpage/IndexCard";
import LoadingCard from "./components/mainpage/LoadingCard";
import EditCard from "./components/mainpage/EditCard";
import Jobs from "./components/pages/Jobs";
import Contact from "./components/pages/Contact";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Button, Grid } from "semantic-ui-react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      selectedPersonLastName: "",
      selectedPerson: [],
      displayCard: false,
      displayForm: false
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=25")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  handleClick = event => {
    this.setState({
      selectedPersonLastName: event.target.value,
      displayForm: false
    });
    this.setSelectedPerson(event);
  };

  showForm = () => {
    this.setState({
      displayForm: true
    });
  };

  setSelectedPerson(event) {
    var selectedPerson = this.state.contacts.find(
      person => event.target.value === person.name.last
    );
    this.setState({
      selectedPerson: selectedPerson,
      displayCard: true
    });
  }

  handleSubmit = personObjfromEdit => {
    let selectedPerson = Object.assign({}, personObjfromEdit.selectedPerson);
    selectedPerson.email = personObjfromEdit.email;
    selectedPerson.cell = personObjfromEdit.cell;
    selectedPerson.name.first = personObjfromEdit.first.toLowerCase();
    selectedPerson.name.last = personObjfromEdit.last.toLowerCase();
    selectedPerson.location.street = personObjfromEdit.street;
    selectedPerson.location.city = personObjfromEdit.city.toLowerCase();
    selectedPerson.location.state = personObjfromEdit.state.toLowerCase();
    selectedPerson.location.postcode = personObjfromEdit.postcode;

    this.setState({
      selectedPerson,
      clickedPersonLastName: personObjfromEdit.last.split(" ")[1],
      displayForm: false
    });
  };

  render() {
    console.log(this.state.selectedPersonLastName);
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <SideBar
                  contacts={this.state.contacts}
                  handleClick={this.handleClick}
                />
              </Grid.Column>
              <Grid.Column width={5}>
                {this.state.displayCard ? (
                  <ShowContainer
                    selectedPerson={this.state.selectedPerson}
                    displayCard={this.state.displayCard}
                    showForm={this.showForm}
                  />
                ) : (
                  <IndexCard />
                )}
              </Grid.Column>
              <Grid.Column width={5}>
                {this.state.displayForm ? (
                  <EditCard
                    selectedPerson={this.state.selectedPerson}
                    handleSubmit={this.handleSubmit}
                  />
                ) : (
                  <LoadingCard />
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
