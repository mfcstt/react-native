  import { StyleSheet } from 'react-native';
  
  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#D0D2D8',
      paddingTop: 70,

      gap: 24,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333333',
    },
    logo: {
      width: 124,
      height: 34,
      },
    form: {
      width: '100%',
      gap: 8,
      paddingHorizontal: 24,
    },
    content: {
    flex: 1,
    flexDirection: 'row',
    gap: 24,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    marginTop: 24,
    }
  })