export interface Shift {
    timeSlot: 'morning' | 'afternoon' | 'evening';
    date: Date;
    requiredNumberOfEmployees?: number;
    employees?: Employee[];
    isFulfilled?: boolean;
}

export interface Employee {
    id?: number;
    fullName: string;
    shifts?: Shift[];
}
