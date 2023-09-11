import { render, screen } from "@testing-library/react";
import DisplayList from "./DisplayList";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
        
const initialState = {
  listDataReducer: {
    datalist: [
      { id: 1, title: "Test Item 1", description: "This is the first item." },
      { id: 2, title: "Test Item 2", description: "This is the first item." },
    ],
    loading: false,
  },
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let store: any;
store = mockStore(initialState);
const MyComponent = () => {
  return (
    <Provider store={store}>
      <DisplayList />
    </Provider>
  );
};

describe("testing a component using mockstore  ", () => {
  it("renders  list of item ", () => {
    render(<MyComponent />);

    const TestitemOne = screen.getByText(/Test Item 1/i);
    expect(TestitemOne).toBeInTheDocument();
  });
});
