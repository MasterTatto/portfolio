import ts from '../access/typescript.png'
import js from '../access/javascript.png'
import react from '../access/react.png'

const {v1} = require("uuid");


let initialState = {
    progressSkill: [{id: v1(), name: 'HTML', value: '100'},
        {id: v1(), name: 'CSS', value: '90'},
        {id: v1(), name: 'JAVASCRIPT', value: '80'},
        {id: v1(), name: 'REDUX', value: '70'},
        {id: v1(), name: 'REDUX', value: '100'},
        {id: v1(), name: 'REDUX', value: '40'},
    ],
    skill: [
        {id: v1(), name: 'TypeScript', value: '90', img: ts},
        {id: v1(), name: 'JavaScript', value: '90', img: js},
        {id: v1(), name: 'React', value: '80', img: react},

    ]
}

export const progressReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}