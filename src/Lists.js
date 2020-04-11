import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Lists extends Component {
  state = {
    data: [],
    raw: [],
    search: "",
    counter: true
  };
  componentDidMount = () => {
    Axios.get("https://demoapp-12772.firebaseio.com/hackerearth.json").then(
      res => {
        this.setState({ data: res.data, raw: res.data });
      }
      // e => console.log(e)
    );
  };
  filterByName = event => {
    var txt = event.target.value;
    this.setState({ search: txt });
  };
  search = () => {
    var data = this.state.data;
    var raw = this.state.raw;
    var txt = this.state.search;
    if (txt.length === 0) {
      this.setState({ data: raw });
      return;
    }
    data = raw.filter(d => (d.Name).toLowerCase().includes(txt.toLowerCase()));
    this.setState({ data: data });
  };
  sortY = () => {
    var data = this.state.data;
    if (this.state.counter)
      data.sort(function(a, b) {
        return b.Year - a.Year;
      });
    else
      data.sort(function(a, b) {
        return a.Year - b.Year;
      });
    this.setState({ data: data, counter: !this.state.counter });
  };
  render() {
    return (
      <div>
        {this.state.data ? (
          <div>
            <TextField
              onChange={this.filterByName}
              id="outlined-basic"
              label="Search By Name"
              variant="outlined"
            />
            <Button
              onClick={this.search}
              style={{ marginTop: 10, marginLeft: 10 }}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
            <Button
              onClick={this.sortY}
              style={{ marginTop: 10, marginLeft: 10 }}
              variant="contained"
              color="primary"
            >
              Sort By Year
            </Button>
            <Table>
              {console.log(this.state.data)}
              <TableHead>
                <TableRow>
                  <TableCell align="right">Rank</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Plateform</TableCell>
                  <TableCell align="right">Year</TableCell>
                  <TableCell align="right">Genre</TableCell>
                  <TableCell align="right">Publisher</TableCell>
                  <TableCell align="right">Global Sale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map(d => (
                  <TableRow key={d.rank}>
                    <TableCell align="right">{d.Rank}</TableCell>
                    <TableCell align="right">{d.Name}</TableCell>
                    <TableCell align="right">{d.Platform}</TableCell>
                    <TableCell align="right">{d.Year}</TableCell>
                    <TableCell align="right">{d.Genre}</TableCell>
                    <TableCell align="right">{d.Publisher}</TableCell>
                    <TableCell align="right">{d.Global_Sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Lists;
