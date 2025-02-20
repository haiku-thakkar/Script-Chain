var app = angular.module('patientApp', []);

app.controller('PatientController', function ($scope) {
    $scope.search = {};

    // Sample Patient Data
    $scope.patients = [
        {
            firstName: 'Ashley',
            lastName: 'Citarella',
            dob: '1958-07-02',
            sex: 'Female',
            residence: 'Boston, MA',
            mrn: 'YTK12345678',
            email: 'ashcitarella@gmail.com',
            phone: '(000)-000-0000',
            conditions: ['COPD', 'CHF', 'Diabetes (Type II)'],
            nextAppointment: 'Today 9:00 AM',
            idNumber:'NHL12345678',
            ssn:'000',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        },
        {
            firstName: 'Albert',
            lastName: 'Johnson',
            dob: '1952-01-15',
            sex: 'Male',
            residence: 'Waltham, MA',
            mrn: 'YTK12345675',
            email: 'aljohnson1952@email.com',
            phone: '(111)-111-1111',
            conditions: ['CHF'],
            nextAppointment: 'Today 10:00 PM',
            
            idNumber:'NHL12345678',
            ssn:'1111',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        },
        {
            firstName: 'Leslie',
            lastName: 'Isabelle Wang',
            dob: '1985-03-12',
            sex: 'Female',
            residence: 'Maine, ME',
            mrn: 'YTK12345673',
            email: 'leslie.wang@email.com',
            phone: '(222)-222-2222',
            conditions: ['CHF'],
            nextAppointment: 'Today 11:00 PM',

            idNumber:'NHL12345678',
            ssn:'2222',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        },
        {
            firstName: 'Adela',
            lastName: 'Basic',
            dob: '1957-03-12',
            sex: 'Female',
            residence: 'Boston, MA',
            mrn: 'YTK12343675',
            email: 'adelbasic50@email.com',
            phone: '(333)-333-3333',
            conditions: ['CHF'],
            nextAppointment: 'Today 2:30 PM',

            idNumber:'NHL12345678',
            ssn:'3333',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        },
        {
            firstName: 'Reza',
            lastName: 'Saatchi',
            dob: '1957-03-12',
            sex: 'Male',
            residence: 'Boston, MA',
            mrn: 'YTK12345679',
            email: 'reza.saatchi@email.com',
            phone: '(444)-444-4444',
            conditions: ['CHF'],
            nextAppointment: 'Today 2:30 PM',

            idNumber:'NHL12345678',
            ssn:'4444',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        },
        {
            firstName: 'Arjun',
            lastName: 'Chandrasekar',
            dob: '1958-12-03',
            sex: 'Male',
            residence: 'New York City, NY',
            mrn: 'YTK12343675',
            email: 'arjunchandra@gmail.com',
            phone: '(555)-555-5555',
            conditions: ['CHF'],
            nextAppointment: 'Today 2:30 PM',

            idNumber:'NHL12345678',
            ssn:'5555',
            hospital:'Massachusettes Medical Group',
            dept:'Deparatment of Cardiology',
            physician:'Dr.Beth Smith',
        }
    ];
});
