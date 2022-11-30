import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {AnimatedFAB} from 'react-native-paper';

function WishlistScreen() {
  const [isExtended, setIsExtended] = React.useState(true);
  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };
  const _moveToAddNew = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}>
        {[...new Array(100).keys()].map((_, i) => (
          <Text>{i}</Text>
        ))}
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'Add New'}
        extended={isExtended}
        onPress={_moveToAddNew}
        visible
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={styles.fabStyle}
      />
    </SafeAreaView>
  );
}

export default WishlistScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
