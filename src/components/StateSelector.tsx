import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, TrendingUp } from 'lucide-react';

interface StateSelectorProps {
  language: 'en' | 'hi' | 'te';
  onStateSelect: (state: string) => void;
  selectedState?: string;
}

const StateSelector = ({ language, onStateSelect, selectedState }: StateSelectorProps) => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const translations = {
    en: {
      title: "State-wise Government Jobs",
      subtitle: "Select your state to find local government job opportunities",
      allStates: "All States",
      trending: "Trending",
      jobsAvailable: "jobs available"
    },
    hi: {
      title: "राज्यवार सरकारी नौकरियां",
      subtitle: "स्थानीय सरकारी नौकरी के अवसर खोजने के लिए अपना राज्य चुनें",
      allStates: "सभी राज्य",
      trending: "ट्रेंडिंग",
      jobsAvailable: "नौकरियां उपलब्ध"
    },
    te: {
      title: "రాష్ట్రవారీ ప్రభుత్వ ఉద్యోగాలు",
      subtitle: "స్థానిక ప్రభుత్వ ఉద్యోగ అవకాశాలను కనుగొనడానికి మీ రాష్ట్రాన్ని ఎంచుకోండి",
      allStates: "అన్ని రాష్ట్రాలు",
      trending: "ట్రెండింగ్",
      jobsAvailable: "ఉద్యోగాలు అందుబాటులో"
    }
  };

  const t = translations[language];

  const indianStates = [
    { code: 'AP', name: { en: 'Andhra Pradesh', hi: 'आंध्र प्रदेश', te: 'ఆంధ్రప్రదేశ్' }, jobs: 245, isTrending: false },
    { code: 'AS', name: { en: 'Assam', hi: 'असम', te: 'అస్సాం' }, jobs: 189, isTrending: false },
    { code: 'BR', name: { en: 'Bihar', hi: 'बिहार', te: 'బిహార్' }, jobs: 567, isTrending: true },
    { code: 'CG', name: { en: 'Chhattisgarh', hi: 'छत्तीसगढ़', te: 'ఛత్తీస్‌గఢ్' }, jobs: 178, isTrending: false },
    { code: 'DL', name: { en: 'Delhi', hi: 'दिल्ली', te: 'ఢిల్లీ' }, jobs: 423, isTrending: true },
    { code: 'GA', name: { en: 'Goa', hi: 'गोवा', te: 'గోవా' }, jobs: 89, isTrending: false },
    { code: 'GJ', name: { en: 'Gujarat', hi: 'गुजरात', te: 'గుజరాత్' }, jobs: 334, isTrending: false },
    { code: 'HR', name: { en: 'Haryana', hi: 'हरियाणा', te: 'హర్యానా' }, jobs: 298, isTrending: false },
    { code: 'HP', name: { en: 'Himachal Pradesh', hi: 'हिमाचल प्रदेश', te: 'హిమాచల్ ప్రదేశ్' }, jobs: 145, isTrending: false },
    { code: 'JH', name: { en: 'Jharkhand', hi: 'झारखंड', te: 'జార్ఖండ్' }, jobs: 201, isTrending: false },
    { code: 'KA', name: { en: 'Karnataka', hi: 'कर्नाटक', te: 'కర్ణాటక' }, jobs: 412, isTrending: true },
    { code: 'KL', name: { en: 'Kerala', hi: 'केरल', te: 'కేరళ' }, jobs: 267, isTrending: false },
    { code: 'MP', name: { en: 'Madhya Pradesh', hi: 'मध्य प्रदेश', te: 'మధ్యప్రదేశ్' }, jobs: 389, isTrending: false },
    { code: 'MH', name: { en: 'Maharashtra', hi: 'महाराष्ट्र', te: 'మహారాష్ట్ర' }, jobs: 678, isTrending: true },
    { code: 'MN', name: { en: 'Manipur', hi: 'मणिपुर', te: 'మణిపూర్' }, jobs: 76, isTrending: false },
    { code: 'ML', name: { en: 'Meghalaya', hi: 'मेघालय', te: 'మేఘాలయ' }, jobs: 67, isTrending: false },
    { code: 'MZ', name: { en: 'Mizoram', hi: 'मिजोरम', te: 'మిజోరం' }, jobs: 54, isTrending: false },
    { code: 'NL', name: { en: 'Nagaland', hi: 'नागालैंड', te: 'నాగాలాండ్' }, jobs: 62, isTrending: false },
    { code: 'OD', name: { en: 'Odisha', hi: 'ओडिशा', te: 'ఒడిశా' }, jobs: 234, isTrending: false },
    { code: 'PB', name: { en: 'Punjab', hi: 'पंजाब', te: 'పంజాబ్' }, jobs: 287, isTrending: false },
    { code: 'RJ', name: { en: 'Rajasthan', hi: 'राजस्थान', te: 'రాజస్థాన్' }, jobs: 456, isTrending: true },
    { code: 'SK', name: { en: 'Sikkim', hi: 'सिक्किम', te: 'సిక్కిం' }, jobs: 43, isTrending: false },
    { code: 'TN', name: { en: 'Tamil Nadu', hi: 'तमिल नाडु', te: 'తమిళనాడు' }, jobs: 523, isTrending: false },
    { code: 'TS', name: { en: 'Telangana', hi: 'तेलंगाना', te: 'తెలంగాణ' }, jobs: 398, isTrending: true },
    { code: 'TR', name: { en: 'Tripura', hi: 'त्रिपुरा', te: 'త్రిపుర' }, jobs: 78, isTrending: false },
    { code: 'UK', name: { en: 'Uttarakhand', hi: 'उत्तराखंड', te: 'ఉత్తరాఖండ్' }, jobs: 156, isTrending: false },
    { code: 'UP', name: { en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश', te: 'ఉత్తరప్రదేశ్' }, jobs: 789, isTrending: true },
    { code: 'WB', name: { en: 'West Bengal', hi: 'पश्चिम बंगाल', te: 'పశ్చిమ బెంగాల్' }, jobs: 445, isTrending: false }
  ];

  const getStateDisplayName = (state: typeof indianStates[0]) => {
    return state.name[language] || state.name.en;
  };

  const sortedStates = [...indianStates].sort((a, b) => {
    // Sort by trending first, then by job count
    if (a.isTrending && !b.isTrending) return -1;
    if (!a.isTrending && b.isTrending) return 1;
    return b.jobs - a.jobs;
  });

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <MapPin className="h-5 w-5" />
          {t.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{t.subtitle}</p>
      </CardHeader>
      
      <CardContent>
        {/* All States Button */}
        <Button
          variant={selectedState === 'all' ? 'default' : 'outline'}
          onClick={() => onStateSelect('all')}
          className="w-full mb-4 justify-start"
        >
          <MapPin className="h-4 w-4 mr-2" />
          {t.allStates}
          <Badge className="ml-auto bg-primary text-primary-foreground">
            {indianStates.reduce((sum, state) => sum + state.jobs, 0)}+
          </Badge>
        </Button>

        {/* States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-80 overflow-y-auto">
          {sortedStates.map((state) => (
            <Button
              key={state.code}
              variant={selectedState === state.code ? 'default' : 'ghost'}
              onClick={() => onStateSelect(state.code)}
              onMouseEnter={() => setHoveredState(state.code)}
              onMouseLeave={() => setHoveredState(null)}
              className={`
                relative h-auto p-3 justify-start text-left transition-all duration-300
                ${selectedState === state.code ? 'ring-2 ring-primary' : ''}
                ${hoveredState === state.code ? 'scale-105 shadow-md' : ''}
              `}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">
                      {getStateDisplayName(state)}
                    </span>
                    {state.isTrending && (
                      <Badge className="bg-destructive text-destructive-foreground text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {t.trending}
                      </Badge>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {state.jobs}+ {t.jobsAvailable}
                  </div>
                </div>
                
                <div className="text-xs font-mono text-muted-foreground">
                  {state.code}
                </div>
              </div>
            </Button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-primary">
                {sortedStates.filter(s => s.isTrending).length}
              </div>
              <div className="text-xs text-muted-foreground">{t.trending}</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">
                {sortedStates.length}
              </div>
              <div className="text-xs text-muted-foreground">States</div>
            </div>
            <div>
              <div className="text-lg font-bold text-primary">
                {indianStates.reduce((sum, state) => sum + state.jobs, 0)}+
              </div>
              <div className="text-xs text-muted-foreground">Total Jobs</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StateSelector;