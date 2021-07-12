import React, { useRef, useMemo, useCallback } from "react";
import { Button, View, StyleSheet } from 'react-native'
import SearchPage from '../SearchPage/SearchPage';
import BottomSheet from '@gorhom/bottom-sheet';

export default function TestPage(props) {
	const bottomSheetRef = useRef(null);
	const handleClose = () => bottomSheetRef.current.close()
	const handleExpand = () => bottomSheetRef.current.expand()
	const snapPoints = useMemo(() => ['60%'], []);
	const handleSheetChanges = useCallback((index: number) => {
		console.log('handleSheetChanges', index);
	}, []);

	return (
		<View style={styles.container}>
			<Button title="Open Assistant" onPress={handleExpand} />
			<BottomSheet 
				index={-1}
				ref={bottomSheetRef}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
			>
				<SearchPage 
					handleExpand={handleExpand}
					handleClose={handleClose}
				/>
			</BottomSheet>
	  </View>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  width: '100%',
	  backgroundColor: '#DBEAFE',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
  });