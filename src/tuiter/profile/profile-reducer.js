import profile from "./profile.json"
import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    profile: {
        firstName: 'Martin',
        lastName: 'Wang',
        handle: '@martinwang',
        profilePicture: 'react.png',
        bannerPicture: 'jquery.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Rtuits and likes are not endorsements.',
        website: 'youtube.com/???',
        location: 'San Jose, CA',
        dateOfBirth: '06/03/1992',
        dateJoined: '4/2019',
        followingCount: 123,
        followersCount: 321
    },
};
const profileSlice = createSlice({
    name:'profile',
    initialState:initialProfile,
    reducers:{
        updateProfile:(state, action) => {
            state.profile = action.payload;
        }
    },
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;