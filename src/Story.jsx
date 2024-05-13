// Import necessary modules and components
import React, { useState } from "react";
import Button from "./components/Button";
import { curve } from "./assets";
import { useRef } from "react";
import { Input } from "keep-react";
import { languages } from './constants/index';
import { MySidebar } from "./components/MySidebar";

const Story = () => {
  const [userInput, setUserInput] = useState("");
  const parallaxRef = useRef(null);

  // Function to handle form submission and generate the story
  const generateStory = () => {
    // Here you can implement the logic to generate the story based on user input
    // For demonstration purposes, let's just echo back the user input
    console.log(userInput);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <MySidebar />
        <div className="flex-1 pt-[12rem] -mt-[5.25rem]">
          <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
              <h1 className="text-5xl mb-6">
                Create a{" "}
                <span className="inline-block relative">
                  new story{" "}
                  <img
                    src={curve}
                    className="absolute top-full left-0 w-full xl:-mt-2"
                    width={624}
                    height={28}
                    alt="Curve"
                  />
                </span>
              </h1>
              <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                Every good story starts with a good idea
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  generateStory();
                }}
              >
                <textarea
                  className="w-full p-4 mb-2 border-none rounded-md"
                  placeholder="Enter your story prompt..."
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <div className="justify-between flex">
                  <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>
                      Select language
                    </option>
                    {languages.map((language) => (
                      <option key={language.id}>{language.title}</option>
                    ))}
                  </select>
                  <Button white onClick={generateStory}>
                    Generate Story
                  </Button>
                </div>
              </form>
              <div className="flex justify-normal">
                <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 pt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea numquam saepe
                  illum quo rem repellendus, in obcaecati tempora animi omnis officia, nostrum
                  optio laboriosam dolorem aspernatur rerum vel delectus repellat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
