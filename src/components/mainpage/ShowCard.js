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
                        <img src={this.props.selectedPerson.picture} />
                    </div>
                    <div class="content">
                        <a class="header">
                            {this.capitalize(
                                this.props.selectedPerson.first
                            )}{" "}
                            {this.capitalize(this.props.selectedPerson.last)}
                        </a>
                        <br />
                        <div class="meta">
                            <p>Email: {this.props.selectedPerson.email}</p>
                            <p>Phone: {this.props.selectedPerson.cell}</p>
                            <p> {this.props.selectedPerson.street}</p>
                            <p>
                                {" "}
                                {this.capitalize(
                                    this.props.selectedPerson.city
                                )}
                            </p>
                            <p>
                                {" "}
                                {this.capitalize(
                                    this.props.selectedPerson.state
                                )}
                            </p>
                            <p> {this.props.selectedPerson.postcode}</p>
                        </div>
                        <br />
                        <div class="description">
                            {this.capitalize(
                                this.props.selectedPerson.first
                            )}{" "}
                            is based in{" "}
                            {this.capitalize(this.props.selectedPerson.state)}.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowCard;
