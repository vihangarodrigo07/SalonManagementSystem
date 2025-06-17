import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users/1");
        setUser(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      }
    };
    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8080/api/users/${user.id}",
        {
          username,
          email,
          phoneNumber,
        }
      );
      setUser(response.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Error updating profile!");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image"></div>
        <h2>Your Profile</h2>
        {user ? (
          <div className="profile-info">
            {isEditing ? (
              <form className="profile-form" onSubmit={handleUpdateProfile}>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder="Phone Number"
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <div>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phoneNumber}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            )}
          </div>
        ) : (
          <p className="loading">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;