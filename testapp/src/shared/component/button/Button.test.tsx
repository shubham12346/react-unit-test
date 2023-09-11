import { render, screen } from "@testing-library/react";
import Button from "./Button";


const MyComponent = () => {
  const handleClick = () => {
    console.log("Do nothing");
  };
  return (     
      <Button
      btnText="click here"
      btnType="button"
      onclick={handleClick}
      className="buttonStyle"
    />
     
    
  );
};

test("renders  button component ", () => {
  render(<MyComponent />);

  const clickHereButton = screen.getByRole("button", { name: /click here/i });
  expect(clickHereButton).toBeInTheDocument();

  const clickHereButtonText = screen.getByText(/click here/i);
  expect(clickHereButtonText).toBeInTheDocument();

});
