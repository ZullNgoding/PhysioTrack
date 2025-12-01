export interface Patient {
    _id: string; // Changed from id to _id for MongoDB
    name: string;
    avatar: string;
    age: number;
    condition: string;
    lastVisit: string; // ISO Date string
    status: 'Active' | 'Inactive' | 'Discharged' | 'Pending';
    adherence?: number;
  }
  
  export interface Appointment {
    _id: string;
    patientId: Patient; // Populated by Mongoose
    doctorName: string;
    date: string; // ISO Date string
    type: string; 
    status: 'Scheduled' | 'Completed' | 'Cancelled';
  }
  
  export interface Stat {
    label: string;
    value: string | number;
    icon: string;
    alert?: boolean;
  }