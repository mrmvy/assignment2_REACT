import React from 'react';
import Grid from '@material-ui/core/Grid';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;

		console.log('Selected building: ', selectedBuilding)

		const buildingList = data
			.filter(directory => directory.id === selectedBuilding)
			.map(directory => {
				return (
					<Grid container direction="column" spacing={16}>
						<Grid item md={12}>
							<h2>Detailed Information</h2>
						</Grid>
						<Grid item md={12}>
							<label className="display-label">Code</label>
							<div><p>{directory.code}</p></div>
						</Grid>
						<Grid item md={12}>
							<label className="display-label">Building name</label>
							<div><p>{directory.name}</p></div>
						</Grid>
						<Grid item md={12}>
							<label className="display-label">Address</label>
							<div><p>{directory.address}</p></div>
						</Grid>
						<Grid item md={12}>
							<label className="display-label">Latitude</label>
							<div><p>{directory.coordinates && directory.coordinates.latitude}</p></div>
						</Grid>
						<Grid item md={12}>
							<label className="display-label">Longitude</label>
							<div><p>{directory.coordinates && directory.coordinates.longitude}</p></div>
						</Grid>
					</Grid>
				);
			});
		return (
			<div>
				{selectedBuilding === 0 &&
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				}
				{buildingList}
			</div>
		);
	}
}
export default ViewBuilding;
