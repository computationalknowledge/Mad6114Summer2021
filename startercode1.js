import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Constraints} from 'expo';

import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default class App extends React.Component{
	render(){
		return (
				<View style={styles.container}>
					<Text style={styles.paragraph}>
					My Message!
					</Text>
					<Card>
						<AssetExample />
					</Card>
				</View>	
			);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'center',
		paddingTop: Constraints.statusBarHeight,
		backgroundColor: '#ecf0f1',
		padding: 8,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
