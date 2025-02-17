// const fs = require("fs");

const yargs = require("yargs");

// fs.writeFileSync("data.txt", "Mina Gamil");

// console.log(fs.readFileSync("data.txt").toString());

// fs.appendFileSync("data.txt", " , Farid Gamil");

// console.log(fs.readFileSync("data.txt").toString());

// ////////////////////////////////////////////////////////

// const x = require("./data1");

// console.log(x.fname);
// console.log(x.lname);

////////////////////////////////////////
// const validator = require("validator");
// // console.log(validator.isEmail("mina"));
// console.log(validator.isEmail("mina@gmail.com"));

////////////////////////////////////////////////
// console.log(process.argv[2]);

///////////////

// console.log(process.argv);


const data100 = require("./data100");
const { type } = require("os");
console.log(yargs.argv);

yargs.command({
    command: "add",
    describe: "Add a new item",
    builder: {
        // id: {
        //     describe: "this is the id desc in add command",
        //     demandOption: true,
        //     type: "number"
        // },
        fname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        // console.log("You have already added a new item");
        // console.log(x.fname, x.lname);
        data100.addPerson(x.id, x.fname, x.lname, x.age, x.city);
    }
})
//////////////////////////
yargs.command({
    command: "delete",
    describe: " to delete an item",
    handler: (x) => {
        // console.log("You have already deleted an item");
        data100.deleteData(x.id);
    }
})
//////////////////////////////////////////
yargs.command({
    command: "read",
    builder: {
        id: {
            describe: "this is id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    describe: " to read an item",
    handler: (x) => {
        // console.log("You have already deleted an item");
        data100.readData(x.id);
    }
})

yargs.command({
    command: "list",
    describe: " to list data",
    handler: () => {
        data100.listData();
    }
})


// console.log(yargs.argv);
yargs.parse()




// const person1 = {
//     fname: "Hossam",
//     lname: "khalil",
//     city: "Cairo"
// }
// const Person1Json = JSON.stringify(person1);

// console.log(Person1Json);

// const Person1Obj = JSON.parse(Person1Json);

// console.log(Person1Obj);


