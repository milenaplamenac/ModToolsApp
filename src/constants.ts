export class Topics {
  public static '0' = { name: 'General Risk', icon: 'numeric-${risk}-box' };
  public static '1' = { name: 'Bullying', icon: 'account-group' };
  public static '2' = { name: 'Fighting', icon: 'kabaddi' };
  public static '3' = { name: 'Personal Information', icon: 'account-search' };
  public static '4' = { name: 'Dating and Sexting', icon: 'heart' };
  public static '5' = { name: 'Vulgar', icon: 'chat-alert' };
  public static '6' = { name: 'Drugs and Alcohol', icon: 'cannabis' };
  public static '7' = { name: 'In-Game Items', icon: 'cube-outline' };
  public static '8' = { name: 'Alarm', icon: 'alert-decagram' };
  public static '9' = { name: 'Fraud', icon: 'cash' };
  public static '10' = { name: 'Racist', icon: 'whistle' };
  public static '11' = { name: 'Religion', icon: 'church' };
  public static '13' = { name: 'Website', icon: 'link' };
  public static '14' = { name: 'Grooming', icon: 'account-child' };
  public static '15' = { name: 'Public Threats', icon: 'target-account' };
  public static '16' = { name: 'Real Name', icon: 'account-badge-horizontal' };
  public static '17' = { name: 'Radicalization', icon: 'bullhorn' };
  public static '18' = { name: 'Subversive', icon: 'guy-fawkes-mask' };
  public static '19' = { name: 'Sentiment', icon: 'emoticon' };
  public static '20' = { name: 'Politics', icon: 'gavel' };
  public static '27' = { name: 'Custom1', icon: 'number-1-circle-outline' };
  public static '28' = { name: 'Custom2', icon: 'number-2-circle-outline' };
  public static '29' = { name: 'Custom3', icon: 'number-3-circle-outline' };
  public static '30' = { name: 'Custom4', icon: 'number-4-circle-outline' };
  public static '31' = { name: 'Custom5', icon: 'number-5-circle-outline' };
}

export interface Language {
  code: string;
  name: string;
  partial?: boolean;
}

export const Languages: Language[] = [
  { code: 'ar', name: 'Arabic', partial: false },
  { code: 'da', name: 'Danish', partial: true },
  { code: 'de', name: 'German', partial: false },
  { code: 'en', name: 'English', partial: false },
  { code: 'es', name: 'Spanish', partial: false },
  { code: 'fi', name: 'Finnish', partial: false },
  { code: 'fr', name: 'French', partial: false },
  { code: 'hi', name: 'Hindi', partial: true },
  { code: 'id', name: 'Indonesian', partial: false },
  { code: 'it', name: 'Italian', partial: false },
  { code: 'ja', name: 'Japanese', partial: false },
  { code: 'ko', name: 'Korean', partial: false },
  { code: 'nl', name: 'Dutch', partial: false },
  { code: 'no', name: 'Norwegian', partial: true },
  { code: 'pl', name: 'Polish', partial: false },
  { code: 'pt', name: 'Portuguese', partial: false },
  { code: 'ro', name: 'Romanian', partial: false },
  { code: 'ru', name: 'Russian', partial: false },
  { code: 'sv', name: 'Swedish', partial: true },
  { code: 'th', name: 'Thai', partial: false },
  { code: 'tr', name: 'Turkish', partial: false },
  { code: 'vi', name: 'Vietnamese', partial: false },
  { code: 'zh', name: 'Chinese', partial: false },
]

// Set the default language to English
export const DefaultLanguage = 'en';

// I believe that, for the sake of consistency, better solution is work with whole objects
// Let the component decide what to 'extract' and use
export const DefaultLanguageOverriden = { code: 'en', name: 'English', partial: false };


export interface Client {
  id: string,
  name: string
}

export const Clients: Client[] = [
  { id: '60', name: 'Live' },
  { id: '61', name: 'Sandbox' }
]

// Set the default client
export const DefaultClient = 0;

// I believe that, for the sake of consistency, better solution is work with whole objects
// Let the component decide what to 'extract' and use
export const DefaultClientOverriden = { id: '60', name: 'Live' };

// Content Type

export interface ContentType {
  type: string,
  name: string
}
export const ContentTypes: ContentType[] = [
  { type: 'SHORTTEXT', name: 'Short text' },
  { type: 'LONGTEXT', name: 'Long text' },
  { type: 'USERNAME', name: 'Username' }
]

export const DefaultContentType = { type: 'SHORTTEXT', name: 'Short text' };