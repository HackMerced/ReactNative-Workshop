import React, { Component } from 'react'
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import PurchaseItem from './PurchaseItem'

export default class PurchaseList extends Component {
	state = { purchases: [] }

	addItem = (item, price) => {
		this.setState({
			purchases: [...this.state.purchases, {[item] : price}]
		})
	}

	render() {
		const Purchases  = this.state.purchases
		const PurchaseDisplay = Purchases.map((purchase) => { 
			const keys = Object.keys(purchase) 
			return (
				<View style={styles.list} key={keys}>
					<Text style={styles.text}>{keys[0]}</Text>
					<Text style={styles.text}>{"$" + purchase[keys[0]]}</Text>
				</View>
			)
		})
	
		return (
			<View style={styles.container}>
				<PurchaseItem addItem={this.addItem}/>
				{PurchaseDisplay}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: 350
	},
	list: {
		flexDirection: 'row',
		width: '50%'
	},
	text: {
		fontSize: 20,
		margin: 10,
		flex: 1,
		textAlign: 'right'
	}
});