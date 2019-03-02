import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, Button } from 'react-native';
export default class PurchaseItem extends Component {
	state = { 
		item: '', 
		price: '' 
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Add a purchase</Text>
					<View style={{flexDirection: "row"}}>
						<TextInput
							style={styles.textInput}
							placeholder="item"
							onChangeText={item => this.setState({ item })}
							value={this.state.item}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="$0"
							onChangeText={price => this.setState({ price })}
							value={this.state.price}
						/>
						<Button 
							style={styles.button} 
							title="Add" 
							onPress={() => (this.props.addItem(this.state.item, this.state.price))} 
						/>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: "80%"
	},
	text: {
		fontSize: 20,
		textAlign: 'center'
	},
	textInput: {
		height: 30,
		borderBottomWidth: 1,
		borderColor: '#000',
		textAlign: 'right',
		margin: 8,
		flex: 1,
		fontSize: 20
	},
	button: {
		flex: 1,
		margin: 8,
	}
});