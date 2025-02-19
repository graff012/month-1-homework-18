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

async function getUserData(id) {
  if (!id) throw new Error("Invalid ID");

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) throw new Error("User not found");

  const user = await response.json();
  if (!user.email.includes("@") || !user.email.includes(".")) {
    throw new Error("Invalid email format");
  }

  return user;
}

(async () => {
  try {
    const user = await getUserData(1);
    console.log(user);
  } catch (error) {
    console.log("Error:", error.message);
  }
})();
