const formatVolumeIconPath = require('../assets/scripts/main');

describe('format the volume icon for', () => {
    test('high volume', () => {
        expect(formatVolumeIconPath(90)).toMatch(new RegExp('3'));
    });
    test('high volume lower edge', () => {
        expect(formatVolumeIconPath(67)).toMatch(new RegExp('3'));
    });
    test('med volume', () => {
        expect(formatVolumeIconPath(50)).toMatch(new RegExp('2'));
    });
    test('med volume upper edge', () => {
        expect(formatVolumeIconPath(66)).toMatch(new RegExp('2'));
    });
    test('med volume lower edge', () => {
        expect(formatVolumeIconPath(34)).toMatch(new RegExp('2'));
    });
    test('low volume', () => {
        expect(formatVolumeIconPath(20)).toMatch(new RegExp('1'));
    });
    test('low volume upper edge', () => {
        expect(formatVolumeIconPath(33)).toMatch(new RegExp('1'));
    });
    test('low volume lower edge', () => {
        expect(formatVolumeIconPath(1)).toMatch(new RegExp('1'));
    });
    test('no volume', () => {
        expect(formatVolumeIconPath(0)).toMatch(new RegExp('0'));
    });
});