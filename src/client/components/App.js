import React, { Component } from "react";
import Header from "./Header";

import "../scss/app.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <div>
          <section className="form">
            <div className="form__container">
              <form
                method="post"
                action="fileupload"
                enctype="multipart/form-data"
                class="form__data"
              >
                <input type="file" name="filetoupload" />{" "}
                <input type="submit" />
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
