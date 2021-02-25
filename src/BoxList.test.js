import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Color");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add a new box!");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new item", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no items yet
  //expect(queryByText("x")).not.toBeInTheDocument();

  const heightInput = getByLabelText("height");
  const widthInput = getByLabelText("width");
  const colorInput = getByLabelText("color");
  const submitBtn = queryByText("Add a new box!");

  // fill out the form
  fireEvent.change(heightInput, { target: { value: "500px" } });
  fireEvent.change(widthInput, { target: { value: "500px" } });
  fireEvent.change(colorInput, { target: { value: "pink" } });
  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("x")).toBeInTheDocument();
});
