import React from "react";

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        // (data) => console.log(JSON.stringify(data))
        (data) => {
          this.setState({
            isLoaded: true,
            items: data,
          });
          console.log(this.state.items);
        }
      )
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  createRows = (result) => {
    result.map((e, idx) => (
      <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
      </tr>
    ));
  };
  render() {
    const userTable = (result) => (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th> Name</th>
            <th>UserName</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {result.map((e, idx) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    return this.state.isLoaded ? (
      userTable(this.state.items)
    ) : (
      <h5> loading....</h5>
    );
  }
}

export default Overview;
