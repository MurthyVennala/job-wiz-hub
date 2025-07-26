import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Clock, 
  Star,
  ArrowRight,
  Sparkles,
  Globe,
  MessageSquare
} from 'lucide-react';

// Components
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import JobCard from '@/components/JobCard';
import Sidebar from '@/components/Sidebar';
import AIChatbot from '@/components/AIChatbot';
import JobCategories from '@/components/JobCategories';
import StateSelector from '@/components/StateSelector';

// Assets
import careerGuidanceImage from '@/assets/career-guidance.jpg';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'hi' | 'te'>('en');
  const [activeCategory, setActiveCategory] = useState('home');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const translations = {
    en: {
      latestUpdates: "Latest Job Updates",
      newUpdates: "New Updates",
      viewAll: "View All",
      careerGuidance: "Get Career Guidance with AI Assistant",
      careerSubtitle: "Smart job recommendations and personalized career advice",
      chatWithAI: "Chat with AI",
      exploreJobs: "Explore Jobs",
      quickStats: "Quick Stats",
      totalJobs: "Total Active Jobs",
      newToday: "New Today",
      trending: "Trending",
      lastUpdated: "Last Updated",
      minutes: "minutes ago"
    },
    hi: {
      latestUpdates: "नवीनतम नौकरी अपडेट",
      newUpdates: "नए अपडेट",
      viewAll: "सभी देखें",
      careerGuidance: "AI सहायक के साथ करियर मार्गदर्शन प्राप्त करें",
      careerSubtitle: "स्मार्ट नौकरी सिफारिशें और व्यक्तिगत करियर सलाह",
      chatWithAI: "AI के साथ चैट करें",
      exploreJobs: "नौकरियों का अन्वेषण करें",
      quickStats: "त्वरित आंकड़े",
      totalJobs: "कुल सक्रिय नौकरियां",
      newToday: "आज नई",
      trending: "ट्रेंडिंग",
      lastUpdated: "अंतिम अपडेट",
      minutes: "मिनट पहले"
    },
    te: {
      latestUpdates: "తాజా ఉద్యోగ అప్‌డేట్‌లు",
      newUpdates: "కొత్త అప్‌డేట్‌లు",
      viewAll: "అన్నింటినీ చూడండి",
      careerGuidance: "AI సహాయకుడితో కెరీర్ మార్గదర్శనం పొందండి",
      careerSubtitle: "స్మార్ట్ ఉద్యోగ సిఫార్సులు మరియు వ్యక్తిగత కెరీర్ సలహా",
      chatWithAI: "AIతో చాట్ చేయండి",
      exploreJobs: "ఉద్యోగాలను అన్వేషించండి",
      quickStats: "క్విక్ స్టాట్స్",
      totalJobs: "మొత్తం క్రియాశీల ఉద్యోగాలు",
      newToday: "ఈరోజు కొత్త",
      trending: "ట్రెండింగ్",
      lastUpdated: "చివరిగా అప్‌డేట్ చేయబడింది",
      minutes: "నిమిషాల క్రితం"
    }
  };

  const t = translations[language];

  // Mock job data with multi-language support
  const recentJobs = [
    {
      id: '1',
      title: language === 'en' ? 'IB 4987 Security Assistant/Executive Online Form 2025' : 
             language === 'hi' ? 'IB 4987 सुरक्षा सहायक/कार्यकारी ऑनलाइन फॉर्म 2025' :
             'IB 4987 సెక్యూరిటీ అసిస్టెంట్/ఎగ్జిక్యూటివ్ ఆన్‌లైన్ ఫారం 2025',
      organization: 'Intelligence Bureau',
      category: 'Defense',
      location: language === 'en' ? 'All India' : language === 'hi' ? 'अखिल भारत' : 'అఖిల భారతదేశం',
      education: language === 'en' ? 'Graduate' : language === 'hi' ? 'स्नातक' : 'గ్రాడ్యుయేట్',
      posts: 4987,
      applicationDeadline: '2025-02-28',
      notificationDate: '2025-01-20',
      isNew: true,
      isHot: true,
      link: '#'
    },
    {
      id: '2',
      title: language === 'en' ? 'BSF 3588 Constable Tradesman Online Form 2025' :
             language === 'hi' ? 'BSF 3588 कांस्टेबल ट्रेड्समैन ऑनलाइन फॉर्म 2025' :
             'BSF 3588 కాన్‌స్టేబుల్ ట్రేడ్స్‌మ్యాన్ ఆన్‌లైన్ ఫారం 2025',
      organization: 'Border Security Force',
      category: 'Police',
      location: language === 'en' ? 'All India' : language === 'hi' ? 'अखिल भारत' : 'అఖిల భారతదేశం',
      education: language === 'en' ? '10th Pass' : language === 'hi' ? '10वीं पास' : '10వ తరగతి ఉత్తీర్ణత',
      posts: 3588,
      applicationDeadline: '2025-03-15',
      notificationDate: '2025-01-18',
      isNew: true,
      link: '#'
    },
    {
      id: '3',
      title: language === 'en' ? 'IBPS PO/MT 5208 Online Form 2025' :
             language === 'hi' ? 'IBPS PO/MT 5208 ऑनलाइन फॉर्म 2025' :
             'IBPS PO/MT 5208 ఆన్‌లైన్ ఫారం 2025',
      organization: 'Institute of Banking Personnel Selection',
      category: 'Bank',
      location: language === 'en' ? 'All India' : language === 'hi' ? 'अखिल भारत' : 'అఖిల భారతదేశం',
      education: language === 'en' ? 'Graduate' : language === 'hi' ? 'स्नातक' : 'గ్రాడ్యుయేట్',
      posts: 5208,
      applicationDeadline: '2025-03-10',
      notificationDate: '2025-01-15',
      isHot: true,
      link: '#'
    },
    {
      id: '4',
      title: language === 'en' ? 'AIIMS 3500 Nursing Officer Online Form 2025' :
             language === 'hi' ? 'AIIMS 3500 नर्सिंग अधिकारी ऑनलाइन फॉर्म 2025' :
             'AIIMS 3500 నర్సింగ్ ఆఫీసర్ ఆన్‌లైన్ ఫారం 2025',
      organization: 'All India Institute of Medical Sciences',
      category: 'Medical',
      location: language === 'en' ? 'Delhi' : language === 'hi' ? 'दिल्ली' : 'ఢిల్లీ',
      education: language === 'en' ? 'B.Sc Nursing' : language === 'hi' ? 'B.Sc नर्सिंग' : 'B.Sc నర్సింగ్',
      posts: 3500,
      applicationDeadline: '2025-02-25',
      notificationDate: '2025-01-12',
      isNew: true,
      link: '#'
    },
    {
      id: '5',
      title: language === 'en' ? 'Bank of Baroda 2500 LBO Online Form 2025' :
             language === 'hi' ? 'बैंक ऑफ बड़ौदा 2500 LBO ऑनलाइन फॉर्म 2025' :
             'బ్యాంక్ ఆఫ్ బరోడా 2500 LBO ఆన్‌లైన్ ఫారం 2025',
      organization: 'Bank of Baroda',
      category: 'Bank',
      location: language === 'en' ? 'All India' : language === 'hi' ? 'अखिल भारत' : 'అఖిల భారతదేశం',
      education: language === 'en' ? 'Graduate' : language === 'hi' ? 'स्नातक' : 'గ్రాడ్యుయేట్',
      posts: 2500,
      applicationDeadline: '2025-02-20',
      notificationDate: '2025-01-10',
      link: '#'
    },
    {
      id: '6',
      title: language === 'en' ? 'RRB 6238 Technician Vacancy 2025' :
             language === 'hi' ? 'RRB 6238 तकनीशियन रिक्ति 2025' :
             'RRB 6238 టెక్నీషియన్ వేకెన్సీ 2025',
      organization: 'Railway Recruitment Board',
      category: 'Railway',
      location: language === 'en' ? 'All India' : language === 'hi' ? 'अखिल भारत' : 'అఖిల భారతదేశం',
      education: language === 'en' ? 'ITI/Diploma' : language === 'hi' ? 'ITI/डिप्लोमा' : 'ITI/డిప్లొమా',
      posts: 6238,
      applicationDeadline: '2025-04-10',
      notificationDate: '2025-01-08',
      isHot: true,
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        language={language}
        onLanguageChange={setLanguage}
        onChatbotOpen={() => setIsChatbotOpen(true)}
      />

      {/* Navigation */}
      <Navigation 
        language={language}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Sidebar 
              language={language}
              onSectionChange={setActiveCategory}
            />
            
            <StateSelector 
              language={language}
              onStateSelect={setSelectedState}
              selectedState={selectedState}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Career Guidance Hero Section */}
            <Card className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="absolute inset-0">
                <img 
                  src={careerGuidanceImage} 
                  alt="Career Guidance" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
              </div>
              
              <CardContent className="relative z-10 p-8">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                      <Sparkles className="h-6 w-6 text-yellow-300" />
                      <Badge className="bg-yellow-500 text-yellow-900 font-medium">
                        AI Powered
                      </Badge>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{t.careerGuidance}</h2>
                    <p className="text-lg text-white/90 mb-6">{t.careerSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        onClick={() => setIsChatbotOpen(true)}
                        className="btn-accent"
                        size="lg"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        {t.chatWithAI}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      >
                        <Globe className="h-5 w-5 mr-2" />
                        {t.exploreJobs}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-800">12,450+</div>
                  <div className="text-sm text-green-600">{t.totalJobs}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-800">156</div>
                  <div className="text-sm text-blue-600">{t.newToday}</div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-800">23</div>
                  <div className="text-sm text-orange-600">{t.trending}</div>
                </CardContent>
              </Card>
            </div>

            {/* Latest Job Updates */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{t.latestUpdates}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {t.lastUpdated}: {Math.floor(Math.random() * 30)} {t.minutes}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {t.viewAll}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {recentJobs.map((job) => (
                    <JobCard 
                      key={job.id} 
                      job={job} 
                      language={language}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Job Categories */}
            <JobCategories 
              language={language}
              onCategorySelect={setActiveCategory}
            />
          </div>
        </div>
      </main>

      {/* AI Chatbot */}
      <AIChatbot 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        language={language}
      />
    </div>
  );
};

export default Index;
