import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };
  return <div className="bg-light-300 dark:bg-dark-100 p-6 rounded-lg">
      <h3 className="font-bold text-lg mb-2">Subscribe to Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
        Get the latest posts delivered right to your inbox.
      </p>
      {isSubmitted ? <div className="text-green-500 text-sm">
          Thanks for subscribing! Please check your email to confirm.
        </div> : <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 bg-white dark:bg-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" required />
          <button type="submit" className="w-full bg-gold text-dark-100 py-2 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center">
            <SendIcon size={18} className="mr-2" />
            Subscribe
          </button>
        </form>}
    </div>;
};
export default NewsletterSignup;