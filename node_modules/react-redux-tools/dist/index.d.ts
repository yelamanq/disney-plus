import { createStore, Reducer } from "redux";
declare type PayloadAction<ActionType, Payload extends unknown> = {
    type: ActionType;
    payload: Payload;
};
declare type Dispatch<State, Action extends PayloadAction<string, Partial<State>>> = (action: Action) => State;
declare type DefaultPayloadAction<State> = PayloadAction<string, Partial<State>>;
declare const createReducer: <State, Actions extends DefaultPayloadAction<State>>(reducer: Reducer<State, Actions>) => Reducer<State, Actions>;
declare type ReactReduxState<T, State, Action extends DefaultPayloadAction<State>> = [
    T,
    Dispatch<State, Action>
];
declare const createReduxUseState: <State>(initialState: State) => [import("redux").Store<State, {
    type: "update";
    payload: Partial<State>;
}>, (name: keyof State) => [State[keyof State], (value: State[keyof State]) => void]];
export type { PayloadAction, Reducer, Dispatch, ReactReduxState };
export { createStore, createReducer, createReduxUseState };
//# sourceMappingURL=index.d.ts.map