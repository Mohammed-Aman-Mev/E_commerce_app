import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allItem: null,
  addinCart: [],
  detail: null,
  isItem: true,
};

const itemSlice = createSlice({
  name: "e_item",
  initialState,
  reducers: {
    addtoItem: (state, action) => {
      state.allItem = action.payload;
    },

    checkisItem: (state, action) => {
      state.isItem = action.payload;
    },

    addtoCart: (state, action) => {
      state.addinCart = [action.payload, ...state.addinCart];
    },

    removetoCart: (state, action) => {
      state.addinCart = state.addinCart.filter((item, ind) => {
        if (item.id !== action.payload) {
          return item;
        }
        // else{
        //    state.addinCart[ind]={...state.addinCart[ind],qty:state.addinCart[ind].qty-1,}
        // }
      });
    },
    addmoreItem: (state, action) => {
      state.addinCart.filter((z, ind) => {
        if (z.id === action.payload.item.id) {
          state.addinCart[ind] = {
            ...action.payload.item,
            qty: action.payload.qty + 1,
            GST: action.payload.category,
            // GrandTotal: (action.payload.qty + 1) * state.addinCart[ind].price,
            GrandTotal:
              ((state.addinCart[ind].price / 100) * action.payload.category +
                state.addinCart[ind].price) *
              (action.payload.qty + 1),
          };
        }
      });
    },
    removemoreItem: (state, action) => {
      if (action.payload.qty <= 0) {
        state.addinCart = state.addinCart.filter((i) => {
          if (i.id !== action.payload.id) {
            return i;
          }
        });
      } else {
        state.addinCart.filter((i, ind) => {
          if (i.id === action.payload.id) {
            state.addinCart[ind] = action.payload;
          }
        });
      }
    },
    addDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const {
  addtoItem,
  addtoCart,
  removetoCart,
  addmoreItem,
  checkisItem,
  removemoreItem,
  addDetail,
} = itemSlice.actions;

export default itemSlice.reducer;
