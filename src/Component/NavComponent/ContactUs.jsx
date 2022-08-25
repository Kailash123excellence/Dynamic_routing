import React from "react";

export default function ContactUs() {
  return (
    <div className="contactContent">
      <p className="headingContact">Contact</p>
      <p className="contactStatement">
        Reach out to us anywhere and we’ll get back to you. Let’s talk about:
      </p>
      <form>
        <div class="mb-3 contactForm">
          <label for="exampleInputEmail1" class="form-label labelHeading">
            How can we help you?
          </label>
          <div class="input-group ">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Want to know Hiring process</option>
              <option value="2">Are you looking for create web Application</option>
              <option value="3">other...</option>
            </select>
          </div>
          <button type="submit" class="btn w-100 mt-3 submitBtn">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
