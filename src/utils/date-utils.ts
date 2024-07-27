function adjustDateForDisplay(date: Date): Date {
    const adjustedDate = new Date(date)
    adjustedDate.setHours(adjustedDate.getHours() + adjustedDate.getTimezoneOffset() / 60)
    
    return adjustedDate
}

export const dateUtils = {
    adjustDateForDisplay,
}