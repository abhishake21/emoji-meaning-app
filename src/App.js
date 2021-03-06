import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "๐": "Pizza",
  "๐ข": "Sad face",
  "๐ฅก": "Takeout",
  "๐": "Expressionaless face",
  "๐": "Love",
  "๐": "Thumbs Up",
  "๐จโ๐ป": "A boy coding",
  "โฝ": "Football",
  "๐": "Earth",
  "๐คณ": "Taking selfie",
  "๐ฅ": "Fire",
  "๐ธ": "Money with wings",
  "๐": "Face with sunglasses",
  "๐": "Wrapped gift",
  "๐ข": "Roller Coaster",
  "๐งค": "Gloves",
  "๐": "Kiss mark",
  "๐ญ": "Hotdog",
  "๐น": "Skateboard",
  "๐": "Locomotive",
  "๐ง": "Construction barrier",
  "๐": "Strawberry",
  "๐ธ": "UFO",
  "๐": "Table tennis",
  "๐ฅ": "Martial arts uniform",
  "๐ฎ": "Video game controller",
  "๐ต": "Musical note",
  "๐ช": "Diya lamp",
  "๐ป": "Ghost",
  "๐ฉ": "Pile of poo",
  "๐ฑโ๐ค": "Ninja Cat",
  "๐ฆ": "Kangaroo",
  "๐ง ": "Brain",
  "๐": "Horse racing",
  "๐งง": "Red envelope",
  "๐งต": "Thread",
  "๐ฆบ": "Safety vest",
  "๐ฅพ": "Hiking shoe",
  "๐": "Basketball",
  "๐ธ": "Guitar",
  "๐": "Medicine pill",
  "๐ฎ": "Postbox",
  "๐ด": "Palm tree"
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Enter above or click an Emoji below to know its meaning."
  );

  function emojiMeaningHandler(event) {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setEmojiMeaning(meaning);
    } else {
      meaning = "Not Found in our Database.";
      setEmojiMeaning(meaning);
    }

    if (userInput === "") {
      meaning = "Enter above or click an Emoji below to know its meaning.";
      setEmojiMeaning(meaning);
    }
  }

  function emojiClickHandler(e) {
    setEmojiMeaning(emojiDictionary[e]);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Meaning</h1>
      <input onChange={emojiMeaningHandler}></input>
      <h2 className="emoji-meaning">{emojiMeaning}</h2>
      <div className="emoji-list">
        {emojis.map((emoji) => (
          <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </li>
        ))}
      </div>
    </div>
  );
}