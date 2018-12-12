import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div>
        <section className="form">
          <div className="form__container">
            <form
              method="post"
              action="fileupload"
              enctype="multipart/form-data"
              class="form__data"
            >
              <input type="file" name="filetoupload" /> <input type="submit" />
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
