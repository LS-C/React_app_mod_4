import React from "react";
import { Button, Grid } from "semantic-ui-react";

import ShowContainer from "./ShowContainer";
import LoadingCard from "./LoadingCard";
import EditCard from "./EditCard";
import SideBar from "../sidebar/SideBar";
import IndexCard from "./IndexCard";
class MainPage extends React.Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default MainPage;
