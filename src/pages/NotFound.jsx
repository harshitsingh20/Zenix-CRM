
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="page-transition min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-9xl font-bold text-primary/20 mb-2">404</h1>
        <h2 className="heading-md mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been moved or deleted.
        </p>
        <Button to="/" variant="default" className="flex items-center mx-auto">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Return to home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
