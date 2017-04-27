var config={"version":1.0,"language":"korea"};
//config.lang="korea"; // Error
delete config.version;
console.log(JSON.stringify(config));