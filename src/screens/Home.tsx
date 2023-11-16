import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchItems from '../assests/data/searchItem';
import Title from '../components/Title';
import Popular_Items from '../assests/data/PopularItems';

export default function Home() {

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.topBar, styles.position]}>
        <ImageBackground
          source={require('../assests/images/oshinoko.png')}
          style={styles.backgroundImage}>
          <View style={styles.menuWrapper}>
            <View style={styles.menuWrapper}>
              <Feather name="menu" style={styles.menu} />
              <View style={styles.logoWrapper}>
                <Image
                  resizeMode="contain"
                  source={require('../assests/images/Logo.png')}
                  accessibilityLabel="Logo"
                />
                <Text style={styles.logoText}>MangaShio</Text>
              </View>
            </View>
            <View style={[styles.menuWrapper, styles.search]}>
              <Feather name="search" size={24} />
            </View>
          </View>
          <View>
            <Text style={[styles.position, styles.headingText]}>
              {' '}
              Oshi no ko{' '}
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Read Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.popularContainer}>
          <View style={styles.popularWrapper}>
            <Text style={styles.popularHeading}>Popular</Text>
            <Feather name="arrow-right" size={24} />
          </View>
        <View>
          <FlatList 
          data={SearchItems}
          renderItem={}
          
          />
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img:{
    width:100,
  },
  popularHeading: {
    fontSize:17,
    fontWeight:'500',
  },
  popularWrapper: {
    flexDirection:'row',
    justifyContent:'space-between'

  },
  popularContainer: {
   flex:1,
   marginLeft:12,
   marginTop:8,
  },
  
  position: {
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    alignSelf: 'center',
  },
  btn: {
    width: 86,
    height: 33,
    backgroundColor: '#002A97BF',
    borderRadius: 5,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 38,
    fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    color: '#fff',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  topBar: {},

  menuContainer: {
    flexDirection: 'row',
    marginTop: 14,
  },
  backgroundImage: {
    width: '100%',
    height: 272,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoText: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 1,
    fontWeight: '800',
  },
  search: {
    marginTop: 14,
    marginRight: 46,
  },
  menu: {
    fontSize: 24,
    marginTop: 14,
    marginLeft: 11,
    marginRight: 3,
    color: '#505050',
  },
});
