export const isNumber = (n: any) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
