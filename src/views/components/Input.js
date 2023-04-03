import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
// import Icon from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
// import { Icon } from 'react-native-elements';
import COLORS from '../../conts/colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  style,
  onFocus = () => { },
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 20 }}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={

          [
            style ? null : styles.inputContainer,
            {
              borderColor: error
                ? COLORS.red
                : isFocused
                  ? COLORS.darkBlue
                  : COLORS.light,
              borderWidth: 0.5,

              // alignItems: 'center',
            },
          ]}>
        {/* <AwesomeIcon
          name='email'
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        /> */}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={style ? style : { color: 'black', flex: 1 }}
          {...props}
        />
        {/* {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />)
        } */}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 18,
		color: '#5D5FEE',
		fontWeight: 'bold',
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});

export default Input;