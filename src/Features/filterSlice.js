import { createSlice } from '@reduxjs/toolkit';



export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filterTags: [],
        // ============= Temp solution for clear btn
        initialJobs: [
            {
                new: true,
                featured: true,
                image: "photosnap.svg",
                companyName: "Photosnap",
                jobPosition: "Senior Frontend Developer",
                posted: 1,
                jobType: "Full Time",
                jobLocation: "USA only",
                tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
            },
            {
                new: false,
                featured: false,
                image: "myhome.svg",
                companyName: "MyHome",
                jobPosition: "Junior Frontend Developer",
                posted: 5,
                jobType: "Contract",
                jobLocation: "USA only",
                tags: ["Frontend", "Junior", "CSS", "JavaScript"]
            }
        ],
        // ============= Temp solution for clear btn

        jobs: [
            {
                new: true,
                featured: true,
                image: "photosnap.svg",
                companyName: "Photosnap",
                jobPosition: "Senior Frontend Developer",
                posted: 1,
                jobType: "Full Time",
                jobLocation: "USA only",
                tags: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"]
            },
            {
                new: false,
                featured: false,
                image: "myhome.svg",
                companyName: "MyHome",
                jobPosition: "Junior Frontend Developer",
                posted: 5,
                jobType: "Contract",
                jobLocation: "USA only",
                tags: ["Frontend", "Junior", "CSS", "JavaScript"]
            }
        ],
    },

    reducers: {
        addFilterTag: (state, action) => {
            let newTags = [];
            let filteredJobs = [];

            // Don't add duplicates.
            if (state.filterTags.includes(action.payload.tag)) {
                newTags = [...state.filterTags];
            } else {
                newTags = [...state.filterTags, action.payload.tag];
            }

            let jobsArray = JSON.parse(JSON.stringify(state.jobs));
            for (let i = 0; i < jobsArray.length; i++) {
                if (jobsArray[i].tags.includes(action.payload.tag)) {
                    filteredJobs.push(jobsArray[i]);
                }
            }


            return {
                ...state,
                filterTags: newTags,
                jobs: filteredJobs
            }
        },


        removeFilterTag: (state, action) => {
            let eliminateTag = action.payload.tagIndex;
            let newTagsArray = [...state.filterTags];
            newTagsArray.splice(eliminateTag, 1);

            if (newTagsArray.length == 0) {
                return {
                    ...state,
                    filterTags: [],
                    jobs: state.initialJobs
                }
            } else {
                let updatedArray = [];
                let jobsArray = JSON.parse(JSON.stringify(state.initialJobs));
                for (let i = 0; i < jobsArray.length; i++) {
                    let isPresent = false;
                    for (let j = 0; j < newTagsArray.length; j++) {
                        if (jobsArray[i].tags.includes(newTagsArray[j])) {
                            isPresent = true;
                        }
                    }
                    if (isPresent == true) {
                        updatedArray.push(jobsArray[i]);
                    }
                }

                return {
                    ...state,
                    filterTags: newTagsArray,
                    jobs: updatedArray
                }
            }
        },

        removeAllFilterTags: (state) => {
            return {
                ...state,
                filterTags: [],
                jobs: state.initialJobs
            }
        }
    }
});


export const { addFilterTag, removeFilterTag, removeAllFilterTags } = filterSlice.actions;

export default filterSlice.reducer;