# ConvoHub 💬

**A real-time chat application built with Node.js and WebSockets.**

---

## Features

- Real-time bidirectional messaging using WebSockets
- Clean, responsive UI
- Audio notifications on new messages
- Lightweight — no framework dependencies on the frontend

## Project Structure

```
ConvoHub/
├── css/
│   └── style.css          # App styles
├── js/
│   └── client.js          # Frontend WebSocket client logic
├── nodeServer/
│   ├── index.js           # Node.js WebSocket server
│   ├── package.json
│   └── package-lock.json
├── index.html             # Main chat UI
├── notification.mp3       # New message sound
└── image.png              # App asset
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ConvoHub.git
cd ConvoHub

# Install server dependencies
cd nodeServer
npm install
```

### Running Locally

```bash
# From the nodeServer directory
node index.js
```

Then open `index.html` in your browser (or serve it with a static file server).

---

## Tech Stack

| Layer    | Technology               |
|----------|--------------------------|
| Frontend | HTML, CSS, JavaScript    |
| Backend  | Node.js                  |
| Protocol | WebSockets (ws library)  |

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

