export const range = (start: number, end: number): number[] => {
    return [...Array(end - start).keys()].map((el) => el + start);
};
export const pluck = (elements: any[], field: string) => {
    return elements.map((el) => el[field]);
};

export const test = (iterator: number) => {
    const elements: any[] = []; 
    for (let index = 0; index < iterator; index++) {
        elements.push(index);
    }
    return elements
}