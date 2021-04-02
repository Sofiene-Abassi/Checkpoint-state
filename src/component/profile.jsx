import React, { Component } from "react";
import "./profile.css";
class Profile extends Component {
    render() {
        return (
            <div>
                <div className="containner">
                    <h1>Welcome</h1>
                    {this.props.children}
                    <h2>{this.props.fullName}</h2>
                    <h3>{this.props.bio}</h3>
                </div>
            </div>
        );
    }
}

export default Profile;
