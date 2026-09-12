import React, { useState } from 'react';
import './App.css';

function App() {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/create-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ serviceName, description })
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage(`✅ Service "${serviceName}" created successfully!`);
        setServiceName('');
        setDescription('');
      } else {
        setMessage('❌ Failed to create service');
      }
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🚀 Developer Platform</h1>
      <p>Create a new microservice in seconds</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Service Name</label>
          <input
            type="text"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="e.g., api-service"
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what this service does"
            rows="4"
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Service'}
        </button>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default App;