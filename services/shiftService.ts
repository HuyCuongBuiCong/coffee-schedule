import {Employee, Shift} from "../common/interfaces";



function fillShiftsWithEmployees(employees: Employee[], shifts: Shift[]): void {
    // Step 3: sort shifts by date and time slot
    shifts.sort((a, b) => {
        if (a.date !== b.date) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        const shiftsOrder = {'morning' : 1, 'afternoon' : 2, 'evening' : 3 };
        return shiftsOrder[a.timeSlot] - shiftsOrder[b.timeSlot];
    });

    for (const shift of shifts) {
        // Step 5: sort employees randomly
        employees.sort(() => Math.random() - 0.5);

        let employeesAssigned = 0;
        for (let i = 0; i < employees.length && employeesAssigned < shift.requiredNumberOfEmployees; i++) {
            const employee = employees[i];

            // Check if employee is available for this shift
            const employeeAvailable = checkEmployeeAvailability(employee, shift);

            if (employeeAvailable) {
                // Assign employee to shift
                shift.employees.push({
                    fullName: employee.fullName}
                );
                employee.shifts.push({
                    timeSlot: shift.timeSlot,
                    date: shift.date,
                });
                employeesAssigned++;
            }
        }

        if (shift.employees.length === shift.requiredNumberOfEmployees) {
            // Step 8: mark shift as unfilled
            shift.isFulfilled = true;
        }
    }
}

function checkEmployeeAvailability(employee: Employee, toBeAssignedshift: Shift): boolean {
    // count number of shifts in a day
    const shiftsInDay = employee.shifts.filter((s) => s.date === toBeAssignedshift.date);
    if(shiftsInDay.length >= 2) {
        return false;
    }

    if( shiftsInDay.length === 1) {
        const shift = shiftsInDay[0];
        if(!isConsecutive(shift, toBeAssignedshift)) {
            return false;
        }
    }

    return true;
}

function isConsecutive(shift1: Shift, shift2: Shift): boolean {
    const shiftsOrder = ['morning', 'afternoon', 'evening'];
    // Check if the shifts are on the same date
    if (shift1.date !== shift2.date) {
        return false;
    }

    // Check if the shifts are consecutive
    const shift1Index = shiftsOrder.indexOf(shift1.timeSlot);
    const shift2Index = shiftsOrder.indexOf(shift2.timeSlot);
    return shift1Index + 1 === shift2Index;
}

const shiftService = {
    fillShiftsWithEmployees
}

export default shiftService;
