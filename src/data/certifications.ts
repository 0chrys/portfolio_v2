export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: "isc2-cc",
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    date: "2024",
    credentialUrl: "https://www.isc2.org/Certifications/CC",
    logo: "🛡️", // Using emoji as placeholder, could be replaced with actual SVG/Image
  },
  {
    id: "fortinet-nse1",
    title: "Fortinet Network Security Expert 1 (NSE 1)",
    issuer: "Fortinet",
    date: "2024",
    credentialUrl: "https://training.fortinet.com/",
    logo: "🔒",
  },
];
