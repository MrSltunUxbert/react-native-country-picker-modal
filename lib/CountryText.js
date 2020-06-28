import React from 'react';
import { Text, I18nManager } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = (props) => {
    const { fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    return (React.createElement(Text, Object.assign({}, props, { style: {
            fontFamily,
            fontSize,
            color: onBackgroundTextColor,
            writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
            textAlign: 'left'
        } })));
};
//# sourceMappingURL=CountryText.js.map