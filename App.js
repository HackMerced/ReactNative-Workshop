import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Budget from './Components/Budget'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.title}>My Budget</Text>
        <Budget />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	title: {
    fontSize: 40,
		textAlign: 'center',
    marginBottom: 40,
    position: 'absolute',
    top: 80
	}
});