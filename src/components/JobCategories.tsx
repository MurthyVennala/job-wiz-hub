import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building, 
  Train, 
  GraduationCap, 
  Stethoscope, 
  Shield, 
  Wrench, 
  Users, 
  BookOpen,
  Calculator,
  Globe,
  FileText,
  Award
} from 'lucide-react';
import bankJobsImage from '@/assets/bank-jobs.jpg';
import railwayJobsImage from '@/assets/railway-jobs.jpg';
import teachingJobsImage from '@/assets/teaching-jobs.jpg';

interface JobCategoriesProps {
  language: 'en' | 'hi' | 'te';
  onCategorySelect: (category: string) => void;
}

const JobCategories = ({ language, onCategorySelect }: JobCategoriesProps) => {
  const translations = {
    en: {
      title: "Popular Job Categories",
      subtitle: "Explore government job opportunities by category",
      viewAll: "View All",
      apply: "Apply Now",
      educationTitle: "Jobs by Education Qualification",
      educationSubtitle: "Find jobs based on your educational background"
    },
    hi: {
      title: "लोकप्रिय नौकरी श्रेणियां",
      subtitle: "श्रेणी के आधार पर सरकारी नौकरी के अवसरों का अन्वेषण करें",
      viewAll: "सभी देखें",
      apply: "अभी आवेदन करें",
      educationTitle: "शैक्षणिक योग्यता के आधार पर नौकरियां",
      educationSubtitle: "अपनी शैक्षणिक पृष्ठभूमि के आधार पर नौकरियां खोजें"
    },
    te: {
      title: "ప్రసిద్ధ ఉద్యోగ వర్గాలు",
      subtitle: "వర్గం ఆధారంగా ప్రభుత్వ ఉద్యోగ అవకాశాలను అన్వేషించండి",
      viewAll: "అన్నింటినీ చూడండి",
      apply: "ఇప్పుడే దరఖాస్తు చేయండి",
      educationTitle: "విద్యా అర్హత ఆధారంగా ఉద్యోగాలు",
      educationSubtitle: "మీ విద్యా నేపథ్యం ఆధారంగా ఉద్యోగాలను కనుగొనండి"
    }
  };

  const t = translations[language];

  const jobCategories = [
    {
      id: 'bank',
      title: { en: 'Banking Jobs', hi: 'बैंकिंग नौकरियां', te: 'బ్యాంకింగ్ ఉద్యోగాలు' },
      description: { 
        en: 'IBPS, SBI, Bank PO, Clerk positions', 
        hi: 'आईBPS, SBI, बैंक PO, क्लर्क पद', 
        te: 'IBPS, SBI, బ్యాంక్ PO, క్లర్క్ పోజిషన్లు' 
      },
      icon: Building,
      color: 'bg-job-bank',
      image: bankJobsImage,
      jobs: 1240,
      newJobs: 89,
      trending: true
    },
    {
      id: 'railway',
      title: { en: 'Railway Jobs', hi: 'रेलवे नौकरियां', te: 'రైల్వే ఉద్యోగాలు' },
      description: { 
        en: 'RRB, Indian Railways, Group D, ALP', 
        hi: 'RRB, भारतीय रेलवे, ग्रुप D, ALP', 
        te: 'RRB, ఇండియన్ రైల్వేస్, గ్రూప్ D, ALP' 
      },
      icon: Train,
      color: 'bg-job-railway',
      image: railwayJobsImage,
      jobs: 2340,
      newJobs: 156,
      trending: true
    },
    {
      id: 'teaching',
      title: { en: 'Teaching Jobs', hi: 'शिक्षण नौकरियां', te: 'బోధనా ఉద్యోగాలు' },
      description: { 
        en: 'CTET, TET, School Teacher, Professor', 
        hi: 'CTET, TET, स्कूल शिक्षक, प्रोफेसर', 
        te: 'CTET, TET, స్కూల్ టీచర్, ప్రొఫెసర్' 
      },
      icon: GraduationCap,
      color: 'bg-job-teaching',
      image: teachingJobsImage,
      jobs: 890,
      newJobs: 67,
      trending: false
    },
    {
      id: 'medical',
      title: { en: 'Medical Jobs', hi: 'चिकित्सा नौకरियां', te: 'వైద్య ఉద్యోగాలు' },
      description: { 
        en: 'AIIMS, NEET, Nursing, Healthcare', 
        hi: 'AIIMS, NEET, नर्सिंग, स्वास्थ्य सेवा', 
        te: 'AIIMS, NEET, నర్సింగ్, హెల్త్‌కేర్' 
      },
      icon: Stethoscope,
      color: 'bg-job-medical',
      image: null,
      jobs: 670,
      newJobs: 45,
      trending: false
    },
    {
      id: 'defence',
      title: { en: 'Defence Jobs', hi: 'रक्षा नौकरियां', te: 'రక్షణ ఉద్యోగాలు' },
      description: { 
        en: 'Army, Navy, Air Force, Police', 
        hi: 'सेना, नौसेना, वायु सेना, पुलिस', 
        te: 'ఆర్మీ, నేవీ, ఎయిర్ ఫోర్స్, పోలీస్' 
      },
      icon: Shield,
      color: 'bg-job-police',
      image: null,
      jobs: 1120,
      newJobs: 78,
      trending: true
    },
    {
      id: 'engineering',
      title: { en: 'Engineering Jobs', hi: 'इंजीनियरिंग नौकरियां', te: 'ఇంజినీరింగ్ ఉద్యోగాలు' },
      description: { 
        en: 'PSU, Technical Posts, GATE', 
        hi: 'PSU, तकनीकी पद, GATE', 
        te: 'PSU, టెక్నికల్ పోస్ట్‌లు, GATE' 
      },
      icon: Wrench,
      color: 'bg-job-engineering',
      image: null,
      jobs: 780,
      newJobs: 34,
      trending: false
    }
  ];

  const educationCategories = [
    {
      id: '10th',
      title: { en: '10th Pass Jobs', hi: '10वीं पास नौकरियां', te: '10వ తరగతి ఉద్యోగాలు' },
      icon: BookOpen,
      jobs: 450
    },
    {
      id: '12th',
      title: { en: '12th Pass Jobs', hi: '12वीं पास नौकरियां', te: '12వ తరగతి ఉద్యోగాలు' },
      icon: BookOpen,
      jobs: 680
    },
    {
      id: 'graduate',
      title: { en: 'Graduate Jobs', hi: 'स्नातक नौकरियां', te: 'గ్రాడ్యుయేట్ ఉద్యోగాలు' },
      icon: GraduationCap,
      jobs: 1240
    },
    {
      id: 'postgraduate',
      title: { en: 'Post Graduate Jobs', hi: 'स्नातकोत्तर नौకरियां', te: 'పోస్ట్ గ్రాడ్యుయేట్ ఉద్యోగాలు' },
      icon: Award,
      jobs: 340
    },
    {
      id: 'diploma',
      title: { en: 'Diploma Jobs', hi: 'डिप्लोमा नौकरियां', te: 'డిప్లొమా ఉద్యోగాలు' },
      icon: FileText,
      jobs: 290
    },
    {
      id: 'iti',
      title: { en: 'ITI Jobs', hi: 'ITI नौकरियां', te: 'ITI ఉద్యోగాలు' },
      icon: Wrench,
      jobs: 560
    }
  ];

  const CategoryCard = ({ category, isEducation = false }: { 
    category: typeof jobCategories[0] | typeof educationCategories[0]; 
    isEducation?: boolean;
  }) => {
    const Icon = category.icon;
    const title = category.title[language] || category.title.en;
    
    return (
      <Card className="job-category-card group cursor-pointer border-2 border-transparent hover:border-primary/20">
        <CardContent className="p-0">
          {/* Image Header (for main categories) */}
          {!isEducation && 'image' in category && category.image && (
            <div className="h-32 overflow-hidden rounded-t-lg">
              <img 
                src={category.image} 
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center
                ${!isEducation && 'color' in category ? category.color : 'bg-primary'}
                text-white
              `}>
                <Icon className="h-6 w-6" />
              </div>
              
              <div className="text-right">
                <div className="text-lg font-bold text-primary">
                  {category.jobs}+
                </div>
                <div className="text-xs text-muted-foreground">Jobs</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              
              {!isEducation && 'description' in category && (
                <p className="text-sm text-muted-foreground mt-1">
                  {category.description[language] || category.description.en}
                </p>
              )}
            </div>

            {!isEducation && 'newJobs' in category && (
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  {category.newJobs > 0 && (
                    <Badge className="bg-success text-success-foreground">
                      {category.newJobs} New
                    </Badge>
                  )}
                  {category.trending && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      Trending
                    </Badge>
                  )}
                </div>
                
                <Button
                  size="sm"
                  onClick={() => onCategorySelect(category.id)}
                  className="btn-government opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {t.apply}
                </Button>
              </div>
            )}

            {isEducation && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => onCategorySelect(category.id)}
                className="w-full mt-3 hover:bg-primary hover:text-primary-foreground"
              >
                {t.viewAll}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Main Job Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.title}</h2>
            <p className="text-muted-foreground">{t.subtitle}</p>
          </div>
          <Button 
            variant="outline"
            onClick={() => onCategorySelect('all')}
            className="hover:bg-primary hover:text-primary-foreground"
          >
            {t.viewAll}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Education-based Categories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.educationTitle}</h2>
            <p className="text-muted-foreground">{t.educationSubtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {educationCategories.map((category) => (
            <CategoryCard key={category.id} category={category} isEducation />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;