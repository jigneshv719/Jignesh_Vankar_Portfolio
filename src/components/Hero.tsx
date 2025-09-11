import { Button } from '@/components/ui/button';
import { Download, MessageCircle, Code2, Cpu, Database, Globe, Layers, Github, Linkedin, Twitter, Mail, CodeIcon, Sparkles, Zap, Target, CheckCircle, Users, Clock, ArrowRight, Star, Heart, Rocket, Award, Shield, TrendingUp, Bot, Eye, Wifi, Activity, ArrowUpRight, ExternalLink, MapPin, Calendar, Briefcase, Palette, Lightbulb, Star as StarIcon, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Settings, Search, Filter, Grid, List, Eye as EyeIcon, EyeOff, Lock, Unlock, Key, User, UserCheck, UserX, UserPlus, Users as UsersIcon, UserMinus, Shield as ShieldIcon, ShieldCheck, ShieldX, AlertTriangle, Info, HelpCircle, Check, X, Plus, Minus, Edit, Trash2, Copy, Scissors, RotateCcw, RotateCw, RefreshCw, Loader, Loader2, TrendingUp as TrendingUpIcon, TrendingDown, BarChart3, PieChart, LineChart, Activity as ActivityIcon } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jignesh resume.pdf';
    link.download = 'Jignesh resume.pdf';
    link.click();
  };

  const handleGetInTouch = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-transparent relative overflow-hidden">
      {/* Advanced 2025 Background System */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {/* Floating Geometric Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-float-slow-delayed"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow"></div>

        {/* Moving Light Beams */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-light-beam"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent animate-light-beam-delayed"></div>

        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500/40 rounded-full animate-particles-1"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-500/40 rounded-full animate-particles-2"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-500/40 rounded-full animate-particles-3"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-emerald-500/40 rounded-full animate-particles-4"></div>
        <div className="absolute top-32 left-1/2 w-1.5 h-1.5 bg-pink-500/40 rounded-full animate-particles-5"></div>
        <div className="absolute top-96 right-1/4 w-1 h-1 bg-orange-500/40 rounded-full animate-particles-6"></div>
      </div>
n 
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 relative z-10">
        <div className="min-h-[calc(100vh-5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-20">

          {/* Left Side - Main Content */}
          <div className="flex-1 text-center lg:text-left">



            {/* Professional Main Heading */}
            <div className="mb-8 sm:mb-8 lg:mb-12">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold sm:font-extrabold mb-6 sm:mb-6 leading-tight tracking-tight">
                <div className="relative">
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-slate-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent font-bold">
                    Jignesh
                  </span>
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-500/20 blur-2xl -z-10 transform translate-y-2"></div>
                </div>
              </h1>

              {/* Professional Underline */}
              <div className="relative">
                <div className="h-1 w-32 sm:h-1.5 sm:w-64 lg:w-72 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full mx-auto lg:mx-0"></div>
                <div className="absolute inset-0 h-1 w-32 sm:h-1.5 sm:w-64 lg:w-72 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full mx-auto lg:mx-0 blur-lg"></div>
              </div>
            </div>

            {/* Professional Subheading and Badge */}
            <div className="mb-8 sm:mb-8 lg:mb-12">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-6 flex items-center gap-2 sm:gap-4 justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent font-medium tracking-wide">Full-Stack Developer</span>
                <div className="flex gap-1 sm:gap-2">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </h2>


            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-10 sm:mb-8 lg:mb-12 leading-[1.8] sm:leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              I craft exceptional digital experiences with{' '}
              <span className="text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer border-b-2 border-slate-900 dark:border-white/40 hover:border-slate-700 dark:hover:border-slate-400">HTML/CSS</span>{' '}
              and{' '}
              <span className="text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer border-b-2 border-slate-900 dark:border-white/40 hover:border-slate-700 dark:hover:border-slate-400">JavaScript</span>.
              Expert in{' '}
              <span className="text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer border-b-2 border-slate-900 dark:border-white/40 hover:border-slate-700 dark:hover:border-slate-400">WordPress</span>,{' '}
              <span className="text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer border-b-2 border-slate-900 dark:border-white/40 hover:border-slate-700 dark:hover:border-slate-400">Php</span>, and{' '}
              <span className="text-slate-900 dark:text-white font-semibold hover:text-slate-700 dark:hover:text-slate-400 transition-colors cursor-pointer border-b-2 border-slate-900 dark:border-white/40 hover:border-slate-700 dark:hover:border-slate-400">Node.js</span>.
            </p>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-12 sm:mb-8 lg:mb-12 px-4 sm:px-0">
              <Button
                onClick={handleDownloadResume}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg font-bold rounded-full sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-full sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>

              <Button
                variant="outline"
                onClick={handleGetInTouch}
                className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-full sm:rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Get In Touch</span>
                </div>
              </Button>
            </div>

            {/* Tech Stack Icons */}

          </div>

          {/* Right Side - Stats and Social */}
          <div className="flex-1 lg:max-w-md hidden lg:block">

            {/* Professional Stats Cards */}
            <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              <div className="group">
                <div className="bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-600/60 p-6 sm:p-8 rounded-3xl hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">4+</div>
                      <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Years Exp</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-600/60 p-6 sm:p-8 rounded-3xl hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">25+</div>
                      <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-gradient-to-br from-slate-50/90 to-slate-100/90 dark:from-slate-800/90 dark:to-slate-700/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-600/60 p-6 sm:p-8 rounded-3xl hover:border-emerald-300 dark:hover:border-emerald-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">100%</div>
                      <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;