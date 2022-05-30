import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "🍕": "Pizza",
  "😢": "Sad face",
  "🥡": "Takeout",
  "😑": "Expressionaless face",
  "💕": "Love",
  "👍": "Thumbs Up",
  "👨‍💻": "A boy coding",
  "⚽": "Football",
  "🌍": "Earth",
  "🤳": "Taking selfie",
  "🔥": "Fire",
  "💸": "Money with wings",
  "😎": "Face with sunglasses",
  "🎁": "Wrapped gift",
  "🎢": "Roller Coaster",
  "🧤": "Gloves",
  "💋": "Kiss mark",
  "🌭": "Hotdog",
  "🛹": "Skateboard",
  "🚂": "Locomotive",
  "🚧": "Construction barrier",
  "🍓": "Strawberry",
  "🛸": "UFO",
  "🏓": "Table tennis",
  "🥋": "Martial arts uniform",
  "🎮": "Video game controller",
  "🎵": "Musical note",
  "🪔": "Diya lamp",
  "👻": "Ghost",
  "💩": "Pile of poo",
  "🐱‍👤": "Ninja Cat",
  "🦘": "Kangaroo",
  "🧠": "Brain",
  "🏇": "Horse racing",
  "🧧": "Red envelope",
  "🧵": "Thread",
  "🦺": "Safety vest",
  "🥾": "Hiking shoe",
  "🏀": "Basketball",
  "🎸": "Guitar",
  "💊": "Medicine pill",
  "📮": "Postbox",
  "🌴": "Palm tree"
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