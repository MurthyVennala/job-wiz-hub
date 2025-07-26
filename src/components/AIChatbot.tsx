import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  RefreshCw,
  MessageCircle
} from 'lucide-react';

interface AIChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'hi' | 'te';
}

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
  translatedContent?: { [key: string]: string };
}

const AIChatbot = ({ isOpen, onClose, language }: AIChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: "AI Job Assistant",
      subtitle: "Ask me about government jobs, applications, and career guidance",
      placeholder: "Ask about jobs, eligibility, application process...",
      send: "Send",
      listening: "Listening...",
      speaking: "Speaking...",
      clear: "Clear Chat",
      close: "Close",
      welcomeMessage: "Hello! I'm your AI Job Assistant. I can help you with:\n\n• Finding relevant government jobs\n• Application procedures and deadlines\n• Eligibility criteria\n• Exam patterns and preparation tips\n• Career guidance\n\nHow can I assist you today?",
      sampleQuestions: [
        "Show me latest bank jobs",
        "What is the eligibility for SSC CGL?",
        "How to prepare for railway exams?",
        "Tell me about teaching job vacancies"
      ]
    },
    hi: {
      title: "AI नौकरी सहायक",
      subtitle: "सरकारी नौकरियों, आवेदन और करियर मार्गदर्शन के बारे में पूछें",
      placeholder: "नौकरियों, योग्यता, आवेदन प्रक्रिया के बारे में पूछें...",
      send: "भेजें",
      listening: "सुन रहा है...",
      speaking: "बोल रहा है...",
      clear: "चैट साफ़ करें",
      close: "बंद करें",
      welcomeMessage: "नमस्ते! मैं आपका AI नौकरी सहायक हूँ। मैं आपकी मदद कर सकता हूँ:\n\n• प्रासंगिक सरकारी नौकरियों को खोजने में\n• आवेदन प्रक्रिया और समय सीमा\n• योग्यता मानदंड\n• परीक्षा पैटर्न और तैयारी के टिप्स\n• करियर मार्गदर्शन\n\nआज मैं आपकी कैसे सहायता कर सकता हूँ?",
      sampleQuestions: [
        "नवीनतम बैंक नौकरियां दिखाएं",
        "SSC CGL के लिए योग्यता क्या है?",
        "रेलवे परीक्षा की तैयारी कैसे करें?",
        "शिक्षक नौकरी की रिक्तियों के बारे में बताएं"
      ]
    },
    te: {
      title: "AI ఉద్యోగ సహాయకుడు",
      subtitle: "ప్రభుత్వ ఉద్యోగాలు, దరఖాస్తులు మరియు కెరీర్ మార్గదర్శనం గురించి అడగండి",
      placeholder: "ఉద్యోగాలు, అర్హత, దరఖాస్తు ప్రక్రియ గురించి అడగండి...",
      send: "పంపండి",
      listening: "వింటోంది...",
      speaking: "మాట్లాడుతోంది...",
      clear: "చాట్ క్లియర్ చేయండి",
      close: "మూసివేయండి",
      welcomeMessage: "హలో! నేను మీ AI ఉద్యోగ సహాయకుడిని. నేను మీకు సహాయం చేయగలను:\n\n• సంబంధిత ప్రభుత్వ ఉద్యోగాలను కనుగొనడంలో\n• దరఖాస్తు విధానాలు మరియు గడువులు\n• అర్హత ప్రమాణాలు\n• పరీక్ష నమూనాలు మరియు తయారీ చిట్కాలు\n• కెరీర్ మార్గదర్శనం\n\nఈరోజు నేను మీకు ఎలా సహాయం చేయగలను?",
      sampleQuestions: [
        "తాజా బ్యాంక్ ఉద్యోగాలను చూపించండి",
        "SSC CGL కోసం అర్హత ఏమిటి?",
        "రైల్వే పరీక్షలకు ఎలా సిద్ధం కావాలి?",
        "బోధనా ఉద్యోగ ఖాళీల గురించి చెప్పండి"
      ]
    }
  };

  const t = translations[language];

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        content: t.welcomeMessage,
        isBot: true,
        timestamp: new Date(),
        translatedContent: {
          en: translations.en.welcomeMessage,
          hi: translations.hi.welcomeMessage,
          te: translations.te.welcomeMessage
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, t.welcomeMessage, messages.length]);

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mock AI response function (replace with actual AI API call)
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // Mock responses based on keywords
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('bank') || lowerMessage.includes('बैंक') || lowerMessage.includes('బ్యాంక్')) {
      return language === 'en' 
        ? "I found several banking job opportunities for you:\n\n🏦 **IBPS PO 2025** - 5,208 posts\n• Eligibility: Graduate\n• Age: 20-30 years\n• Deadline: March 15, 2025\n\n🏦 **Bank of Baroda LBO** - 2,500 posts\n• Eligibility: Graduate\n• Age: 20-28 years\n• Deadline: February 28, 2025\n\nWould you like more details about any specific position?"
        : language === 'hi'
        ? "मैंने आपके लिए कई बैंकिंग नौकरी के अवसर पाए हैं:\n\n🏦 **आईबीपीएस पीओ 2025** - 5,208 पद\n• योग्यता: स्नातक\n• आयु: 20-30 वर्ष\n• अंतिम तिथि: 15 मार्च 2025\n\n🏦 **बैंक ऑफ बड़ौदा एलबीओ** - 2,500 पद\n• योग्यता: स्नातक\n• आयु: 20-28 वर्ष\n• अंतिम तिथि: 28 फरवरी 2025\n\nक्या आप किसी विशिष्ट पद के बारे में और जानकारी चाहेंगे?"
        : "నేను మీ కోసం అనేక బ్యాంకింగ్ ఉద్యోగ అవకాశాలను కనుగొన్నాను:\n\n🏦 **IBPS PO 2025** - 5,208 పోస్టులు\n• అర్హత: గ్రాడ్యుయేట్\n• వయస్సు: 20-30 సంవత్సరాలు\n• గడువు: మార్చి 15, 2025\n\n🏦 **బ్యాంక్ ఆఫ్ బరోడా LBO** - 2,500 పోస్టులు\n• అర్హత: గ్రాడ్యుయేట్\n• వయస్సు: 20-28 సంవత్సరాలు\n• గడువు: ఫిబ్రవరి 28, 2025\n\nమీరు ఏదైనా నిర్దిష్ట స్థానం గురించి మరిన్ని వివరాలు కావాలా?";
    }

    if (lowerMessage.includes('railway') || lowerMessage.includes('रेलवे') || lowerMessage.includes('రైల్వే')) {
      return language === 'en'
        ? "Here are the latest Railway job opportunities:\n\n🚆 **RRB Technician 2025** - 6,238 posts\n• Eligibility: ITI/Diploma\n• Age: 18-28 years\n• Deadline: April 10, 2025\n\n🚆 **Railway Group D** - Expected soon\n• Eligibility: 10th Pass\n• Age: 18-33 years\n\n**Preparation Tips:**\n• Focus on General Awareness\n• Practice Mathematics daily\n• Study Railway-specific topics\n\nWould you like exam pattern details?"
        : language === 'hi'
        ? "यहाँ नवीनतम रेलवे नौकरी के अवसर हैं:\n\n🚆 **आरआरबी तकनीशियन 2025** - 6,238 पद\n• योग्यता: आईटीआई/डिप्लोमा\n• आयु: 18-28 वर्ष\n• अंतिम तिथि: 10 अप्रैल 2025\n\n🚆 **रेलवे ग्रुप डी** - जल्द ही अपेक्षित\n• योग्यता: 10वीं पास\n• आयु: 18-33 वर्ष\n\n**तैयारी के टिप्स:**\n• सामान्य जागरूकता पर फोकस करें\n• गणित का दैनिक अभ्यास करें\n• रेलवे-विशिष्ट विषयों का अध्ययन करें\n\nक्या आप परीक्षा पैटर्न का विवरण चाहेंगे?"
        : "ఇక్కడ తాజా రైల్వే ఉద్యోగ అవకాశాలు ఉన్నాయి:\n\n🚆 **RRB టెక్నీషియన్ 2025** - 6,238 పోస్టులు\n• అర్హత: ITI/డిప్లొమా\n• వయస్సు: 18-28 సంవత్సరాలు\n• గడువు: ఏప్రిల్ 10, 2025\n\n🚆 **రైల్వే గ్రూప్ D** - త్వరలో ఆశించబడుతోంది\n• అర్హత: 10వ తరగతి ఉత్తీర్ణత\n• వయస్సు: 18-33 సంవత్సరాలు\n\n**తయారీ చిట్కాలు:**\n• సాధారణ అవగాహనపై దృష్టి పెట్టండి\n• రోజూ గణితం అభ్యసించండి\n• రైల్వే-నిర్దిష్ట విషయాలను అధ్యయనం చేయండి\n\nమీరు పరీక్ష నమూనా వివరాలు కావాలా?";
    }

    // Default response
    return language === 'en'
      ? "Thank you for your question! I'm here to help with government job information. You can ask me about:\n\n• Job notifications and deadlines\n• Eligibility criteria\n• Application procedures\n• Exam patterns and syllabus\n• Career guidance\n\nPlease feel free to ask anything specific about government jobs!"
      : language === 'hi'
      ? "आपके प्रश्न के लिए धन्यवाद! मैं सरकारी नौकरी की जानकारी में मदद के लिए यहाँ हूँ। आप मुझसे पूछ सकते हैं:\n\n• नौकरी अधिसूचना और समय सीमा\n• योग्यता मानदंड\n• आवेदन प्रक्रिया\n• परीक्षा पैटर्न और पाठ्यक्रम\n• करियर मार्गदर्शन\n\nकृपया सरकारी नौकरियों के बारे में कुछ भी विशिष्ट पूछने में संकोच न करें!"
      : "మీ ప్రశ్నకు ధన్యవాదాలు! నేను ప్రభుత్వ ఉద్యోగ సమాచారంతో సహాయం చేయడానికి ఇక్కడ ఉన్నాను. మీరు నన్ను అడగవచ్చు:\n\n• ఉద్యోగ నోటిఫికేషన్లు మరియు గడువులు\n• అర్హత ప్రమాణాలు\n• దరఖాస్తు విధానాలు\n• పరీక్ష నమూనాలు మరియు సిలబస్\n• కెరీర్ మార్గదర్శనం\n\nప్రభుత్వ ఉద్యోగాల గురించి ఏదైనా నిర్దిష్టంగా అడగడానికి సంకోచించకండి!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: language === 'en' 
          ? "Sorry, I encountered an error. Please try again."
          : language === 'hi'
          ? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
          : "క్షమించండి, నేను లోపాన్ని ఎదుర్కొన్నాను. దయచేసి మళ్లీ ప్రయత్నించండి।",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    // Re-add welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      content: t.welcomeMessage,
      isBot: true,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const handleSampleQuestion = (question: string) => {
    setInputMessage(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-3 bg-gradient-primary text-white rounded-t-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">{t.title}</CardTitle>
              <p className="text-sm text-white/90">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearChat}
              className="text-white hover:bg-white/20"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                  ${message.isBot ? 'bg-primary text-white' : 'bg-accent text-white'}
                `}>
                  {message.isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                </div>
                <div className={`
                  max-w-[80%] p-3 rounded-lg
                  ${message.isBot 
                    ? 'bg-muted text-foreground' 
                    : 'bg-primary text-primary-foreground'
                  }
                `}>
                  <div className="whitespace-pre-wrap text-sm">
                    {message.translatedContent ? 
                      message.translatedContent[language] || message.content : 
                      message.content
                    }
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sample Questions */}
          {messages.length <= 1 && (
            <div className="p-4 border-t bg-muted/30">
              <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {t.sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSampleQuestion(question)}
                    className="text-left justify-start h-auto p-2 text-sm whitespace-normal"
                  >
                    <MessageCircle className="h-3 w-3 mr-2 flex-shrink-0" />
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t.placeholder}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                size="sm"
                className="btn-government"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;