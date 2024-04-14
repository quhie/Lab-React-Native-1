function convertArrayToObject(array) {
    return Object.fromEntries(array.map(item => [item.code, item]));
}

// Mảng dữ liệu cũ
const oldData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Kem nền' },
    { code: 'P003', name: null },
    { code: 'P004', name: ' '},
];

const newData = [
    { code: 'ab', name: 'Son môi' },
    { code: 'ac', name: 'Kem nền' },
];

// Lấy thông tin mỹ phẩm có mã 'ab' từ newData
// Kết quả mong muốn: { code: 'ab', name: 'Son môi' }
const oldDataObject = convertArrayToObject(oldData);
const newDataObject = convertArrayToObject(newData);

const result = newData.map(item => oldDataObject[item.code]);

result.forEach(item => {
    console.log(`code: ${item.code}, name: ${item.name}`);
});
