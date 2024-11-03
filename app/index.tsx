import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { wp } from  '../helpers/common'
import { hp } from  '../helpers/common'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { useFonts } from 'expo-font';
import CustomText from '../constants/CustomText';

const index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark"/> 
      <View style={styles.container}>
        <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/new parent logo.png')}/>

      {/* title */}
      <View style={{gap:20}}>
        <CustomText style={styles.title}> New Parent</CustomText>
        <CustomText style={styles.punchLine}> Seamlessly connect with your child's world. Stay informed, stay involved.</CustomText>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <Pressable onPress={() => router.push('/signUp')} style={styles.button}>
        <CustomText style={styles.Text}>Getting Started</CustomText>
        </Pressable>
        <View style={styles.bottomText}>
          <CustomText style={ styles.loginText}>
            Already have an account!
          </CustomText>
          <Pressable onPress={() => router.push('/login')}>
            <CustomText style={[styles.loginText, {color: Colors.highlight, fontWeight: '700'}]}>
              Login
            </CustomText>
          </Pressable>
        </View>
      </View>
      </View>
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: wp(4)
  },
  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: 'center'
  },
  title: {
    color: Colors.primary,
    fontSize: hp(4),
    textAlign: 'center',
    fontWeight: '800',
    fontFamily: 'SFProDisplay-Bold',
  },
  punchLine: {
    textAlign: 'center',
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    color: 'black',
    fontWeight: '600'
  },
  button: {
    marginHorizontal: wp(2),
    backgroundColor: Colors.highlight,
    height: hp(6.6),
    borderCurve: 'continuous',
    borderRadius: 18,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4
  },
  Text: {
    fontSize: hp(2.8),
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'SFProDisplay-Bold',
  },
  footer: {
    gap: 30,
    width: '100%',

  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  loginText: {
    textAlign: 'center',
    color: '#494949',
    fontSize: hp(2),
    fontWeight: '500'
  }
})