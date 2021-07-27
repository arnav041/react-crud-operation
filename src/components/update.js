import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Update() {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("FIRST_NAME"));
    setSecondName(localStorage.getItem("SECOND_NAME"));
    setCheckbox(localStorage.getItem("CHECKBOX"));
  }, []);

  const postData = () => {
    axios.get("https://60ff6e102574110017078966.mockapi.io/mockdata");

    setFirstName("");
    setSecondName("");
    setCheckbox("");
  };

  const updateAPIData = () => {
    axios
      .put(`https://60ff6e102574110017078966.mockapi.io/mockdata/${id}`, {
        firstName,
        secondName,
        checkbox
      })
      .then(() => {
        history.push("/edit");
      });
  };

  return (
    <Form onSubmit={postData}>
      <Form.Field>
        <label>First Name</label>
        <input
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          value={secondName}
          placeholder="Last Name"
          onChange={(e) => setSecondName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  );
}

export default Update;
