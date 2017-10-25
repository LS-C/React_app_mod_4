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
    super()

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
      .then(json => this.postData(json))
      .then(json => this.fetchDataSetState());
  }

  postData = data => {
    fetch("http://localhost:3000/users", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    });

  };

  patchData = data => {
    fetch("http://localhost:3000/users/" + data.id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify(data)
    });
  };

  fetchDataSetState = () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(json =>
        this.setState({
          contacts: json
        })
      );
  };

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
      person => event.target.value.toLowerCase() === person.last
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
    selectedPerson.first = personObjfromEdit.first.toLowerCase();
    selectedPerson.last = personObjfromEdit.last.toLowerCase();
    selectedPerson.street = personObjfromEdit.street;
    selectedPerson.city = personObjfromEdit.city.toLowerCase();
    selectedPerson.state = personObjfromEdit.state.toLowerCase();
    selectedPerson.postcode = personObjfromEdit.postcode;

    let newContacts = this.state.contacts

    this.setState({
      contacts: newContacts.map(person => {
        if (person === personObjfromEdit.selectedPerson) {
          return selectedPerson
        } else {
          return person
        }
      }),
      selectedPerson,
      clickedPersonLastName: personObjfromEdit.last.split(" ")[1],
      displayForm: false
    });

    this.patchData(selectedPerson);
  };

  render() {
    console.log(this.state.contacts);
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
