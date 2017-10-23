import React from "react";
import ShowCard from "./ShowCard";
import EditCard from "./EditCard";
import { Button } from "semantic-ui-react";

class ShowContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            editCard: false
        };
    }

    render() {
        console.log(this.props.selectedPerson);
        return (
            <div>
                {this.props.displayCard ? (
                    <ShowCard selectedPerson={this.props.selectedPerson} />
                ) : null}
                <br />
                <Button basic color="teal" onClick={this.props.showForm}>
                    {" "}
                    Edit{" "}
                </Button>
            </div>
        );
    }
}

export default ShowContainer;
