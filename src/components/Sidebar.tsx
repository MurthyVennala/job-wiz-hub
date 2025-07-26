import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  FileText, 
  Search, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

interface SidebarProps {
  language: 'en' | 'hi' | 'te';
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ language, onSectionChange }: SidebarProps) => {
  const translations = {
    en: {
      notifications: "Notifications",
      latestNotifications: "Latest Notifications",
      employmentNews: "Employment News",
      searchJobs: "Search Jobs",
      sarkariJob: "Sarkari Job",
      sarkariNaukri: "Sarkari Naukri",
      anganwadiRecruitment: "Anganwadi Recruitment",
      education: "EDUCATION",
      latestAnnouncements: "Latest Announcements",
      sarkariResult: "Sarkari Result",
      admitCard: "Admit Card",
      examResults: "Exam Results",
      answerKey: "Answer Key",
      cutoffMarks: "Cutoff Marks",
      trending: "Trending Now",
      popular: "Popular Today",
      new: "New"
    },
    hi: {
      notifications: "सूचनाएं",
      latestNotifications: "नवीनतम सूचनाएं",
      employmentNews: "रोजगार समाचार",
      searchJobs: "नौकरी खोजें",
      sarkariJob: "सरकारी नौकरी",
      sarkariNaukri: "सरकारी नौकरी",
      anganwadiRecruitment: "आंगनवाड़ी भर्ती",
      education: "शिक्षा",
      latestAnnouncements: "नवीनतम घोषणाएं",
      sarkariResult: "सरकारी परिणाम",
      admitCard: "प्रवेश पत्र",
      examResults: "परीक्षा परिणाम",
      answerKey: "उत्तर कुंजी",
      cutoffMarks: "कटऑफ मार्क्स",
      trending: "ट्रेंडिंग",
      popular: "आज लोकप्रिय",
      new: "नया"
    },
    te: {
      notifications: "నోటిఫికేషన్లు",
      latestNotifications: "తాజా నోటిఫికేషన్లు",
      employmentNews: "ఉద్యోగ వార్తలు",
      searchJobs: "ఉద్యోగాలను వెతకండి",
      sarkariJob: "సర్కారీ ఉద్యోగం",
      sarkariNaukri: "సర్కారీ నౌకరీ",
      anganwadiRecruitment: "అంగన్‌వాడీ రిక్రూట్‌మెంట్",
      education: "విద్య",
      latestAnnouncements: "తాజా ప్రకటనలు",
      sarkariResult: "సర్కారీ రిజల్ట్",
      admitCard: "అడ్మిట్ కార్డ్",
      examResults: "పరీక్ష ఫలితాలు",
      answerKey: "అన్సర్ కీ",
      cutoffMarks: "కటాఫ్ మార్కులు",
      trending: "ట్రెండింగ్",
      popular: "ఈరోజు ప్రసిద్ధ",
      new: "కొత్త"
    }
  };

  const t = translations[language];

  const mainSections = [
    { key: 'latest-notifications', label: t.latestNotifications, icon: Bell, count: '2.5K+', isNew: true },
    { key: 'employment-news', label: t.employmentNews, icon: FileText, count: '450+' },
    { key: 'search-jobs', label: t.searchJobs, icon: Search, count: '1.2K+' },
    { key: 'sarkari-job', label: t.sarkariJob, icon: Briefcase, count: '890+', isTrending: true },
    { key: 'sarkari-naukri', label: t.sarkariNaukri, icon: Users, count: '670+' },
    { key: 'anganwadi-recruitment', label: t.anganwadiRecruitment, icon: GraduationCap, count: '120+' }
  ];

  const educationSections = [
    { key: 'latest-announcements', label: t.latestAnnouncements, icon: TrendingUp, count: '340+' },
    { key: 'sarkari-result', label: t.sarkariResult, icon: Award, count: '280+' },
    { key: 'admit-card', label: t.admitCard, icon: FileText, count: '150+' },
    { key: 'exam-results', label: t.examResults, icon: CheckCircle, count: '200+' },
    { key: 'answer-key', label: t.answerKey, icon: Calendar, count: '90+' },
    { key: 'cutoff-marks', label: t.cutoffMarks, icon: TrendingUp, count: '110+' }
  ];

  const SectionButton = ({ 
    section, 
    isActive = false 
  }: { 
    section: typeof mainSections[0]; 
    isActive?: boolean; 
  }) => {
    const Icon = section.icon;
    
    return (
      <Button
        variant="ghost"
        onClick={() => onSectionChange(section.key)}
        className={`
          w-full justify-start p-3 h-auto transition-all duration-300
          ${isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'}
        `}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <Icon className="h-4 w-4" />
            <span className="text-sm">{section.label}</span>
          </div>
          <div className="flex items-center gap-2">
            {section.count && (
              <Badge variant="secondary" className="text-xs">
                {section.count}
              </Badge>
            )}
            {section.isNew && (
              <Badge className="bg-success text-success-foreground text-xs">
                {t.new}
              </Badge>
            )}
            {section.isTrending && (
              <Badge className="bg-destructive text-destructive-foreground text-xs">
                {t.trending}
              </Badge>
            )}
          </div>
        </div>
      </Button>
    );
  };

  return (
    <aside className="w-full space-y-6">
      {/* Main Notifications Section */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <Bell className="h-5 w-5" />
            {t.notifications}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {mainSections.map((section) => (
            <SectionButton 
              key={section.key} 
              section={section}
            />
          ))}
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-primary">
            <GraduationCap className="h-5 w-5" />
            {t.education}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          {educationSections.map((section) => (
            <SectionButton 
              key={section.key} 
              section={section}
            />
          ))}
        </CardContent>
      </Card>

      {/* WhatsApp Channel Promotion */}
      <Card className="shadow-sm bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <CardContent className="p-4">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center mx-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-800">Join WhatsApp Channel</h3>
              <p className="text-sm text-green-600 mt-1">Get instant job alerts</p>
            </div>
            <Button className="whatsapp-btn w-full">
              Join Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;