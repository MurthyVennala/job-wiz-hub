import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  MessageCircle, 
  Phone, 
  Bell, 
  Menu, 
  X,
  Smartphone
} from 'lucide-react';
import logo from '@/assets/logo.jpg';
import governmentBuilding from '@/assets/government-building.jpg';

interface HeaderProps {
  language: 'en' | 'hi' | 'te';
  onLanguageChange: (lang: 'en' | 'hi' | 'te') => void;
  onChatbotOpen: () => void;
}

const Header = ({ language, onLanguageChange, onChatbotOpen }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      title: "Job Wiz Hub",
      subtitle: "Government Jobs | Results | Admit Cards",
      downloadApp: "Download Mobile APP",
      joinWhatsApp: "JOIN WHATSAPP CHANNEL",
      aiAssistant: "AI Assistant",
      latestNotifications: "Latest Notifications",
      warningText: "Dear Job Wiz Hub users always type .Com after JobWizHub. Beware of duplicate websites with Job Wiz Hub name."
    },
    hi: {
      title: "जॉब विज़ हब",
      subtitle: "सरकारी नौकरियां | परिणाम | प्रवेश पत्र",
      downloadApp: "मोबाइल ऐप डाउनलोड करें",
      joinWhatsApp: "व्हाट्सऐप चैनल जॉइन करें",
      aiAssistant: "AI सहायक",
      latestNotifications: "नवीनतम सूचनाएं",
      warningText: "प्रिय जॉब विज़ हब उपयोगकर्ता हमेशा JobWizHub के बाद .Com टाइप करें। Job Wiz Hub नाम की डुप्लिकेट वेबसाइटों से सावधान रहें।"
    },
    te: {
      title: "జాబ్ విజ్ హబ్",
      subtitle: "ప్రభుత్వ ఉద్యోగాలు | ఫలితాలు | అడ్మిట్ కార్డులు",
      downloadApp: "మొబైల్ యాప్ డౌన్‌లోడ్ చేయండి",
      joinWhatsApp: "వాట్సాప్ ఛానెల్‌లో చేరండి",
      aiAssistant: "AI సహాయకుడు",
      latestNotifications: "తాజా నోటిఫికేషన్లు",
      warningText: "ప్రియమైన జాబ్ విజ్ హబ్ వినియోగదారులు ఎల్లప్పుడూ JobWizHub తర్వాత .Com టైప్ చేయండి. Job Wiz Hub పేరుతో నకిలీ వెబ్‌సైట్‌లకు జాగ్రత్త."
    }
  };

  const t = translations[language];

  return (
    <header className="w-full">
      {/* Top Header with Government Building */}
      <div className="gov-header relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={governmentBuilding} 
            alt="Government Building" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Job Wiz Hub Logo" 
                className="h-16 w-16 rounded-lg border-2 border-white/20"
              />
              <div className="text-center lg:text-left">
                <h1 className="text-2xl lg:text-3xl font-bold text-white">
                  {t.title}
                </h1>
                <p className="text-white/90 text-sm lg:text-base">
                  {t.subtitle}
                </p>
              </div>
            </div>

            {/* Language Selector and Actions */}
            <div className="flex items-center gap-3 flex-wrap">
              {/* Language Selector */}
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
                <Globe className="h-4 w-4 text-white" />
                {(['en', 'hi', 'te'] as const).map((lang) => (
                  <Button
                    key={lang}
                    variant={language === lang ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onLanguageChange(lang)}
                    className={`text-xs ${
                      language === lang 
                        ? 'bg-white text-black' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिं' : 'తె'}
                  </Button>
                ))}
              </div>

              {/* AI Assistant Button */}
              <Button
                onClick={onChatbotOpen}
                className="whatsapp-btn relative pulse-glow"
                size="sm"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {t.aiAssistant}
                <Badge className="ml-2 bg-red-500 text-white">
                  AI
                </Badge>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:bg-white/20"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center lg:justify-start">
            <Button className="btn-government" size="sm">
              <Smartphone className="h-4 w-4 mr-2" />
              {t.downloadApp}
            </Button>
            
            <Button className="whatsapp-btn" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              {t.joinWhatsApp}
            </Button>

            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Bell className="h-4 w-4 mr-2" />
              {t.latestNotifications}
              <Badge className="ml-2 bg-red-500 text-white">
                New
              </Badge>
            </Button>
          </div>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-red-50 border-l-4 border-red-500 p-3">
        <div className="container mx-auto px-4">
          <p className="text-red-700 text-sm text-center">
            {t.warningText}
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              <Button className="btn-government w-full justify-start">
                <Smartphone className="h-4 w-4 mr-2" />
                {t.downloadApp}
              </Button>
              
              <Button className="whatsapp-btn w-full justify-start">
                <Phone className="h-4 w-4 mr-2" />
                {t.joinWhatsApp}
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start"
              >
                <Bell className="h-4 w-4 mr-2" />
                {t.latestNotifications}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;