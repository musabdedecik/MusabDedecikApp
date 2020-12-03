import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Appbar} from 'react-native-paper';
import Cards from '../components/Cards';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = () => {
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: '#222831',
        }}>
        <Appbar.Content title="Musab Dedecik App"></Appbar.Content>
      </Appbar.Header>
      <SafeAreaView style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Image
              testID="profilePhoto"
              style={styles.profileImage}
              source={require('../assets/pp.png')}
            />
            <View style={styles.personinfo}>
              <Text>Musab Dedecik</Text>
              <Text>Yazılım Geliştirici</Text>
            </View>
          </View>
          <View style={styles.cards}>
            <Cards></Cards>
          </View>
          <Text style={styles.title}>
            Son zamanlarda içinde bulunduğum projeleri{' '}
            <Text style={{color: '#f05454', fontWeight: 'bold'}}>mail</Text>{' '}
            olarak ileteceğim.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    flex: 1,
    height: height,
    backgroundColor: '#ccc',
  },
  personinfo: {
    marginHorizontal: 10,
    flexGrow: 1,
  },
  scrollView: {
    flexDirection: 'column',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: Colors.lighter,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 10,
    borderTopEndRadius: 10,
  },
  title: {
    color: '#ccc',
    marginVertical: 10,
    fontSize: 12,
    marginLeft: 10,
    textAlign: 'center',
    fontWeight: '400',
  },
  small: {},
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  cards: {
    height: 540,
    borderRadius: 10,
  },
  cardWrapper: {
    backgroundColor: Colors.lighter,
    minHeight: 200,
    borderRadius: 10,
    padding: 10,
  },
});

export default Dashboard;
