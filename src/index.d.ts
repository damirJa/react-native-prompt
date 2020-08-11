import { Component } from 'react';
import {
    TextStyle,
    ViewStyle
} from 'react-native';

export interface PromptProps {
    title: string,
    visible?: boolean,
    defaultValue?: string,
    placeholder?: string,
    onCancel?: () => void,
    cancelText?: string,
    onSubmit: (value?: string) => {},
    submitText?: string,
    onChangeText?: () => void,
    borderColor?: string,
    promptStyle: ViewStyle,
    titleStyle: TextStyle,
    buttonStyle: ViewStyle,
    buttonTextStyle: TextStyle,
    submitButtonStyle: ViewStyle,
    submitButtonTextStyle: TextStyle,
    cancelButtonStyle: ViewStyle,
    cancelButtonTextStyle: TextStyle,
    inputStyle: ViewStyle,
    textInputProps: ViewStyle,
}

declare class Prompt extends Component<PromptProps> {}
export default Prompt;
