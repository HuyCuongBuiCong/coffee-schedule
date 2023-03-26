/* eslint-disable @typescript-eslint/no-var-requires */
import shiftService from "../services/shiftService";

const employees = require('../db/sample/employees.json');
const shifts = require('../db/sample/shifts.json');

shiftService.fillShiftsWithEmployees(employees, shifts);
console.log(JSON.stringify(shifts));
