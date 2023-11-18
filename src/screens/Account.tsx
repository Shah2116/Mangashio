import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';

const Account = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assests/images/cover-pic.png')}>
          <View style={styles.menubarWrapper}>
            <Feather name="menu" size={24} />
            <View style={styles.titleWrapper}>
              <Image
                source={require('../assests/images/Logo.png')}
                style={styles.titleImage}
              />
              <Text style={styles.titleText}>MangaShio</Text>
            </View>
            <View style={styles.rightIcons}>
              <Feather name="search" size={24} />
              <FontAwesome5Icon name="user-circle" size={24} />
            </View>
          </View>
          <View style={styles.profilePic}>
            <Image
              source={require('../assests/images/profile-pic.png')}
              style={styles.profileImg}
            />
            <Text style={styles.profileText}>Gangemember420</Text>
          </View>
        </ImageBackground>
        <View style={styles.accountSettingContainer}>
          <Text style={styles.accountSettingText}>Account Setting</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.inputBox}
              value="email"
              placeholder="email"
            />
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.inputBox}
              value="username"
              placeholder="username"
            />
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.accountSettingText}>Change Password</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput
              style={styles.inputBox}
              value="password"
              placeholder="password"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.subscriptionsContainer}>
          <Text style={styles.accountSettingText}>Subscriptions</Text>
          <View style={styles.subscriptionWrapper}>
            <View style={{flexDirection: 'row',gap:2}}>
              <FontAwesome5Icon name="star" size={15} color={'#7DBAF2'} />
              <Text style={styles.diamondText}>Diamond</Text>
            </View>
            <Text style={styles.Txt}>Ad free for life</Text>
            <View style={styles.priceBox}>
              <Text style={styles.priceTxt}>$25</Text>
            </View>
          </View>
          <View style={styles.subscriptionWrapper}>
            <View style={{flexDirection: 'row',gap:2}}>
              <FontAwesome5Icon name="star" size={15} color={'#FCEF7E'}  />
              <Text style={styles.diamondText}>Diamond</Text>
            </View>
            <Text style={styles.Txt}>Ad free for life</Text>
            <View style={styles.priceBox}>
              <Text style={styles.priceTxt}>$25</Text>
            </View>
          </View>
          <View style={styles.subscriptionWrapper}>
            <View style={{flexDirection: 'row',gap:2}}>
              <FontAwesome5Icon name="star" size={15}  color={'#B6B6B6gi'}/>
              <Text style={styles.diamondText}>Diamond</Text>
            </View>
            <Text style={styles.Txt}>Ad free for life</Text>
            <View style={styles.priceBox}>
              <Text style={styles.priceTxt}>$25</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  subscriptionWrapper: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 4,
    backgroundColor: '#1F1F1F',
    marginVertical: 39,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingLeft: 20,
    marginRight:33,
    marginLeft:22,
    shadowOffset:{
        height:0,
        width:10,
    },
    shadowRadius:4,
    shadowOpacity:4,
    elevation:10,
    
  },
  diamondText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fff',
    marginRight:50
  },
  Txt: {
    alignSelf: 'center',
    fontSize: 9,
    fontWeight: '600',
    color: '#fff',
    marginRight: 73,
  },
  priceBox: {
    width: 52,
    height: 20,
    backgroundColor: 'rgba(0, 42, 151, 0.75)',
    borderRadius: 2,
    marginRight:11,
  },
  priceTxt: {
    color: '#fff',
    alignSelf: 'center',
    paddingVertical: 2,
  },
  subscriptionsContainer: {
    marginLeft: 21,
    marginTop: 43,
  },
  passwordContainer: {
    marginTop: 42,
    marginHorizontal: 22,
  },
  saveBtnText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#fff',
    alignSelf: 'center',
    paddingVertical: 7,
  },
  saveBtn: {
    width: 90,
    height: 29,
    marginTop: 23,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 42, 151, 0.75)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  accountSettingContainer: {
    marginTop: 103,
    marginHorizontal: 22,
  },
  accountSettingText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily: 'Regular-Bold',
    marginBottom: 12,
    color: '#fff',
  },
  inputContainer: {
    marginHorizontal: 11,
  },
  inputLabel: {
    marginTop: 11,
  },
  inputBox: {
    paddingHorizontal: 20,
    marginTop: 7,
    height: 34,
    borderRadius: 4,
    backgroundColor: '#383838',
    shadowColor: '#rgba(0,0,0,0.25)',
  },
  profileText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Regular-Bold',
  },
  profilePic: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 105,
  },
  profileImg: {
    width: 130,
    height: 130,
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 13,
    marginRight: 8,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Roboto-Black',
    color: '#fff',
  },
  titleImage: {
    height: 30,
    width: 30,
  },
  menubarWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 14,
  },
  titleWrapper: {
    flexDirection: 'row',
    marginLeft: -169,
    gap: 5,
  },
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 197,
  },
});
