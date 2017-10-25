import React from "react";
import { Button } from "semantic-ui-react";

class SideBar extends React.Component {
    capitalize(x) {
        var firstLetter = x[0].toUpperCase();
        var cap = firstLetter + x.slice(1);
        return cap;
    }

    render() {
        var fullNames = this.props.contacts.map(
            person =>
                this.capitalize(person.first) +
                " " +
                this.capitalize(person.last)
        );
        console.log(fullNames);

        var eachName = fullNames.map(name => (
            <div>
                <Button
                    basic
                    color="grey"
                    onClick={this.props.handleClick}
                    value={name.toLowerCase().split(" ")[1]}
                >
                    {name}
                </Button>
            </div>
        ));
        return (
            <div>
                <p>{eachName}</p>
            </div>
        );
    }
}

export default SideBar;
