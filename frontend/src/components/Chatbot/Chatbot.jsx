import React, { useState, useRef } from "react";
import conf from "../../conf/conf";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "incoming",
      content: "Hey mate! How can I help you today?",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const chatboxRef = useRef(null);

  const API_KEY = conf.geminiAPI;

  const scrollToBottom = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTo({ top: chatboxRef.current.scrollHeight, behavior: "smooth" });
    }
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const outgoingMessage = { type: "outgoing", content: userMessage.trim() };
    setMessages((prev) => [...prev, outgoingMessage]);
    setUserMessage("");
    scrollToBottom();

    // Add a delay for the bot response
    const thinkingMessage = { type: "incoming", content: "Thinking...!" };
    setMessages((prev) => [...prev, thinkingMessage]);
    
    setTimeout(() => {
      generateResponse(userMessage);
    }, 600);
  };

  const generateResponse = async (userInput) => {
    const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: userInput }],
            },
          ],
        }),
      });

      const data = await response.json();
      const botMessage = data.candidates[0]?.content?.parts[0]?.text || "Oops! Something went wrong. Please try again.";

      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].content = botMessage;
        return updatedMessages;
      });
    } catch (error) {
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].content = "Oops! Something went wrong. Please try again.";
        return updatedMessages;
      });
    } finally {
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed z-50 right-8 bottom-8">
      {/* Chatbot Toggler */}
      <button
        className="flex items-center justify-center w-12 h-12 text-white transition-all duration-300 rounded-full shadow-md bg-primary hover:bg-secondary focus:outline-none"
        onClick={() => setShowChatbot((prev) => !prev)}
      >
        {showChatbot ? <i className="fas fa-chevron-down" /> : <i className="far fa-message" />}
      </button>

      {/* Chatbot Box */}
      {showChatbot && (
        <div className="fixed bottom-20 right-8 bg-white rounded-lg shadow-lg w-96 max-h-[500px] flex flex-col overflow-hidden">
          {/* Header */}
          <header className="flex items-center justify-between p-4 text-white bg-primary">
            <h2 className="text-lg font-semibold">DocAppoint</h2>
            <button
              className="text-white hover:text-gray-200"
              onClick={() => setShowChatbot(false)}
            >
              <i className="fas fa-chevron-down" />
            </button>
          </header>

          {/* Chatbox */}
          <ul
            ref={chatboxRef}
            className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-100"
          >
            {messages.map((message, index) => (
              <li
                key={index}
                className={`flex ${message.type === "outgoing" ? "justify-end" : "justify-start"}`}
              >
                {message.type === "incoming" && (
                  <span className="p-2 mr-2 rounded-full text-primary">
                    <i className="fas fa-robot" />
                  </span>
                )}
                <p
                  className={`p-3 rounded-lg max-w-xs ${
                    message.type === "outgoing"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-gray-200 rounded-bl-none"
                  }`}
                >
                  {message.content}
                </p>
              </li>
            ))}
          </ul>

          {/* Input Area */}
          <div className="flex items-center p-4 bg-gray-100 border-t border-primary">
            <textarea
              className="flex-1 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              rows={1}
            />
            <button
              className="p-2 ml-2 text-white rounded-md bg-primary hover:bg-secondary focus:outline-none"
              onClick={handleSendMessage}
            >
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;