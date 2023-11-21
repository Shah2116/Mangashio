import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Browse_Data from '../assests/data/Browse';

const Browse = () => {
  const renderBrowseData = ({item}: any) => {
    return (
      <View style={styles.itemBox}>
        <View style={styles.itemBoxWrapper}>
          <View>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.iconWrapper}>
              <Feather name='star' size={12} color={'#FCEF7E'}/>
              <Text style={styles.stars}>{item.stars}</Text>
              <Feather name='bookmark' size={12} color={'#fff'}/>
              <Text style={styles.bookmarks}>{item.bookmarks}</Text>
            </View>
          </View>
          <View style={styles.itemTitleContainer}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.tags}>{item.tags}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.menubarWrapper}>
          <View style={[styles.titleWrapper]}>
            <Feather name="menu" size={24} />
            <Image
              source={require('../assests/images/Logo.png')}
              style={styles.titleImage}
            />
            <Text style={styles.titleText}>MangaShio</Text>
          </View>
          <View style={styles.titleWrapper}>
            <Feather name="search" size={24} style={{marginRight: 13}} />
            <FontAwesome5Icon name="user-circle" size={26} />
          </View>
        </View>
      </SafeAreaView>
      <Text style={styles.browseTitle}>Browse</Text>
      <View style={styles.browseContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <View style={styles.searchBoxWrapper}>
              <Feather name="search" size={17} color={'#fff'} />
              <Text style={styles.advancedSearchText}>Advanced Search</Text>
            </View>
            <Feather name="filter" size={17} color={'#fff'} />
          </View>
          <View style={styles.sortbyBox}>
            <View style={styles.sortbyWrapper}>
              <Text style={styles.sortbyText}>Sort by</Text>
              <Text style={styles.bestMactchText}>Best Match</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-down"
              size={15}
              style={{paddingRight: 7, alignSelf: 'center', color: '#fff'}}
            />
          </View>
        </View>
        <FlatList data={Browse_Data} renderItem={renderBrowseData} />
      </View>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  menubarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 14,
    paddingHorizontal: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImage: {
    width: 30,
    height: 30,
    marginLeft: 11,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#fff',
    marginLeft: 8,
  },
  browseTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    paddingLeft: 16,
    marginTop: 12,
  },
  browseContainer: {
    marginLeft: 10,
    marginRight: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  searchBox: {
    width: 240,
    height: 34,
    backgroundColor: 'rgba(217, 217, 217, 0.9)',
    borderRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    alignItems: 'center',
  },
  sortbyBox: {
    width: 132,
    height: 34,
    borderRadius: 4,
    backgroundColor: '#1f1f1f',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginLeft: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBox: {
    width: 374,
    height: 142,
    backgroundColor: '#rgba(90, 90, 90, 0.75)',
    borderRadius: 4,
    marginTop: 9,
  },
  searchBoxWrapper: {
    flexDirection: 'row',
  },
  advancedSearchText: {
    marginLeft: 12,
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
    alignSelf: 'center',
  },
  sortbyWrapper: {
    paddingTop: 6,
    paddingLeft: 13,
  },
  sortbyText: {
    fontSize: 7,
    color: '#fff',
  },
  bestMactchText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
  },
  itemImage: {
    width: 76,
    height: 103,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  tags: {},
  description: {},
  stars: {},
  bookmarks: {},
  status: {},
  itemBoxWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  itemTitleContainer:{
    marginLeft:12,
    paddingTop:16,
  }
});
