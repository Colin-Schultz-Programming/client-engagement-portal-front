export interface IAssociate {
    firstName?: string,
    lastName?: string,
    testScores?: {
        week: number,
        score: number
    }[],
    techScores?: {
        tech: string,
        score: number
    }[]
};

// const initialState: IAssociateState = {};

// export associateReducer = (state = initialState, action:{type:string, payload:IAssociate}) => {
    // switch(action.type) {
    //     case associateTypes.GET_ALL_ASSOCIATES:
    //         return {
                
    //         }
    // }
//     return state;
// }