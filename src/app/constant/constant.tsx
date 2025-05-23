import { Country } from "../types/country";

export const userInfo = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "phone", label: "Phone Number" },
  { key: "email", label: "Email Address" },
  { key: "country", label: "Country" },
  { key: "streetAddress", label: "Street Address" },
  { key: "city", label: "City" },
  { key: "pincode", label: "Pincode" },
  { key: "education", label: "Eduction" },
  { key: "skills", label: "Last Name" },
  { key: "languages", label: "Languages" },
];

export const jobInfo = [
  { key: "companyName", label: "Company Name" },
  { key: "jobRole", label: "Job Role" },
  { key: "skills", label: "Skills" },
  { key: "education", label: "Education" },
  { key: "jobDetails", label: "Job Details" },
  { key: "shift", label: "Shift" },
  { key: "benefit", label: "Benefit" },
  { key: "description", label: "Description" },
];

export const employeeInfo = [
  { key: "_id", label: "Employee ID" },
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "phone", label: "Phone Number" },
  { key: "email", label: "Email Address" },
  { key: "country", label: "Country" },
  { key: "streetAddress", label: "Street Address" },
  { key: "city", label: "City" },
  { key: "pincode", label: "Pincode" },
  { key: "resume", label: "Resume" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "languages", label: "Languages" },
  { key: "companyId", label: "Company ID" },
];

export const countries: Country[] = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', format: '(XXX) XXX-XXXX' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', format: 'XXXXX-XXXXX' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', format: 'XXXXX XXXXXX' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', format: 'XX XX XX XX XX' },
];

export const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React",
  "Next.js", "Vue.js", "Angular", "Python", "Django",
  "Flask", "Node.js", "Express", "Java", "Spring Boot",
  "C#", ".NET", "PHP", "Laravel", "Go", "Rust", "Ruby", "Rails",
];
