import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kanudeep9876@gmail.com',
    link: 'mailto:kanudeep9876@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amanjotsingh73',
    link: 'https://www.linkedin.com/in/amanjotsingh73'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/amanjot73',
    link: 'https://github.com/amanjot73'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    link: null
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:kanudeep9876@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>GET IN TOUCH</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities for collaboration and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <Card key={idx} className="border-gray-700 bg-gray-900">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-teal-950 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white hover:text-teal-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-700 bg-gray-900">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-gray-400">
                I'll respond as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="text"
                    placeholder="Your Name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Input 
                    type="text"
                    placeholder="Subject"
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message"
                    rows={6}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}