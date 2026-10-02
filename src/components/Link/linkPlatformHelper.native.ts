import { Linking } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPlatformHref = (_href?: string) => undefined;

export const useLinkPress = (href?: string) => {
    if (!href || href.startsWith('#')) return undefined;

    return (e: unknown) => {
        (e as Event).preventDefault();
        Linking.openURL(href).catch((err) =>
            console.error('Could not open link', err)
        );
    };
};
