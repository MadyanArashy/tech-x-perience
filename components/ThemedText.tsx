import { Text, type TextProps, StyleSheet } from 'react-native';

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
    fontSize: 15,
    lineHeight: 24,
  },
  defaultTwo: {
    fontSize: 15,
    lineHeight: 24,
    color: '#646464',
  },
  extrasmall: {
    fontSize: 13,
    lineHeight: 20,
  },
  extrasmallTwo: {
    fontSize: 13,
    lineHeight: 20,
    color: '#646464',
  },
  ultrasmall: {
    fontSize: 10.5,
    lineHeight: 16,
  },
  ultrasmallTwo: {
    fontSize: 10.5,
    lineHeight: 16,
    color: '#646464',
  },
  defaultSemiBold: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 15,
    color: '#0a7ea4',
  },
});
