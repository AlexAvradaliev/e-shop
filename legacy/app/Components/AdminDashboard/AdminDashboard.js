'use client';

import { useState } from 'react';
import { 
  BsGrid1X2Fill, BsBoxSeam, BsPeople, BsCartCheck, BsGear, 
  BsSearch, BsBell, BsPersonCircle, BsCurrencyDollar, BsGraphUp,
  BsPencilSquare, BsTrash
} from 'react-icons/bs';
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // --- SAMPLE DATA (English) ---
  const ordersData = [
    { id: '#ORD-001', customer: 'John Doe', date: 'May 16, 2026', amount: '$159.90', status: 'Paid' },
    { id: '#ORD-002', customer: 'Jane Smith', date: 'May 16, 2026', amount: '$28.90', status: 'Processing' },
    { id: '#ORD-003', customer: 'Paul Martin', date: 'May 15, 2026', amount: '$699.00', status: 'Shipped' },
    { id: '#ORD-004', customer: 'Sophie White', date: 'May 14, 2026', amount: '$119.00', status: 'Cancelled' },
    { id: '#ORD-005', customer: 'Luke Skywalker', date: 'May 12, 2026', amount: '$239.00', status: 'Paid' },
  ];

  const productsData = [
    { id: 'PRD-101', image: 'https://media.e.leclerc/3459223592033_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130', name: 'Round Above Ground Pool 305x76cm', price: '$28.90', stock: 45, category: 'Garden' },
    { id: 'PRD-102', image: 'https://media.e.leclerc/3760285050905_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130', name: '10-Seater Rattan Garden Furniture Set', price: '$699.90', stock: 12, category: 'Furniture' },
    { id: 'PRD-103', image: 'https://media.e.leclerc/3603313232464_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130', name: '3-Burner Gas Griddle', price: '$159.00', stock: 0, category: 'Outdoors' },
    { id: 'PRD-104', image: 'https://fgellaobb.filerobot.com/3700684102546_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130', name: '4-Person Inflatable Hot Tub', price: '$339.00', stock: 5, category: 'Garden' },
  ];

  const usersData = [
    { id: 'USR-01', name: 'John Doe', email: 'john.doe@email.com', registered: 'Feb 01, 2026', ordersCount: 12 },
    { id: 'USR-02', name: 'Jane Smith', email: 'jane.smith@email.com', registered: 'Mar 15, 2026', ordersCount: 4 },
    { id: 'USR-03', name: 'Paul Martin', email: 'paul.m@email.com', registered: 'Apr 22, 2026', ordersCount: 1 },
    { id: 'USR-04', name: 'Sophie White', email: 'sophie.w@email.com', registered: 'May 05, 2026', ordersCount: 0 },
  ];

  // --- RENDER CONTENT BASED ON ACTIVE TAB ---
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            <h1 className="page-title">Dashboard Overview</h1>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon-wrapper blue"><BsCurrencyDollar /></div>
                <div className="stat-info">
                  <h3>Total Revenue</h3>
                  <p>$24,590.00</p>
                  <span className="stat-trend positive"><BsGraphUp /> +12.5%</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper green"><BsCartCheck /></div>
                <div className="stat-info">
                  <h3>Total Orders</h3>
                  <p>145</p>
                  <span className="stat-trend positive"><BsGraphUp /> +5.2%</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper orange"><BsPeople /></div>
                <div className="stat-info">
                  <h3>New Customers</h3>
                  <p>64</p>
                  <span className="stat-trend negative">-2.1%</span>
                </div>
              </div>
            </div>

            <div className="admin-panel-section">
              <div className="section-header">
                <h2>Recent Orders</h2>
                <button className="view-all-btn" onClick={() => setActiveTab('orders')}>View All</button>
              </div>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.slice(0, 3).map((order, i) => (
                      <tr key={i}>
                        <td className="font-medium">{order.id}</td>
                        <td>{order.customer}</td>
                        <td className="font-bold">{order.amount}</td>
                        <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case 'orders':
        return (
          <>
            <h1 className="page-title">All Orders</h1>
            <div className="admin-panel-section">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersData.map((order, i) => (
                      <tr key={i}>
                        <td className="font-medium">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.date}</td>
                        <td className="font-bold">{order.amount}</td>
                        <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                        <td><button className="action-link">Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case 'products':
        return (
          <>
            <div className="page-header-actions">
              <h1 className="page-title">Product Catalog</h1>
              <button className="btn-primary-admin">+ Add Product</button>
            </div>
            <div className="admin-panel-section">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsData.map((product, i) => (
                      <tr key={i}>
                        <td className="product-cell">
                          <img src={product.image} alt={product.name} className="product-table-img" />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <span className="product-id-text">{product.id}</span>
                          </div>
                        </td>
                        <td>{product.category}</td>
                        <td className="font-bold">{product.price}</td>
                        <td>
                          <span className={`stock-indicator ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                            {product.stock} in stock
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons-row">
                            <button className="action-icon-btn edit"><BsPencilSquare /></button>
                            <button className="action-icon-btn delete"><BsTrash /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      case 'users':
        return (
          <>
            <h1 className="page-title">Customer List</h1>
            <div className="admin-panel-section">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Joined</th>
                      <th>Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersData.map((user, i) => (
                      <tr key={i}>
                        <td className="font-medium text-gray">{user.id}</td>
                        <td className="font-bold">{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.registered}</td>
                        <td>{user.ordersCount} order(s)</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );

      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="admin-layout">
      {/* --- SIDEBAR --- */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <div className="logo-circle">L</div>
          <span>Admin Pro</span>
        </div>
        <nav className="admin-nav">
          <button className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <BsGrid1X2Fill /> Dashboard
          </button>
          <button className={`admin-nav-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
            <BsCartCheck /> Orders
          </button>
          <button className={`admin-nav-item ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
            <BsBoxSeam /> Products
          </button>
          <button className={`admin-nav-item ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            <BsPeople /> Customers
          </button>
        </nav>
        <div className="admin-nav-bottom">
          <button className="admin-nav-item"><BsGear /> Settings</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="admin-search">
            <BsSearch className="search-icon" />
            <input type="text" placeholder="Search orders, products..." />
          </div>
          <div className="admin-header-actions">
            <button className="icon-btn-admin relative">
              <BsBell />
              <span className="notification-badge">3</span>
            </button>
            <div className="admin-profile">
              <BsPersonCircle className="profile-icon" />
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className="admin-content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;