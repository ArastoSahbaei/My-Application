import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

export default class Development extends Component {

    state = {
        loading: true,
        companyName:           "Loading",
        forFattning:           "Loading",
        betydelseForForetaget: "Loading",
        revideras:             "Loading",
        senastReviderad:       "Loading",
        status:                "Loading",
        data: []
    }

componentDidMount = () => {
    axios.get('http://localhost:8080/lagbevakning/subscription/company?id=' + sessionStorage.getItem("id")).then(response => {
        this.setState({
            companyName: response.data[0].companyItem.companyName,
            forFattning: response.data[0].lawItem.name,
            betydelseForForetaget: response.data[0].text,
            revideras: "TBA",
            senastReviderad: response.data[0].latestRevisionDate,
            status: response.data[0].status,
            loading: false,
            data: response.data
        })
         console.log(response.data)
    })
}



render() {

    return(
        <div>
             {this.state.loading || !this.state.companyName 
              ? <div>Loading...</div> 
              : <div> <h3>  Listar laglista för {this.state.companyName} </h3> </div>}

<Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Författning</Table.HeaderCell>
        <Table.HeaderCell>Betydelse för företaget</Table.HeaderCell>
        <Table.HeaderCell>Revideras</Table.HeaderCell>
        <Table.HeaderCell>Senast Revideras</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>


    <Table.Body>

{this.state.data.map(function(item, i){
  console.log("###############" + item + i)
  return <Table.Row key={i}>
         <Table.Cell>{i}</Table.Cell>
         <Table.Cell>hej2</Table.Cell>
         <Table.Cell>hej3</Table.Cell>
         <Table.Cell>hej4</Table.Cell>
         <Table.Cell>hej5</Table.Cell>
        </Table.Row>
})
}

</Table.Body>
<Table.Row>
        <Table.Cell>{this.state.forFattning}</Table.Cell>
        <Table.Cell>{this.state.betydelseForForetaget}</Table.Cell>
        <Table.Cell>{this.state.revideras}</Table.Cell>
        <Table.Cell>{this.state.senastReviderad}</Table.Cell>
        <Table.Cell>{this.state.status}</Table.Cell>
      </Table.Row> 
{/*     <Table.Body>
      <Table.Row>
        <Table.Cell>{this.state.forFattning}</Table.Cell>
        <Table.Cell>{this.state.betydelseForForetaget}</Table.Cell>
        <Table.Cell>{this.state.revideras}</Table.Cell>
        <Table.Cell>{this.state.senastReviderad}</Table.Cell>
        <Table.Cell>{this.state.status}</Table.Cell>
      </Table.Row> */}




    {/* </Table.Body> */}
  </Table>
              
        </div>
     )
    }
   }