const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTrainingPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTrainingPoint: 10,
        status: 'pass',
    }
];

const class2 = [
    {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTrainingPoint: 10,
        status: 'failed',
    },
    {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTrainingPoint: 10,
        status: 'pass',
    },
    {
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTrainingPoint: 2,
        status: 'pass',
    }
];
const allStudents = [...class1, ...class2];
const passedStudents = allStudents.filter(student => student.status === 'pass');

const sortedByPoint = passedStudents.slice().sort((a, b) => b.avgPoint - a.avgPoint);

const sortedByTrainingPoint = passedStudents.slice().sort((a, b) => b.avgTrainingPoint - a.avgTrainingPoint);

const top100ByPoint = sortedByPoint.slice(0, 100);

const top10ByTrainingPoint = sortedByTrainingPoint.slice(0, 10);

const ongVang = top100ByPoint[0];

console.log('Danh sách sinh viên có điểm số từ cao xuống thấp:', top100ByPoint);
console.log('Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp:', top10ByTrainingPoint);
console.log('Thông tin của Ong vàng:', ongVang);
