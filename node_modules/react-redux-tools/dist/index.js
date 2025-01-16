"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReduxUseState = exports.createReducer = exports.createStore = void 0;
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
Object.defineProperty(exports, "createStore", { enumerable: true, get: function () { return redux_1.createStore; } });
const rfdc_1 = __importDefault(require("rfdc"));
const createReducer = (reducer) => reducer;
exports.createReducer = createReducer;
const deepClone = rfdc_1.default({
    circles: false,
    proto: true,
});
const createReduxUseState = (initialState) => {
    const reducer = createReducer((state = initialState, { type, payload }) => {
        if (type === "update") {
            const newState = {
                ...deepClone(state),
                ...deepClone(payload),
            };
            return newState;
        }
        return deepClone(state);
    });
    const store = redux_1.createStore(reducer);
    const useState = (name) => {
        const value_ = react_redux_1.useSelector((state) => state[name]);
        const dispatch = react_redux_1.useDispatch();
        const update = (value) => {
            dispatch({
                type: "update",
                payload: {
                    [name]: value,
                },
            });
        };
        return [value_, update];
    };
    return [store, useState];
};
exports.createReduxUseState = createReduxUseState;
