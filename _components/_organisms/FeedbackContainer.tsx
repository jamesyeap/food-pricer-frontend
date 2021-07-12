import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, Dimensions } from "react-native";
import FeedbackMessage from "../_molecules/FeedbackMessage";

const { height, width } = Dimensions.get('window')

export default function FeedbackContainer() {
	const { loading, success, error } = useSelector(state => state.prices)

	return (
		<View style={styles.container}>
			{/* { loading && 
				<FeedbackMessage 
					type="loading" 
					message="Loading"
				/>
			} */}

			{ success && 
				<FeedbackMessage 
					type="success" 
					message={success}
				/>
			}

			{ error && 
				<FeedbackMessage 
					type="error" 
					message={error}
				/>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20, 
		borderRadius: 5, 
		width: 0.9 * width,
		position: 'absolute',
		bottom: 0.05 * height,
		left: 0.05 * width,
	}
})