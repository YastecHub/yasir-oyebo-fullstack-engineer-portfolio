import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = 'myzrdlvp';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Let's Talk Backend</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Whether you need to scale an existing API, migrate legacy .NET systems, or integrate AI into your workflow, I'm ready to ship.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <Mail className="text-violet-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href={`mailto:${HERO_DATA.email}`} className="font-medium hover:text-white transition-colors">{HERO_DATA.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <Phone className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="font-medium">{HERO_DATA.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <MapPin className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="font-medium">{HERO_DATA.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-900/50 rounded-xl border border-slate-800">
               <h4 className="text-white font-bold mb-2">My Favorite Chess Opening?</h4>
               <p className="text-slate-400 text-sm">The Sicilian Defense. Like my code: aggressive, tactical, and resilient under pressure.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            {state.succeeded ? (
              <div className="p-6 rounded-lg bg-emerald-900/30 border border-emerald-700">
                <h3 className="text-white font-bold text-lg">Message Sent</h3>
                <p className="text-slate-300">Thanks — I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input name="name" type="text" id="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input name="email" type="email" id="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="john@example.com" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <input name="subject" type="text" id="subject" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="Project Inquiry" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea name="message" id="message" rows={4} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" placeholder="Tell me about your backend challenges..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
                    ${state.submitting ? 'opacity-80 cursor-wait' : 'bg-gradient-to-r from-violet-600 to-blue-600 hover:shadow-lg hover:shadow-violet-500/25'}
                  `}
                >
                  {!state.submitting && <><Send size={18} /> Send Message</>}
                  {state.submitting && 'Sending...'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;