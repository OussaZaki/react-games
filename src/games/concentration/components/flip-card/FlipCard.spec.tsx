import React from "react";
import { shallow } from "enzyme";
import FlipCard from "./flipCard";

const onClick = jest.fn();

// TODO: separate behavior from component
xdescribe("Component FlipCard | ", () => {
  beforeAll(() => {
  });

  it("Render on back by default", () => {
    const card = shallow(<FlipCard onClick={onClick} />);

    expect(card.hasClass('flipcard')).toBeTruthy();
    expect(card.hasClass('flipped')).toBeFalsy();
    expect(card.hasClass('found')).toBeFalsy();
  });

  it("Render on front when flipped is provided", () => {
    const card = shallow(<FlipCard onClick={onClick} flipped={true}/>);

    expect(card.hasClass('flipped')).toBeTruthy();
    expect(card.hasClass('found')).toBeFalsy();
  });

  it("Render on front and grayed when found is provided", () => {
    const card = shallow(<FlipCard onClick={onClick} found={true}/>);

    expect(card.hasClass('flipped')).toBeTruthy();
    expect(card.hasClass('found')).toBeTruthy();
  });

  it("Flip on click", () => {
    const card = shallow(<FlipCard onClick={onClick}/>);
    
    card.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
    expect(card.hasClass('flipped')).toBeTruthy();
  });
});
