import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, Send, Loader2, RefreshCcw, ShieldCheck, CheckCircle, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // CAPTCHA State
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaAnswer('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSuccess(false);
    generateCaptcha();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CAPTCHA Validation
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captchaAnswer) !== correctAnswer) {
      toast({
        variant: "destructive",
        title: "Incorrect Security Check",
        description: "Please solve the math problem correctly to prove you're human.",
      });
      generateCaptcha(); // Regenerate on fail to prevent brute force
      return;
    }

    setIsSubmitting(true);

    // Simulate network request since Supabase is removed
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question or want to discuss an event? Send a message and let's chat.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:Greg@DjGmoney.com" className="text-white hover:text-blue-400 transition-colors">
                      Greg@DjGmoney.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href="tel:+240-668-4734" className="text-white hover:text-blue-400 transition-colors">
                      (240)668.4734                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full">
                    <MessageSquare className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-white">Usually replies within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 relative"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12"
              >
                <div className="bg-green-500/10 p-5 rounded-full ring-1 ring-green-500/50">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Thanks for reaching out, <span className="text-blue-400 font-medium">{formData.name}</span>! I've received your message and will get back to you shortly.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="mt-6 border-zinc-700 bg-zinc-800/50 text-white hover:bg-white/10 hover:text-white"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      className="bg-black/50 border-zinc-700 focus:border-blue-500"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-black/50 border-zinc-700 focus:border-blue-500"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="bg-black/50 border-zinc-700 focus:border-blue-500"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can I help you? Please include any relevant details." 
                    className="min-h-[120px] bg-black/50 border-zinc-700 focus:border-blue-500"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* CAPTCHA Field */}
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium text-white">Security Check</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded border border-zinc-700 select-none min-w-[120px] justify-center">
                      <span className="text-xl font-mono font-bold text-blue-400">
                        {captcha.num1} + {captcha.num2} = ?
                      </span>
                    </div>
                    
                    <Input
                      type="number"
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder="Answer"
                      className="w-full sm:w-32 bg-black/50 border-zinc-700 focus:border-blue-500 text-center font-mono text-lg"
                      required
                    />

                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon"
                      onClick={generateCaptcha}
                      className="text-gray-400 hover:text-white hover:bg-zinc-800"
                      title="Refresh Challenge"
                    >
                      <RefreshCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;