import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Inquiry from Portfolio Website');
      const body = encodeURIComponent(
        `Hi Wesley,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}`
      );
      
      const mailtoLink = `mailto:2ez4wezs@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="minimal-card p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-minimal-primary to-minimal-secondary flex items-center justify-center">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-medium clean-font text-minimal-text mb-2">
          Send Me an Inquiry
        </h3>
        <p className="text-minimal-text-light clean-font">
          This will open your email client with a pre-filled message ready to send!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-minimal-text clean-font">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className={cn(
                "w-full px-4 py-3 border border-minimal-border rounded-lg bg-minimal-surface",
                "focus:ring-2 focus:ring-minimal-primary focus:border-minimal-primary",
                "transition-all duration-300 clean-font",
                "hover:border-minimal-primary/50"
              )}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-minimal-text clean-font">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className={cn(
                "w-full px-4 py-3 border border-minimal-border rounded-lg bg-minimal-surface",
                "focus:ring-2 focus:ring-minimal-primary focus:border-minimal-primary",
                "transition-all duration-300 clean-font",
                "hover:border-minimal-primary/50"
              )}
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-minimal-text clean-font">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={cn(
              "w-full px-4 py-3 border border-minimal-border rounded-lg bg-minimal-surface",
              "focus:ring-2 focus:ring-minimal-primary focus:border-minimal-primary",
              "transition-all duration-300 clean-font",
              "hover:border-minimal-primary/50"
            )}
            placeholder="What's this about?"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-minimal-text clean-font">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className={cn(
              "w-full px-4 py-3 border border-minimal-border rounded-lg bg-minimal-surface",
              "focus:ring-2 focus:ring-minimal-primary focus:border-minimal-primary",
              "transition-all duration-300 clean-font resize-none",
              "hover:border-minimal-primary/50"
            )}
            placeholder="Tell me about your project, ideas, or just say hello!"
          />
        </div>

        {/* Submit Button */}
        <div className="space-y-4">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={cn(
              "w-full py-4 px-6 rounded-lg font-medium clean-font transition-all duration-300",
              "flex items-center justify-center space-x-2",
              isFormValid && !isSubmitting
                ? "bg-minimal-primary text-white hover:bg-minimal-primary/90 hover:scale-[1.02] hover:shadow-lg"
                : "bg-minimal-border text-minimal-text-light cursor-not-allowed",
              isSubmitting && "animate-pulse"
            )}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Opening Email Client...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Inquiry</span>
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5" />
              <span className="clean-font">Email client opened! Please click 'Send' in your email app to complete.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center justify-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span className="clean-font">Unable to open email client. Please email me directly.</span>
            </div>
          )}
        </div>
      </form>

      {/* Alternative Contact Info */}
      <div className="mt-8 pt-6 border-t border-minimal-border text-center">
        <p className="text-sm text-minimal-text-light clean-font mb-2">
          Or contact me directly:
        </p>
        <p className="text-xs text-minimal-text-light clean-font mb-3 opacity-75">
          Note: If email links open in browser (Brave users), please copy the email address manually
        </p>
        <a
          href="mailto:2ez4wezs@gmail.com"
          className="text-minimal-primary hover:text-minimal-secondary transition-colors duration-300 mono-font"
          onClick={(e) => {
            // Handle Brave browser specifically
            e.preventDefault();
            try {
              const link = document.createElement('a');
              link.href = 'mailto:2ez4wezs@gmail.com';
              link.style.display = 'none';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } catch (error) {
              window.location.href = 'mailto:2ez4wezs@gmail.com';
            }
          }}
        >
          2ez4wezs@gmail.com
        </a>
      </div>
    </div>
  );
}
