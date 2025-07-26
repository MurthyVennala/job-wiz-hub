import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  MapPin, 
  Users, 
  GraduationCap, 
  Clock, 
  ExternalLink,
  BookmarkPlus,
  Share2
} from 'lucide-react';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    organization: string;
    category: string;
    location: string;
    education: string;
    posts: number;
    applicationDeadline: string;
    notificationDate: string;
    isNew?: boolean;
    isHot?: boolean;
    link: string;
  };
  language: 'en' | 'hi' | 'te';
}

const JobCard = ({ job, language }: JobCardProps) => {
  const translations = {
    en: {
      posts: "Posts",
      education: "Education",
      deadline: "Deadline",
      notified: "Notified",
      apply: "Apply Now",
      details: "View Details",
      bookmark: "Bookmark",
      share: "Share",
      new: "NEW",
      hot: "HOT"
    },
    hi: {
      posts: "पद",
      education: "शिक्षा",
      deadline: "अंतिम तिथि",
      notified: "सूचित",
      apply: "अभी आवेदन करें",
      details: "विवरण देखें",
      bookmark: "बुकमार्क",
      share: "साझा करें",
      new: "नया",
      hot: "हॉट"
    },
    te: {
      posts: "పోస్టులు",
      education: "విద్య",
      deadline: "చివరి తేదీ",
      notified: "తెలియజేయబడింది",
      apply: "ఇప్పుడే దరఖాస్తు చేయండి",
      details: "వివరాలను చూడండి",
      bookmark: "బుక్‌మార్క్",
      share: "షేర్ చేయండి",
      new: "కొత్త",
      hot: "హాట్"
    }
  };

  const t = translations[language];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Bank': 'bg-job-bank',
      'Railway': 'bg-job-railway',
      'Teaching': 'bg-job-teaching',
      'Engineering': 'bg-job-engineering',
      'Police': 'bg-job-police',
      'Medical': 'bg-job-medical',
      'Defense': 'bg-job-police',
      'Government': 'bg-primary'
    };
    return colors[category] || 'bg-primary';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'hi' ? 'hi-IN' : language === 'te' ? 'te-IN' : 'en-IN');
  };

  return (
    <Card className="job-card hover:shadow-lg transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {job.title}
            </CardTitle>
            <p className="text-muted-foreground font-medium mt-1">
              {job.organization}
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            {job.isNew && (
              <Badge className="bg-success text-success-foreground text-xs font-medium">
                {t.new}
              </Badge>
            )}
            {job.isHot && (
              <Badge className="bg-destructive text-destructive-foreground text-xs font-medium">
                {t.hot}
              </Badge>
            )}
            <Badge className={`${getCategoryColor(job.category)} text-white text-xs`}>
              {job.category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Job Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{job.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {job.posts} {t.posts}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{job.education}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {formatDate(job.notificationDate)}
            </span>
          </div>
        </div>

        {/* Deadline */}
        <div className="bg-accent-light p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              {t.deadline}: {formatDate(job.applicationDeadline)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            className="btn-government flex-1" 
            size="sm"
            onClick={() => window.open(job.link, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {t.apply}
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <BookmarkPlus className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;