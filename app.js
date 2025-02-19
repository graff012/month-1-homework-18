// task 1

// async function loadFiles(files) {
//   for (const file of files) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(`${file} loaded`);
//   }
//   return "All files loaded";
// }

// const files = ['file1', 'file2', 'file3'];

// async function runExample() {
//   const result = await loadFiles(files);
//   console.log(result);
// }

// ==============================================================================//

// task 2

// async function getUserData(id) {
//   if (!id) throw new Error("Invalid ID");

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`
//   );
//   if (!response.ok) throw new Error("User not found");

//   const user = await response.json();
//   if (!user.email.includes("@") || !user.email.includes(".")) {
//     throw new Error("Invalid email format");
//   }

//   return user;
// }

// (async () => {
//   try {
//     const user = await getUserData(1);
//     console.log(user);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// })();

// =========================================================================//

// task 3

// async function fetchData(APIs) {
//     if (!Array.isArray(APIs) || APIs.length === 0) throw new Error("Invalid API list");

//     const requests = APIs.map(api => fetch(api).then(response => {
//         if (!response.ok) throw new Error(`Failed to fetch ${api}`);
//         return response.json();
//     }));

//     return Promise.all(requests);
// }

// (async () => {
//     try {
//         const apis = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2'];
//         const results = await fetchData(apis);
//         console.log(results);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// })();

// ====================================================== //

// task 4

// async function fetchData(APIs) {
//     if (!Array.isArray(APIs) || APIs.length === 0) throw new Error("Invalid API list");

//     const requests = APIs.map(api => fetch(api).then(response => {
//         if (!response.ok) throw new Error(`Failed to fetch ${api}`);
//         return response.json();
//     }));

//     return Promise.all(requests);
// }

// async function processData(data) {
//     try {
//         if (!data || typeof data !== 'object') throw new Error("Invalid data format");
//         if (!data.id || data.value == null) throw new Error("Missing required properties");
//         return `Processed data: ID ${data.id}, Value ${data.value}`;
//     } catch (error) {
//         throw new Error(`Processing error: ${error.message}`);
//     }
// }

// (async () => {
//     try {
//         const apis = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2'];
//         const results = await fetchData(apis);
//         console.log(results);

//         const processed = await processData({ id: 1, value: null });
//         console.log(processed);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// })();

// ===================================================================== //

// task 5

// async function login(username, password) {
//     try {
//         if (!username || typeof username !== 'string') throw new Error("Invalid username");
//         if (!password || typeof password !== 'string') throw new Error("Invalid password");

//         const response = await fetch("https://example.com/api/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, password })
//         });

//         if (!response.ok) throw new Error("Login failed");

//         const data = await response.json();
//         return data.token;
//     } catch (error) {
//         throw new Error(`Login error: ${error.message}`);
//     }
// }

// (async () => {
//     try {
//         const token = await login("user", "pass123");
//         console.log("Token:", token);
//     } catch (error) {
//         console.log("Login error:", error.message);
//     }
// })();

// ====================================================== //

// task 6

// async function saveData(data) {
//     try {
//         if (!data || typeof data !== 'object' || !data.name || !data.age) {
//             throw new Error("Invalid data");
//         }

//         await new Promise(resolve => setTimeout(resolve, 1000));
//         console.log("Data validated");

//         await new Promise(resolve => setTimeout(resolve, 2000));
//         console.log("Data saved");

//         return "Success";
//     } catch (error) {
//         throw new Error(`Save error: ${error.message}`);
//     }
// }

// (async () => {
//     try {
//         await saveData({ name: "John", age: 25 });
//         console.log("Data saqlandi");
//     } catch (error) {
//         console.log("Xatolik yuz berdi");
//     }
// })();

// ========================================================== //

// task 7

// const cache = new Map();

// async function getData(key) {
//     if (cache.has(key)) {
//         console.log("Returning from cache");
//         return cache.get(key);
//     }

//     console.log("Fetching new data");
//     const newData = `Data for ${key}`;
//     cache.set(key, newData);
//     return newData;
// }

// (async () => {
//     try {
//         const result1 = await getData("key1");
//         console.log(result1);

//         const result2 = await getData("key1");
//         console.log(result2);
//     } catch (error) {
//         console.log("Error occurred");
//     }
// })();

// ================================================= //

// task 8

// async function checkServerStatus() {
//     for (let i = 0; i < 3; i++) {
//         console.log("Checking server status...");
//         const isOnline = Math.random() > 0.5; // Simulated status check
//         if (isOnline) return true;
//         await new Promise(resolve => setTimeout(resolve, 2000));
//     }
//     return false;
// }

// (async () => {
//     try {
//         const isOnline = await checkServerStatus();
//         console.log(isOnline ? "Server ishlayapti" : "Server o'chiq");
//     } catch (error) {
//         console.log("Error occurred");
//     }
// })();

// ================================================================ //

// task 9

// async function downloadFile() {
//     const fileName = "file_example.txt";
//     let progress = 0;

//     while (progress < 100) {
//         await new Promise(resolve => setTimeout(resolve, 1000));
//         progress += 20;

//         console.log(`Yuklanmoqda: ${progress}%`);

//         if (progress === 60) {
//             throw new Error("Yuklashda xatolik");
//         }
//     }

//     return fileName;
// }

// try {
//     const fileName = await downloadFile();
//     console.log(`${fileName} yuklandi`);
// } catch (error) {
//     console.log("Yuklashda xatolik");
// }

// =============================================================== //

// task 10

// async function runTasks(tasks) {
//     for (let i = 0; i < tasks.length; i++) {
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         console.log(`${tasks[i]} bajarildi`);
//     }
// }

// const tasks = ['task1', 'task2', 'task3'];
// await runTasks(tasks);
