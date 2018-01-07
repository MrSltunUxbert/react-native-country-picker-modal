import { Platform, StyleSheet, PixelRatio, Dimensions } from 'react-native'
import { getHeightPercent } from './ratio'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 16 : 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 48,
    width: width * 0.7
  },
  inputOnly: {
    marginLeft: width * 0.15
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: getHeightPercent(7),
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.07,
    width: width * 0.15
  },
  itemCountryName: {
    justifyContent: 'center',
    width: width * 0.7,
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: '#ccc',
    height: 20
  },
  countryName: {
    fontSize: getHeightPercent(2.2)
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 48,
    width: width * 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  }
})
