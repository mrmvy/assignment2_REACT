import React from 'react';
import Button from '@material-ui/core/Button';

class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, selectedDelete } = this.props;

		const style = {
			minWidth: 170
          };

		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td className="table-code-column" onClick={() => selectedUpdate(directory.id)}>{directory.code} </td>
						<td onClick={() => selectedUpdate(directory.id)}> {directory.name} </td>
						<td onClick={() => {if (window.confirm('Do you want to delete building ' + directory.name + '?')) selectedDelete(directory.id)}}>
							<Button style={style} color="primary" onClick={this.handleClear}>
								<i class="material-icons mdc-button__icon" aria-hidden="true">delete</i>
								Delete listing
							</Button>
						</td>
					</tr>
				);
			});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList;
