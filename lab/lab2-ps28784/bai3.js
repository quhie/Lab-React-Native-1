const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 2000);
});

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error: some bug');
    }, 2000);
});

const getList = async () => {
    const response = await fetch('https://64d8a86c5f9bf5b879ce6dd9.mockapi.io/api/v1/moviesNow');
    return response.json();
};

// // Yêu cầu thứ nhất
// Promise.all([firstPromise, secondPromise, getList()])
//     .then(results => {
//         console.log('Yêu cầu thứ nhất - Kết thúc công việc:', results);
//     })
//     .catch(error => {
//         console.error('Yêu cầu thứ nhất - Lỗi:', error);
//     });


// Yêu cầu thứ hai
Promise.allSettled([firstPromise, secondPromise, getList()])
    .then(results => {
        console.log('Yêu cầu thứ hai - Kết thúc công việc:', results);
        console.log('Yêu cầu thứ hai - Kết quả của yêu cầu 1:', results[0].value);
        console.log('Yêu cầu thứ hai - Kết quả của yêu cầu 2:', results[1].value);
        console.log('Yêu cầu thứ hai - Kết quả của yêu cầu 3:', results[2].value);
    })
    .catch(error => {
        console.error('Yêu cầu thứ hai - Lỗi:', error);
    })
    .finally(() => {
        console.log('Yêu cầu thứ hai - Hoàn thành dù có lỗi hay không');
    });
