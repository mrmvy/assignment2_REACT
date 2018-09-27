import React from 'react';
import Search from './components/Search';
import AddBuilding from './components/AddBuilding';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedDelete(id) {
    const index = this.props.data.findIndex(x => x.id === id);

    this.setState({
      selectedBuilding: 0
    });
    this.props.data.splice(index, 1);
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding(newBuilding) {

    // Set the ID of the new building to one higher than the highest existing id
    newBuilding.id = Math.max.apply(null, this.props.data.map(x => x.id)) + 1;

    this.props.data.splice(0, 0, newBuilding);

    this.props.data.sort(function(a, b){
      if (a.code.toUpperCase() === b.code.toUpperCase()) 
        return 0; 
      else if (a.code.toUpperCase() > b.code.toUpperCase()) 
        return 1; 
      else 
        return -1;
      }
    );

    this.setState({selectedBuilding: newBuilding.id});
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="table-code-column">Code</th>
                      <th className="table-building-column">Building</th>
                      <th></th>
                    </tr>
                  </thead>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    selectedDelete={this.selectedDelete.bind(this)}
                  />
                </table>
              </div>
              <div>
                <AddBuilding 
                  addBuilding={this.addBuilding.bind(this)}
                />
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.props.data}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
