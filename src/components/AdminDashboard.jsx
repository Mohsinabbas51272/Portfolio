import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, User, Mail, MessageSquare, Calendar } from 'lucide-react';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../firebase';
import './AdminDashboard.css';

const AdminDashboard = ({ onBack }) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const contactRef = ref(db, 'contact_responses');
    
    // Listen for data changes in real-time
    const unsubscribe = onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const responsesList = Object.keys(data).map(key => ({
          ...data[key],
          id: key
        })).reverse();
        setResponses(responsesList);
      } else {
        setResponses([]);
      }
    }, (error) => {
      console.error("Firebase Read Error:", error);
      if (error.message.includes("permission_denied")) {
        alert("Permission Denied! Please check your Firebase Database Rules.");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete this response?')) {
      const responseRef = ref(db, `contact_responses/${id}`);
      remove(responseRef);
    }
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all responses?')) {
      const contactRef = ref(db, 'contact_responses');
      remove(contactRef);
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
