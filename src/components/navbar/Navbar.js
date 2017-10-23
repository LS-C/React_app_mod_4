import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    state = { activeItem: "home" };

    render() {
        return (
            <div class="ui menu">
                <div class="header item">Company</div>
                <a class="item" href="/Jobs">
                    Jobs
                </a>
                <a class="item" href="/Contact">
                    Contact Us
                </a>
            </div>
        );
    }
}

export default Navbar;
