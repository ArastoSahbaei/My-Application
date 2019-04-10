import React, { Component } from 'react'
import { Table, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import { array } from "prop-types";

export default class CreateRevisionPage extends Component {

  state = {
    companyName: "Loading",
    loading: true,
    data: [],
    checked: [],
    newRevisionSubscription:[],
  }

  componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
      this.setState(state =>{
       const companyName = response.data[0].companyItem.companyName;
       const loading = false;
       const data = response.data;
       const checked = new Array(data.length).fill(false);
       return {companyName, loading, data, checked};
      });
      console.log(this.state.checked);
      /* console.log(response.data) */
    })
  }

  onChange = (event) =>{
    console.log(event.target.checked)
  }

  CreateRevision(newName){
    const newRevision ={
      name: newName,
      subscriptionIds: this.state.newRevisionSubscription,
      customLawIds:[],
      userEmail:sessionStorage.getItem("email"),
      companyId: sessionStorage.getItem("id")
    }
    axios.post('http://localhost:8080/lagbevakning/revision/create', newRevision).then(response =>{
      console.log(response);
    })

  }



  addLaw(law, index){
    if(this.state.checked[index] !== true) {
      this.setState(state =>{
        const checked = this.state.checked;
        checked[index] = true;
        console.log(checked[index]);
        const newRevisionSubscription = this.state.newRevisionSubscription;
        newRevisionSubscription.push(this.state.data[index].id)
        console.log(newRevisionSubscription);
        return {checked, newRevisionSubscription};
      });
      console.log(this.state.checked[index]);
    }
    else{
      this.setState(state =>{
        const checked = this.state.checked;
        const newRevisionSubscription = this.state.newRevisionSubscription;
        for(var i = 0; i < newRevisionSubscription.length; i++){
          if(newRevisionSubscription[i] === this.state.data[index].id){
            newRevisionSubscription.splice(i,1);
            i--;
          }
        }
        checked[index] = false;
        console.log(newRevisionSubscription);
        return {checked, newRevisionSubscription};
      });
    }
    console.log(this.state.checked);

  }

  data(props) {
    return(
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Index</Table.HeaderCell>
              <Table.HeaderCell>Författning</Table.HeaderCell>
              <Table.HeaderCell>Företagsbetydelse</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Senast Revideras</Table.HeaderCell>
              <Table.HeaderCell>Revideras</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {props.map((law, index) => (
            <Table.Body key={index}>
              <Table.Row>
                <Table.Cell>
                <Checkbox
                  name={law.lawDTO.name}
                  checked={this.state.checked[index]}
                  onChange={this.addLaw.bind(this, law, index)}/>
                </Table.Cell>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{law.lawDTO.name}</Table.Cell>
                <Table.Cell>{law.text}</Table.Cell>
                <Table.Cell>{law.status}</Table.Cell>
                <Table.Cell>{new Date(law.latestRevisionDate).toISOString().substring(0, 10)}</Table.Cell>
                <Table.Cell>placeholder</Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}

        </Table>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.state.loading || !this.state.companyName
          ? <div>Loading...</div>
          : <div>
            <h1> Listar laglista för {this.state.companyName} </h1>
            <h3> <br/> {this.data(this.state.data)} </h3> </div>}

      </div>
    )}
}