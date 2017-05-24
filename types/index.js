export type SwatchType = {
    id: string,
    hex: string,
    rgb: string,
    rgbArray: Array<number>,
    fontColor: string
};

export type PaletteType = {
    name: string,ndkm
    colors: Array<string>
};

export type ModalType = {
    display: boolean,
    message: string|null,
    heading: string|null
};