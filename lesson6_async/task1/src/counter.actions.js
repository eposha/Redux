export const INC = 'COUNTER/INCREASE';
export const DEC = 'COUNTER/DECREASE';
export const RES = 'COUNTER/RESET';

export const inc = () => ({ type: INC })
export const dec = () => ({ type: DEC })
export const res = () => ({ type: RES })