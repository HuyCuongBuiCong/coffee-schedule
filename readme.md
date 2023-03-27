# Shift Service
This is an application that helps assign employees to different shifts based on their availability and the required number of employees for each shift. The service can handle shifts of different time slots and dates, and can randomly assign available employees to shifts that need to be filled.

# Installation

```
 yarn install
```

# Running the application

```
 yarn dev
```

# Usage
To use this service, simply modify the `db/sample/shifts.json` and `db/sample/employees.json` file to include the employees and shifts you want to assign. 

# Sample Input

employees.json
```json
[
  { "id": 1, "fullName": "John Doe", "shifts": [] },
  { "id": 2, "fullName": "Jane Smith", "shifts": [] },
  { "id": 3, "fullName": "Bob Johnson", "shifts": [] },
  { "id": 4, "fullName": "Lisa Kim", "shifts": [] },
  { "id": 5, "fullName": "Tom Lee", "shifts": [] },
  { "id": 6, "fullName": "Emily Chen", "shifts": [] },
  { "id": 7, "fullName": "David Wang", "shifts": [] },
  { "id": 8, "fullName": "Alex Rodriguez", "shifts": [] },
  { "id": 9, "fullName": "Maria Garcia", "shifts": [] },
  { "id": 10, "fullName": "James Davis", "shifts": [] }
]


```

shifts.json
```json
[
  { "timeSlot": "morning", "date": "2023-03-27", "requiredNumberOfEmployees": 3 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-03-27", "requiredNumberOfEmployees": 4 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-03-27", "requiredNumberOfEmployees": 5 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-03-28", "requiredNumberOfEmployees": 2 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-03-28", "requiredNumberOfEmployees": 3 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-03-28", "requiredNumberOfEmployees": 4 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-03-29", "requiredNumberOfEmployees": 4 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-03-29", "requiredNumberOfEmployees": 5 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-03-29", "requiredNumberOfEmployees": 3 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-03-30", "requiredNumberOfEmployees": 5 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-03-30", "requiredNumberOfEmployees": 4 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-03-30", "requiredNumberOfEmployees": 2 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-03-31", "requiredNumberOfEmployees": 3 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-03-31", "requiredNumberOfEmployees": 2 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-03-31", "requiredNumberOfEmployees": 4 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-04-01", "requiredNumberOfEmployees": 4 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-04-01", "requiredNumberOfEmployees": 3 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-04-01", "requiredNumberOfEmployees": 5 , "employees": [] },

  { "timeSlot": "morning", "date": "2023-04-02", "requiredNumberOfEmployees": 3 , "employees": [] },
  { "timeSlot": "afternoon", "date": "2023-04-02", "requiredNumberOfEmployees": 4 , "employees": [] },
  { "timeSlot": "evening", "date": "2023-04-02", "requiredNumberOfEmployees": 2 , "employees": [] }
]

```

# Sample Output

| Time Slot | Date       | Required Employees | Employees                                                                                       | Fulfilled |
|-----------|------------|--------------------|-------------------------------------------------------------------------------------------------|----------|
| morning   | 2023-03-27 | 3                  | John Doe, Maria Garcia, Alex Rodriguez                                                         | true     |
| afternoon | 2023-03-27 | 4                  | Bob Johnson, John Doe, David Wang, Emily Chen                                                   | true     |
| evening   | 2023-03-27 | 5                  | Bob Johnson, James Davis, Lisa Kim, Tom Lee, Emily Chen                                         | true     |
| morning   | 2023-03-28 | 2                  | Bob Johnson, Alex Rodriguez                                                                     | true     |
| afternoon | 2023-03-28 | 3                  | John Doe, Bob Johnson, Alex Rodriguez                                                           | true     |
| evening   | 2023-03-28 | 4                  | Tom Lee, David Wang, John Doe, Maria Garcia                                                      | true     |
| morning   | 2023-03-29 | 4                  | Emily Chen, Tom Lee, Alex Rodriguez, David Wang                                                  | true     |
| afternoon | 2023-03-29 | 5                  | Tom Lee, Emily Chen, Maria Garcia, John Doe, Alex Rodriguez                                      | true     |
| evening   | 2023-03-29 | 3                  | Lisa Kim, Maria Garcia, John Doe                                                                 | true     |
| morning   | 2023-03-30 | 5                  | Tom Lee, Lisa Kim, Emily Chen, Maria Garcia, John Doe                                            | true     |
| afternoon | 2023-03-30 | 4                  | James Davis, Alex Rodriguez, Bob Johnson, Emily Chen                                             | true     |
| evening   | 2023-03-30 | 2                  | James Davis, Alex Rodriguez                                                                     | true     |
| morning   | 2023-03-31 | 3                  | Alex Rodriguez, Emily Chen, Jane Smith                                                          | true     |
| afternoon | 2023-03-31 | 2                  | Maria Garcia, Alex Rodriguez                                                                   | true     |
| evening   | 2023-03-31 | 4                  | Maria Garcia, Tom Lee, John Doe, Lisa Kim                                                        | true     |
| morning   | 2023-04-01 | 4                  | John Doe, Tom Lee, Alex Rodriguez, David Wang                                                    | true     |
| afternoon | 2023-04-01 | 3                  | David Wang, Alex Rodriguez, Lisa Kim                                                            | true     |
| evening   | 2023-04-01 | 5                  | Lisa Kim, Jane Smith, James Davis, Emily Chen, Bob Johnson                                       | true     |
| morning   | 2023-04-02 | 3                  | James Davis, John Doe, Bob Johnson                                                              | true     |
| afternoon | 2023-04-02 | 4                  | Jane Smith, Tom Lee, Bob Johnson, Emily Chen                                                     | true     |
| evening   | 2023-04-02 | 2                  | Jane Smith, Alex Rodriguez                                                                     | true     |
