import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 10,
    minHeight: 120,
  },
  jobsname: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginStart: 5,
    marginTop: 5,
  },
  companyName: {
    marginStart: 5,
    marginTop: 2,
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  },
  locationsName: {
    marginStart: 5,
    backgroundColor: '#EF5350',
    alignSelf: 'flex-start',
    color: 'white',
    padding: 5,
    borderRadius: 50,
    fontWeight: 'bold',
  },
  innerContainer: {
    alignItems: 'flex-end',
  },
  levelsName: {
    marginEnd: 5,
    color: '#EF5350',
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#EF5350',

    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
