import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bldgCode: '',
            bldgName: '',
            bldgAddr: '',
            bldgLat: '',
            bldgLong: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    addBuilding() {
        if (this.state.bldgCode === "" || this.state.bldgName === "") {
            alert("Listing must have a code and name.");
        } else {
            // We'll set ID to 0 here and let the code in App that actually handles
            // the Add operation figure out an appropriate ID
            this.props.addBuilding({
                id: 0,
                code: this.state.bldgCode,
                name: this.state.bldgName,
                coordinates: {
                    latitude: this.state.bldgLat,
                    longitude: this.state.bldgLong
                },
                address: this.state.bldgAddr
            });
            this.handleClear();
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({[name]: value});
        console.log(name, value);
    }

    handleClear() {
        this.setState({
            bldgCode: '',
            bldgName: '',
            bldgAddr: '',
            bldgLat: '',
            bldgLong: ''
        })
    }

	render() {
        const style = {
            margin: '0 8px'
          };

        return (
            <div>
                <br />
                <br />
                <br />
                <Card>
                    <AppBar position="static" >
                        <Toolbar variant="dense">
                            <Typography variant="title" color="inherit">
                            Add Building
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container direction="column"  spacing={16}   className="add-building">
                        <Grid item md={12}>
                            To add a new building to the directory enter the building information below, then click "Add new building".
                            <br />
                            <br />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="bldgCode">Code</label>
                            <Input 
                                inputType="text" 
                                className="text-input" 
                                name="bldgCode" 
                                id="bldgCode"
                                title="Code"
                                value={this.state.bldgCode} 
                                onChange={this.handleChange} 
                                placeholder="Enter the building code"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="bldgName">Building name</label>
                            <Input 
                                inputType="text" 
                                className="text-input" 
                                name="bldgName" 
                                id="bldgName" 
                                title="Building name"
                                value={this.state.bldgName} 
                                onChange={this.handleChange} 
                                placeholder={"Enter the building name"} 
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="bldgAddr">Address</label>
                            <Input 
                                inputType="text" 
                                className="text-input" 
                                name="bldgAddr" 
                                id="bldgAddr" 
                                title="Address"
                                value={this.state.bldgAddr} 
                                onChange={this.handleChange} 
                                placeholder="Enter the building's address"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="bldgLat">Latitude</label>
                            <Input 
                                inputType="text" 
                                className="text-input" 
                                name="bldgLat" 
                                id="bldgLat" 
                                title="Latitude"
                                value={this.state.bldgLat} 
                                onChange={this.handleChange} 
                                placeholder="Enter the building's latitude"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <label className="display-label" htmlFor="bldgLong">Longitude</label>
                            <Input 
                                inputType="text" 
                                className="text-input" 
                                name="bldgLong" 
                                id="bldgLong" 
                                title="Longitude"
                                value={this.state.bldgLong} 
                                onChange={this.handleChange} 
                                placeholder="Enter the building's longitude"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <Button variant="contained" style={style} color="primary" onClick={this.addBuilding.bind(this)}>
                                <i class="material-icons mdc-button__icon" aria-hidden="true">add</i>
                                Add new building
                            </Button>
                            <Button variant="outline" color="primary" onClick={this.handleClear}>
                                <i class="material-icons mdc-button__icon" aria-hidden="true">clear</i>
                                Clear entries
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
    }
}
export default AddBuilding;