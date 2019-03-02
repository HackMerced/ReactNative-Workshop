import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import PurchaseList from './PurchaseList'

export default class Budget extends Component {
    state = { budget: '', isEntered: false }

    // set state values when button is clicked
    handleSubmit = () => {
        this.setState({
            isEntered: true,
            budget: this.state.budget
        })
    }
	render() {
        // get the current budget state 
        const {budget} = this.state
        // if you haven't entered your budget yet
        if(!this.state.isEntered) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Enter your monthly budget</Text>
                    <View style={{ flexDirection:'row' }}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="$0"
                            onChangeText={budget => this.setState({ budget })}
                            value={this.state.budget}
                        />
                        <Button 
                            style={styles.button} 
                            title="Enter" 
                            onPress={this.handleSubmit} 
                        />
                    </View>
                </View>
            )
        }
        // Show budget and display purchase list
        else {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>Your monthly budget</Text>
                    <Text style={styles.text}>{"$"+budget}</Text>
                    <PurchaseList />
                </View>
            )
        }    
	}
}

const styles = StyleSheet.create({
  container: {
    top: 150,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  textInput: {
    height: 30,
    width: '40%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop: 8,
    padding: 5,
    textAlign: 'right',
    flex: 1,
    fontSize: 20
  },
    button: {
        flex: 1,
        marginTop: 8,
    }
})