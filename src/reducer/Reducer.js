export const initialState = {
    LikedMovies: [],
    ButtonToggle: []
};

// state of application and action is what you gonna do
const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_LIST":

            return {
                ...state,
                // change basket with add action
                LikedMovies: [...state.LikedMovies, action.item],

            };

        case "REMOVE_FROM_LIST":
            // findIndex does any of basket item match action id that just passed in
            const index = state.LikedMovies.findIndex(
                (ListItem) => ListItem.id === action.id
            );
            // copy basket into temporary variable newBasket
            let newList = [...state.LikedMovies];

            if (index >= 0) {
                // if found item
                // at index position splice one item
                newList.splice(index, 1);
            } else {
                console.warn(`${action.id} its not in basket! `);
            }

            return {
                // new item whith remaing item in basket
                ...state,
                LikedMovies: newList,
            };


        default:
            return state;
    }
};

export default reducer;
