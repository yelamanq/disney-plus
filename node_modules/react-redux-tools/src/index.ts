import { useDispatch, useSelector } from "react-redux";
import { createStore, Reducer } from "redux";
import createDeepClone from "rfdc";

type PayloadAction<ActionType, Payload extends unknown> = {
  type: ActionType;
  payload: Payload;
};

type Dispatch<State, Action extends PayloadAction<string, Partial<State>>> = (
  action: Action
) => State;

type DefaultPayloadAction<State> = PayloadAction<string, Partial<State>>;

const createReducer = <State, Actions extends DefaultPayloadAction<State>>(
  reducer: Reducer<State, Actions>
) => reducer;

type ReactReduxState<T, State, Action extends DefaultPayloadAction<State>> = [
  T,
  Dispatch<State, Action>
];

const deepClone = createDeepClone({
  circles: false,
  proto: true,
});

const createReduxUseState = <State>(initialState: State) => {
  type StateAction = PayloadAction<"update", Partial<State>>;
  const reducer = createReducer<State, StateAction>(
    (state = initialState, { type, payload }) => {
      if (type === "update") {
        const newState: State = {
          ...deepClone(state),
          ...deepClone(payload),
        };
        return newState;
      }
      return deepClone(state);
    }
  );
  const store = createStore(reducer);
  const useState = (name: keyof State) => {
    const value_ = useSelector((state: State) => state[name]);
    const dispatch = useDispatch<Dispatch<State, StateAction>>();
    const update = (value: typeof value_) => {
      dispatch({
        type: "update",
        payload: {
          [name]: value,
        } as Partial<State>,
      });
    };

    return [value_, update] as [typeof value_, typeof update];
  };

  return [store, useState] as [typeof store, typeof useState];
};

export type { PayloadAction, Reducer, Dispatch, ReactReduxState };
export { createStore, createReducer, createReduxUseState };
