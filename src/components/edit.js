import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Edit() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://60ff6e102574110017078966.mockapi.io/mockdata")
      .then((response) => setAPIData(response.data));
  }, []);

  const setData = (data) => {
    let { id, firstName, secondName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("FIRST_NAME", firstName);
    localStorage.setItem("SECOND_NAME", secondName);
    localStorage.setItem("CHECKBOX", checkbox);
  };

  const getData = () => {
    axios
      .get("https://60ff6e102574110017078966.mockapi.io/mockdata")
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`https://60ff6e102574110017078966.mockapi.io/mockdata/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {APIData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.secondName}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Table.Cell>
                <Link to="/update">
                  <Button
                    style={{ cursor: "pointer" }}
                    onClick={() => setData(data)}
                  >
                    Update
                  </Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteData(data.id)}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default Edit;
