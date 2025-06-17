import { motion } from 'framer-motion';
import { FiCalendar, FiStar, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="logo">SALON PRO</h1>
        <button 
          className="profile-btn"
          onClick={() => navigate('/profile')}
        >
          <div className="profile-img"></div>
        </button>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Sidebar */}
        <nav className="dashboard-sidebar">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="nav-item active"
          >
            <FiCalendar className="nav-icon" />
            <span>Dashboard</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="nav-item"
            onClick={() => navigate('/appointments')}
          >
            <FiCalendar className="nav-icon" />
            <span>Appointments</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="nav-item"
            onClick={() => navigate('/reviews')}
          >
            <FiStar className="nav-icon" />
            <span>Reviews</span>
          </motion.div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Hero Banner */}
          <div className="hero-banner">
            <div className="banner-content">
              <h2>Premium Salon Services</h2>
              <p>Book your perfect look today</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="banner-btn"
                onClick={() => navigate('/appointments')}
              >
                Book Now
              </motion.button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <motion.div whileHover={{ scale: 1.03 }} className="stat-card">
              <div className="stat-icon appointment">
                <FiCalendar />
              </div>
              <div className="stat-info">
                <h3>18</h3>
                <p>Today's Appointments</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className="stat-card">
              <div className="stat-icon revenue">
                <FiUser />
              </div>
              <div className="stat-info">
                <h3>12</h3>
                <p>New Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Salon Services Gallery */}
          <div className="gallery-section">
            <h3>Our Services</h3>
            <div className="service-gallery">
              <div className="service-card hair-cut">
                <div className="service-overlay">
                  <span>Hair Cutting</span>
                </div>
              </div>
              <div className="service-card hair-color">
                <div className="service-overlay">
                  <span>Hair Coloring</span>
                </div>
              </div>
              <div className="service-card hair-spa">
                <div className="service-overlay">
                  <span>Hair Spa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;