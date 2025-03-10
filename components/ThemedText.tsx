import { Text, type TextProps, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react'

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'extrasmall' | 'defaultTwo' | 'extrasmallTwo' | 'ultrasmall' | 'ultrasmallTwo';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');



  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'defaultTwo' ? styles.defaultTwo : undefined,
        type === 'extrasmall' ? styles.extrasmall : undefined,
        type === 'extrasmallTwo' ? styles.extrasmallTwo : undefined,
        type === 'ultrasmall' ? styles.ultrasmall : undefined,
        type === 'ultrasmallTwo' ? styles.ultrasmallTwo : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular'
  },
  defaultTwo: {
    fontSize: 14,
    lineHeight: 24,
    color: '#646464',
    fontFamily: 'Poppins-Regular'
  },
  extrasmall: {
    fontSize: 13,
    lineHeight: 20,
    fontFamily: 'Poppins-Regular'
  },
  extrasmallTwo: {
    fontSize: 13,
    lineHeight: 20,
    color: '#646464',
    fontFamily: 'Poppins-Regular'
  },
  ultrasmall: {
    fontSize: 9,
    lineHeight: 16,
    fontFamily: 'Poppins-Light'
  },
  ultrasmallTwo: {
    fontSize: 9,
    lineHeight: 16,
    color: '#646464',
    fontFamily: 'Poppins-Light'
  },
  defaultSemiBold: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: 'Poppins-Bold'
  },
  subtitle: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold'
  },
  link: {
    lineHeight: 24,
    color: '#0086ff',
  },
});
