import React from "react";
import axios from "axios";
import CenteredGrid from "../../components/testing/grid";
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      listItems: [
        {
          username: "",
          email: "",
          name: "",
        },
      ],
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then(
    //     // (data) => console.log(JSON.stringify(data))
    //     (data) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: data,
    //       });
    //     }
    //   )
    if (!this.state.isLoaded) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(
          // (data) => console.log(JSON.stringify(data))
          (response) => {
            const list = response.data.slice(0, 5);
            const updatedList = [];
            list.map((u) => {
              updatedList.push({
                username: u.username,
                name: u.name,
                email: u.email,
                id: u.id,
              });
            });
            this.setState({
              isLoaded: true,
              items: response.data,
              listItems: updatedList,
            });
          }
        )
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        .catch((error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        });
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
          console.log("++++++++++++++++", response);
        });
    }
  }
  deleteuser = (i) => {
    const copyitem = this.state.listItems;
    copyitem.map((entry) => {
      if (entry.id === i) {
        copyitem.splice(i.id, 1);
      }
    });
    this.setState({
      listItems: copyitem,
    });
  };
  addUser = (data) => {
    data.preventDefault();
    console.log("data........", data);
  };
  render() {
    const userTable = (result) => (
      <table>
        <thead
          style={{
            color: "black",
            textAlign: "center",
            background: "green",
          }}
        >
          <tr>
            <th>id</th>
            <th> Name</th>
            <th>UserName</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody
          style={{
            color: "black",
            textAlign: "left",
            background: "lightgreen",
          }}
        >
          {result.map((e) => (
            <tr key={e.id}>
              <td style={{ color: "green" }}>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{`${e.address.street}, ${e.address.suite}, ${e.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return (
      <div>
        {this.state.isLoaded ? (
          userTable(this.state.items)
        ) : (
          <h5>Loading....</h5>
        )}
        {this.state.isLoaded ? (
          <CenteredGrid
            user={this.state.listItems}
            deleteuser={this.deleteuser}
            addUser={this.addUser}
          />
        ) : null}
      </div>
    );
  }
}
export default Overview;
