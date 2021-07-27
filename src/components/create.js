import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(secondName);
    console.log(checkbox);

    axios.post("https://60ff6e102574110017078966.mockapi.io/mockdata", {
      firstName,
      secondName,
      checkbox
    });

    setFirstName("");
    setSecondName("");
    setCheckbox("");
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
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default Create;
