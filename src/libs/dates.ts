

export const getDayStartDate = (date: Date): number => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate.getTime();
}

export const getDayEndDate = (date: Date): number => {
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate.getTime();
}

export const getDayLimits = (date: Date): {start: number, end: number} => {
    const start = getDayStartDate(date);
    const end = getDayEndDate(date);
    return {start, end};
}
