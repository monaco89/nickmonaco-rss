import React from "react";
import { Modal } from "rsuite";
import SignInForm from "./Forms/SignInForm";

const SignInModal = ({ showSignIn, toggleSignIn }) => (
  <Modal show={showSignIn} onHide={() => toggleSignIn(false)}>
    <Modal.Header>
      <Modal.Title>Sign In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <SignInForm toggleSignIn={toggleSignIn} />
    </Modal.Body>
  </Modal>
);

export default SignInModal;
