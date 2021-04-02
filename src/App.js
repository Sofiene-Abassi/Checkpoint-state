import React, { Component } from "react";
import "./App.css";
import Profile from "./component/profile";
import MYimage from "./component/Myprofile.png";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Show: false,
            fullName: "Bruce 'Batman ' Wayne",
            bio: "In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman"

           
        };
        this.Show = () => this.setState({ Show: !this.state.Show });
    }
    render() {
        return (
            <div className="App">
                <button className="btn" onClick={this.Show}>
                    Toggle{" "}
                </button>
                {this.state.Show ? (
                    <Profile
                        fullName={this.state.fullName}
                        bio={this.state.bio}
                    >
                        <img className="image" src={MYimage} alt="" />
                    </Profile>
                ) : null}
            </div>
        );
    }
}

export default App;
