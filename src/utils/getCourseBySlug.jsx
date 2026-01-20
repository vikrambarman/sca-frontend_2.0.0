// import coursesData from "../data/coursesData"

// const getCourseBySlug = (slug) => {
//     for (const level of coursesData) {
//         const course = level.courses.find(c => c.slug === slug)
//         if (course) {
//             return {
//                 ...course,
//                 level: level.level,
//                 authority: level.authority,
//                 verify: level.verify
//             }
//         }
//     }
//     return null
// }

// export default getCourseBySlug


import coursesData from '../data/coursesData.json'

const getCourseBySlug = (slug) => {
    return coursesData.find(course => course.slug === slug) || null
}

export default getCourseBySlug
