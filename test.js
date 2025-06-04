console.log("Running test...");
const output = "Hello from Jenkins CI/CD Pipeline!";
if (!output.includes("Jenkins")) {
    throw new Error("Test failed!");
}
console.log("Test passed!");
