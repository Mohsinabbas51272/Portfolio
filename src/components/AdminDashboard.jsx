import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, User, Mail, MessageSquare, Calendar } from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = ({ onBack }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const savedResponses = JSON.parse(localStorage.getItem('contact_responses') || '[]');
    setResponses(savedResponses);
  }, []);

  const handleDelete = (id) => {
    const updatedResponses = responses.filter(r => r.id !== id);
    setResponses(updatedResponses);
    localStorage.setItem('contact_responses', JSON.stringify(updatedResponses));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all responses?')) {
      setResponses([]);
      localStorage.removeItem('contact_responses');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} /> Back to Portfolio
        </button>
        <h1 className="text-gradient">Contact Responses</h1>
        <button className="clear-btn" onClick={clearAll} disabled={responses.length === 0}>
          Clear All
        </button>
      </div>

      <div className="responses-container">
        {responses.length === 0 ? (
          <div className="no-responses glass-card">
            <MessageSquare size={48} className="icon" />
            <p>No responses yet. Submissions will appear here.</p>
          </div>
        ) : (
          <div className="responses-grid">
            {responses.map((resp) => (
              <div key={resp.id} className="response-card glass-card">
                <div className="card-header">
                  <span className="date">
                    <Calendar size={14} /> {resp.date}
                  </span>
                  <button className="delete-btn" onClick={() => handleDelete(resp.id)}>
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="card-body">
                  <div className="info-row">
                    <User size={18} className="icon" />
                    <div>
                      <span className="label">Name</span>
                      <p className="value">{resp.name}</p>
                    </div>
                  </div>
                  
                  <div className="info-row">
                    <Mail size={18} className="icon" />
                    <div>
                      <span className="label">Email</span>
                      <p className="value">{resp.email}</p>
                    </div>
                  </div>
                  
                  <div className="info-row project-info">
                    <MessageSquare size={18} className="icon" />
                    <div>
                      <span className="label">Project Details</span>
                      <p className="value">{resp.project}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
