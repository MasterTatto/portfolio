import {v1} from "uuid";

const initialState = [
    {id:v1(),title:'Social network',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id:v1(),title:'Todo',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id:v1(),title:'Weather',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id:v1(),title:'Portfolio',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id:v1(),title:'Counter',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    {id:v1(),title:'Chat',description:'Lorem ipsum dolor sit amet, consectetur adipisicing'},
]

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}