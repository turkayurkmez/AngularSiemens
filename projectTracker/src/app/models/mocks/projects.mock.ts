import { Project } from "../project";

export const projects: Project[] = [
    {
        id:1, name:'Project X', description:'Description X', startDate:new Date(2023,1,31),
        departmentId:1, completedPercent:0.35, 
        tasks:[
            {id:1, name:'Task A - Project X', description:'Task A Description', expectedDate:new Date(2023,2,5),projectId:1, isDone:false },
            {id:2, name:'Task A - Project X', description:'Task B Description', expectedDate:new Date(2023,2,8),projectId:1, isDone:false },
            {id:3, name:'Task A - Project X', description:'Task C Description', expectedDate:new Date(2023,2,15),projectId:1, isDone:false },

        ]
    },
    {
        id:2, name:'Project Y', description:'Description Y', startDate:new Date(2023,2,28),
        departmentId:1, completedPercent:0.35, 
        tasks:[
            {id:1, name:'Task A - Project Y', description:'Task A Description', expectedDate:new Date(2023,2,5),projectId:2, isDone:false },
            {id:2, name:'Task B - Project Y', description:'Task B Description', expectedDate:new Date(2023,2,8),projectId:2, isDone:false },
            {id:3, name:'Task C - Project Y', description:'Task C Description', expectedDate:new Date(2023,2,15),projectId:2, isDone:false },

        ]
    },
    {
        id:3, name:'Project Z', description:'Description Z', startDate:new Date(2023,1,31),
        departmentId:2, completedPercent:0.35, 
        tasks:[
            {id:1, name:'Task A - Project Z', description:'Task A Description', expectedDate:new Date(2023,2,5),projectId:3, isDone:false },
            {id:2, name:'Task B - Project Z', description:'Task B Description', expectedDate:new Date(2023,2,8),projectId:3, isDone:false },
            {id:3, name:'Task C - Project Z', description:'Task C Description', expectedDate:new Date(2023,2,15),projectId:3, isDone:false },

        ]
    }
]