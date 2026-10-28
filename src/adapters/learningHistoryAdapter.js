export const getLearningHistoryYears = (courses, currentYear = new Date().getFullYear()) => {
    const courseYears = courses.map(course => Number(course.start?.slice(0, 4)))
        .filter(year => Number.isInteger(year) && year >= 1900 && year <= 9999)
    const latest = Math.max(currentYear, ...courseYears)
    const earliest = Math.min(currentYear - 9, ...courseYears)
    return Array.from({ length: latest - earliest + 1 }, (_, index) => latest - index)
}

export const filterLearningHistory = (courses, year) => courses
    .filter(course => course.start?.startsWith(`${year}-`))
    .sort((first, second) => second.start.localeCompare(first.start) || first.id.localeCompare(second.id))
