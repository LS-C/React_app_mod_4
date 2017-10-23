import React from "react";
import { Form, Button } from "semantic-ui-react";

class EditCard extends React.Component {
    constructor(props) {
        super();

        this.state = {
            selectedPerson: props.selectedPerson,
            first: props.selectedPerson.name.first,
            last: props.selectedPerson.name.last,
            email: props.selectedPerson.email,
            cell: props.selectedPerson.cell,
            street: props.selectedPerson.location.street,
            city: props.selectedPerson.location.city,
            state: props.selectedPerson.location.state,
            postcode: props.selectedPerson.location.postcode
        };
    }

    handleClick = event => {
        var a = [event.target.name];
        event.target.value.length === 0
            ? alert("Please enter a valid input.")
            : this.setState({
                  [event.target.name]: event.target.value.toLowerCase()
              });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    };

    capitalize(x) {
        var firstLetter = x[0].toUpperCase();
        var cap = firstLetter + x.slice(1);
        return cap;
    }

    render() {
        console.log(this.state.first);
        return (
            <div className="animated fadeInRight">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Form onChange={this.handleClick} onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="First Name"
                            name="first"
                            value={this.capitalize(this.state.first)}
                        />
                        <Form.Input
                            label="Last Name"
                            name="last"
                            value={this.capitalize(this.state.last)}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Email"
                            name="email"
                            value={this.state.email}
                        />
                        <Form.Input
                            label="Contact"
                            name="cell"
                            value={this.state.cell}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="Street Address"
                            name="street"
                            value={this.state.street}
                        />
                        <Form.Input
                            label="City"
                            name="city"
                            value={this.capitalize(this.state.city)}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input
                            label="State"
                            name="state"
                            value={this.capitalize(this.state.state)}
                        />
                        <Form.Input
                            label="Zip Code"
                            name="postcode"
                            value={this.state.postcode}
                        />
                    </Form.Group>
                    <Button type="submit">Submit Update</Button>
                </Form>
            </div>
        );
    }
}

export default EditCard;
