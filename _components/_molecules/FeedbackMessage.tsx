import React from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { useDispatch } from 'react-redux'
import { ACKNOWLEDGE_SUCCESS, ACKNOWLEDGE_ERROR } from '../../_redux/_actions/price.actions'

interface PortalProps {
	type: 'loading' | 'success' | 'error';
	message?: string;
}

const { height, width } = Dimensions.get('window')

export default function FeedbackMessage(props: PortalProps) {
	const dispatch = useDispatch()

	const backgroundColor = 
		(props.type === 'loading')
			? "#BFDBFE"
			: (props.type === 'success')
				? "#A7F3D0"
				: "#FECACA"
	
	const handleAcknowledge = () => {
		const actionType = 
			(props.type === 'success')
				? ACKNOWLEDGE_SUCCESS
				: ACKNOWLEDGE_ERROR

		dispatch({ type: actionType })
	}
			
	return (
		<View 
			style={{
				...styles.container,
				backgroundColor: backgroundColor
		}}>
			{ props.message && <Text style={styles.text}>{ props.message }</Text> }

			{ (props.type === ('success') || props.type === ('error')) 
				&& <Button title="Ok" onPress={handleAcknowledge}/>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: 0.8 * width,
		height: 0.05 * height,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontFamily: 'Inter_500Medium',	
	}
})