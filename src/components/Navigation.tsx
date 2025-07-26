import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { 
  Home, 
  MapPin, 
  GraduationCap, 
  Building, 
  Train, 
  Shield, 
  Stethoscope, 
  Wrench,
  ChevronDown,
  Globe
} from 'lucide-react';

interface NavigationProps {
  language: 'en' | 'hi' | 'te';
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const Navigation = ({ language, activeCategory, onCategoryChange }: NavigationProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      allIndiaGovtJobs: "All India Govt Jobs",
      stateGovtJobs: "State Govt Jobs",
      bankJobs: "Bank Jobs",
      teachingJobs: "Teaching Jobs",
      engineeringJobs: "Engineering Jobs",
      railwayJobs: "Railway Jobs",
      policeDefenceJobs: "Police/Defence Jobs",
      medicalJobs: "Medical Jobs",
      education: "EDUCATION",
      games: "Games",
      downloadApp: "Download Mobile App"
    },
    hi: {
      home: "होम",
      allIndiaGovtJobs: "अखिल भारतीय सरकारी नौकरियां",
      stateGovtJobs: "राज्य सरकारी नौकरियां",
      bankJobs: "बैंक नौकरियां",
      teachingJobs: "शिक्षण नौकरियां",
      engineeringJobs: "इंजीनियरिंग नौकरियां",
      railwayJobs: "रेलवे नौकरियां",
      policeDefenceJobs: "पुलिस/रक्षा नौकरियां",
      medicalJobs: "चिकित्सा नौकरियां",
      education: "शिक्षा",
      games: "गेम्स",
      downloadApp: "मोबाइल ऐप डाउनलोड करें"
    },
    te: {
      home: "హోమ్",
      allIndiaGovtJobs: "అఖిల భారత ప్రభుత్వ ఉద్యోగాలు",
      stateGovtJobs: "రాష్ట్ర ప్రభుత్వ ఉద్యోగాలు",
      bankJobs: "బ్యాంక్ ఉద్యోగాలు",
      teachingJobs: "అధ్యాపన ఉద్యోగాలు",
      engineeringJobs: "ఇంజినీరింగ్ ఉద్యోగాలు",
      railwayJobs: "రైల్వే ఉద్యోగాలు",
      policeDefenceJobs: "పోలీస్/రక్షణ ఉద్యోగాలు",
      medicalJobs: "వైద్య ఉద్యోగాలు",
      education: "విద్య",
      games: "గేమ్స్",
      downloadApp: "మొబైల్ యాప్ డౌన్‌లోడ్ చేయండి"
    }
  };

  const t = translations[language];

  const jobCategories = [
    { 
      key: 'home', 
      label: t.home, 
      icon: Home, 
      color: 'bg-primary', 
      count: null 
    },
    { 
      key: 'all-india-govt', 
      label: t.allIndiaGovtJobs, 
      icon: Building, 
      color: 'bg-job-bank', 
      count: '2.5K+' 
    },
    { 
      key: 'state-govt', 
      label: t.stateGovtJobs, 
      icon: MapPin, 
      color: 'bg-job-railway', 
      count: '1.8K+' 
    },
    { 
      key: 'bank', 
      label: t.bankJobs, 
      icon: Building, 
      color: 'bg-job-bank', 
      count: '450+' 
    },
    { 
      key: 'teaching', 
      label: t.teachingJobs, 
      icon: GraduationCap, 
      color: 'bg-job-teaching', 
      count: '680+' 
    },
    { 
      key: 'engineering', 
      label: t.engineeringJobs, 
      icon: Wrench, 
      color: 'bg-job-engineering', 
      count: '320+' 
    },
    { 
      key: 'railway', 
      label: t.railwayJobs, 
      icon: Train, 
      color: 'bg-job-railway', 
      count: '890+' 
    },
    { 
      key: 'police-defence', 
      label: t.policeDefenceJobs, 
      icon: Shield, 
      color: 'bg-job-police', 
      count: '540+' 
    },
    { 
      key: 'medical', 
      label: t.medicalJobs, 
      icon: Stethoscope, 
      color: 'bg-job-medical', 
      count: '380+' 
    }
  ];

  const otherItems = [
    { key: 'education', label: t.education, icon: GraduationCap },
    { key: 'games', label: t.games, icon: Globe },
    { key: 'download-app', label: t.downloadApp, icon: null }
  ];

  return (
    <nav className="gov-nav shadow-lg">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-3">
          <div className="flex items-center space-x-1">
            {jobCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.key;
              
              return (
                <Button
                  key={category.key}
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => onCategoryChange(category.key)}
                  className={`
                    relative text-white hover:bg-white/20 transition-all duration-300
                    ${isActive ? 'bg-white/20 text-white font-medium' : ''}
                  `}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.label}
                  {category.count && (
                    <Badge 
                      className="ml-2 bg-accent text-accent-foreground text-xs"
                    >
                      {category.count}
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-1">
            {otherItems.map((item) => {
              const Icon = item.icon;
              
              return (
                <Button
                  key={item.key}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 transition-all duration-300"
                  onClick={() => onCategoryChange(item.key)}
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden py-3">
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full justify-between text-white hover:bg-white/20"
            >
              <span className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                {jobCategories.find(cat => cat.key === activeCategory)?.label || t.home}
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </Button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 z-50 max-h-96 overflow-y-auto">
                <div className="py-2">
                  {[...jobCategories, ...otherItems].map((item) => {
                    const Icon = item.icon;
                    const isActive = activeCategory === item.key;
                    
                    return (
                      <button
                        key={item.key}
                        onClick={() => {
                          onCategoryChange(item.key);
                          setIsDropdownOpen(false);
                        }}
                        className={`
                          w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors
                          flex items-center justify-between
                          ${isActive ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700'}
                        `}
                      >
                        <span className="flex items-center">
                          {Icon && <Icon className="h-4 w-4 mr-3" />}
                          {item.label}
                        </span>
                        {'count' in item && (item as any).count && (
                          <Badge className="bg-accent text-accent-foreground text-xs">
                            {(item as any).count}
                          </Badge>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;