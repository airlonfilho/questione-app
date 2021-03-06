import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  FieldLabel,
  TextFieldView,
  TextInput,
  ErrorMessage,
  View,
} from './styles';

Icon.loadFont();

export const TextField = ({
  label = '',
  type,
  error,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize,
  marginBottom,
  onChangeText = () => {},
  onBlur = () => {},
  onFocus = () => {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const hasError = !!error && error !== '';
  let textInputRef;

  const _onFocus = () => {
    setIsFocused(true);
    setIsActive(true);
    onFocus();
  };

  const _onBlur = () => {
    if (value === '') {
      setIsActive(false);
    }

    setIsFocused(false);
    onBlur();
  };

  const didTapOnTextFieldView = () => {
    textInputRef.focus();
  };

  const _onChangeText = (text) => {
    setValue(text);
    onChangeText(text);
  };

  const textInputProps = {
    type,
    keyboardType,
    secureTextEntry,
    value,
    autoCapitalize,
    onBlur: _onBlur,
    onFocus: _onFocus,
    onChangeText: _onChangeText,
  };

  return (
    <View marginBottom={marginBottom}>
      <TouchableWithoutFeedback onPress={didTapOnTextFieldView}>
        <TextFieldView isActive={isFocused} hasError={hasError}>
          <FieldLabel isActive={isActive}>{label}</FieldLabel>
          {type ? (
            <TextInputMask
              {...textInputProps}
              refInput={(input) => {
                textInputRef = input;
              }}
            />
          ) : (
            <TextInput
              {...textInputProps}
              ref={(input) => {
                textInputRef = input;
              }}
            />
          )}
        </TextFieldView>
      </TouchableWithoutFeedback>
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </View>
  );
};
