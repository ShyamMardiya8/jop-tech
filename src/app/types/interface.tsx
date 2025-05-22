export interface ApplyUserInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  streetAddress: string;
  city: string;
  pincode: string;
  education: string;
  skills: string[]; // assuming skills is an array of strings
  languages: string[];
}
