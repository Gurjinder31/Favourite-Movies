export const initialState = {
    LikedMovies: [],
    
};

// state of application and action is what you gonna do
const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_LIST":

            return {
                ...state,
                // change LikedMovies with add action
                LikedMovies: [...state.LikedMovies, action.item],

            };

        case "REMOVE_FROM_LIST":
            // findIndex does any of LikedMovies item match action id that just passed in
            const index = state.LikedMovies.findIndex(
                (ListItem) => ListItem.id === action.id
            );
            // copy LikedMovies into temporary variable newList
            let newList = [...state.LikedMovies];

            if (index >= 0) {
                // if found item
                // at index position splice one item
                newList.splice(index, 1);
            } else {
                console.warn(`${action.id} its not in LikedMovies! `);
            }

            return {
                // new item with remaining item in LikedMovies
                ...state,
                LikedMovies: newList,
            };


        default:
            return state;
    }
};

export default reducer;
