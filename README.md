# simple--rock-paper-scissor-
A simple Rock–Paper–Scissors game built with basic JavaScript logic.

From this project, the following concepts can be learned:
- **DOM manipulation**: using selectors and editing elements, e.g. `document.textContent = 'whatever'`.
- **Control statements**: applying conditional logic to determine outcomes.
- **Event handling**: using `addEventListener` to respond to user interactions.

One of the most important lessons I learned is that selectors should be used carefully to target unique elements. For example, if you use a class selector and multiple elements share that class, it can lead to errors such as *“function not defined”* or *“not defined.”* To avoid this, it’s essential to ensure you’re selecting the correct element. This is where the `for...of` loop becomes useful, as it allows you to iterate through multiple elements individually. While building this project, I encountered an error because I was trying to select three buttons at once using `querySelector`, which only returns the first matching element instead of a unique button object.

I plan to extend the game flow so that two players can compete against each other in real time. The idea is to create a system where each player joins a shared room using a unique game ID. This way, both players can connect to the same session and play simultaneously, with their choices being synced and compared instantly.
