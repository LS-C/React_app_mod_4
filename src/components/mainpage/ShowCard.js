import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class ShowCard extends React.Component {
    capitalize(x) {
        var firstLetter = x[0].toUpperCase();
        var cap = firstLetter + x.slice(1);
        return cap;
    }

    render() {
        return (
            <div>
                <div class="ui centered card">
                    <div class="image">
                        <img src={this.props.selectedPerson.picture.large} />
                    </div>
                    <div class="content">
                        <a class="header">
                            {this.capitalize(
                                this.props.selectedPerson.name.first
                            )}{" "}
                            {this.capitalize(
                                this.props.selectedPerson.name.last
                            )}
                        </a>
                        <br />
                        <div class="meta">
                            <p>Email: {this.props.selectedPerson.email}</p>
                            <p>Phone: {this.props.selectedPerson.cell}</p>
                            <p> {this.props.selectedPerson.location.street}</p>
                            <p>
                                {" "}
                                {this.capitalize(
                                    this.props.selectedPerson.location.city
                                )}
                            </p>
                            <p>
                                {" "}
                                {this.capitalize(
                                    this.props.selectedPerson.location.state
                                )}
                            </p>
                            <p>
                                {" "}
                                {this.props.selectedPerson.location.postcode}
                            </p>
                        </div>
                        <br />
                        <div class="description">
                            {this.capitalize(
                                this.props.selectedPerson.name.first
                            )}{" "}
                            is based in{" "}
                            {this.capitalize(
                                this.props.selectedPerson.location.state
                            )}.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
