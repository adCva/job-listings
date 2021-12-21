import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filterTags: [],
        initialJobs: [],
        jobs: []
    },

    reducers: {
        createJobsData: (state, action) => {
            let incomingJobsData = action.payload;
            // Simulate incoming data from an API/server.
            console.log(incomingJobsData);

            return {
                ...state,
                initialJobs: incomingJobsData,
                jobs: incomingJobsData
            }
        },

        addFilterTag: (state, action) => {
            let newTags = [];
            let filteredJobs = [];

            // Don't add duplicate tags.
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




            
            if (newTagsArray.length === 0) {
                return {
                    ...state,
                    filterTags: [],
                    jobs: state.initialJobs
                }
            } else {
                let updatedArray = [];
                let jobsArray = JSON.parse(JSON.stringify(state.initialJobs));
                for (let i = 0; i < jobsArray.length; i++) {
                    let isPresent = true;
                    for (let j = 0; j < newTagsArray.length; j++) {
                        if (!jobsArray[i].tags.includes(newTagsArray[j])) {
                            isPresent = false;
                        }
                    }
                    if (isPresent === true) {
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


export const { createJobsData, addFilterTag, removeFilterTag, removeAllFilterTags } = filterSlice.actions;

export default filterSlice.reducer;