
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Key, LogOut, Save, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import Button from '../components/Button';
import { getCurrentUser, updateUserProfile, logoutUser } from '../utils/api';

const Profile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    password: false,
  });
  
  const [tempUser, setTempUser] = useState({ ...user });
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  // Fetch user data on initial load
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      
      setIsLoading(true);
      try {
        const userData = await getCurrentUser();
        
        // Check if userData exists and if it has an error property
        if (userData && userData.error) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }
        
        setUser({
          name: userData.name,
          email: userData.email,
          password: '••••••••',
        });
        
        setTempUser({
          name: userData.name,
          email: userData.email,
          password: '',
        });
      } catch (err) {
        console.error('Error fetching user data:', err);
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUser();
  }, [navigate]);
  
  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
    setTempUser({ ...user, password: '' });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSave = async (field) => {
    setIsSaving(true);
    
    // Prepare data to send
    const updateData = {};
    updateData[field] = tempUser[field];
    
    // Don't send empty password
    if (field === 'password' && !tempUser.password) {
      setIsEditing((prev) => ({ ...prev, [field]: false }));
      setIsSaving(false);
      return;
    }
    
    const result = await updateUserProfile(updateData);
    
    if (result.error) {
      toast.error(result.error);
      setIsSaving(false);
      return;
    }
    
    // Update user state with response data
    if (field !== 'password') {
      setUser((prev) => ({ 
        ...prev, 
        [field]: result[field] 
      }));
    } else {
      setUser((prev) => ({ 
        ...prev, 
        password: '••••••••'
      }));
    }
    
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    setIsSaving(false);
    
    // Show notification
    setNotification(`${field.charAt(0).toUpperCase() + field.slice(1)} updated successfully`);
    setTimeout(() => setNotification(null), 3000);
  };
  
  const handleCancel = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
    setTempUser((prev) => ({ 
      ...prev, 
      [field]: user[field] === '••••••••' ? '' : user[field] 
    }));
  };
  
  const handleLogout = () => {
    logoutUser();
    navigate('/login');
    toast.success('Logged out successfully');
  };
  
  if (isLoading) {
    return (
      <div className="page-transition">
        <div className="page-container flex items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-transition">
      <div className="page-container">
        <div className="max-w-2xl mx-auto">
          <h1 className="heading-md mb-8">Profile Settings</h1>
          
          {/* Notification */}
          {notification && (
            <div className="animate-slide-down mb-6 bg-primary/10 border border-primary/20 text-primary rounded-md p-4 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              {notification}
            </div>
          )}
          
          <div className="glass-morphism rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Name</h3>
                </div>
                {!isEditing.name ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleEdit('name')}
                  >
                    Edit
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCancel('name')}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleSave('name')}
                      disabled={isSaving}
                      className="flex items-center"
                    >
                      {isSaving ? 'Saving...' : (
                        <>
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
              {isEditing.name ? (
                <div className="mt-4">
                  <input
                    name="name"
                    type="text"
                    value={tempUser.name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ) : (
                <p className="mt-2">{user.name}</p>
              )}
            </div>
            
            <div className="p-6 border-b border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Email</h3>
                </div>
                {!isEditing.email ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleEdit('email')}
                  >
                    Edit
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCancel('email')}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleSave('email')}
                      disabled={isSaving}
                      className="flex items-center"
                    >
                      {isSaving ? 'Saving...' : (
                        <>
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
              {isEditing.email ? (
                <div className="mt-4">
                  <input
                    name="email"
                    type="email"
                    value={tempUser.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ) : (
                <p className="mt-2">{user.email}</p>
              )}
            </div>
            
            <div className="p-6 border-b border-border/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Key className="h-5 w-5 text-muted-foreground" />
                  <h3 className="font-medium">Password</h3>
                </div>
                {!isEditing.password ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleEdit('password')}
                  >
                    Change
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleCancel('password')}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => handleSave('password')}
                      disabled={isSaving}
                      className="flex items-center"
                    >
                      {isSaving ? 'Saving...' : (
                        <>
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </div>
              {isEditing.password ? (
                <div className="mt-4 space-y-4">
                  <input
                    name="password"
                    type="password"
                    value={tempUser.password}
                    onChange={handleChange}
                    placeholder="New password"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ) : (
                <p className="mt-2">{user.password}</p>
              )}
            </div>
            
            <div className="p-6">
              <Button 
                variant="outline" 
                className="flex items-center text-destructive" 
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
