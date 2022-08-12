var student = [
    {
        name : "ankita",
        gender : "female",
        ID : 101,
        city : "MUMBAI"
    },
    {
        name : "swaraj",
        gender : "male",
        ID : 102,
        city : "hydrabad"
    },
    {
        name : "rutik",
        gender : "male",
        ID : 103,
        city : "pune"
    },
    {
        name : "tanuja",
        gender : "female",
        ID : 104,
        city : "banglore"
    },
    {
        name : "ram",
        gender : "male",
        ID : 105,
        city : "pune"
    },
    {
        name : "monika",
        gender : "female",
        ID : 106,
        city : "hyadrabad"
    },
    {
        name : "nita",
        gender : "female",
        ID : 107,
        city : "hydrabad"
    },
    {
        name : "suresh",
        gender : "male",
        ID : 108,
        city : "keral"
    },
    {
        name : "sam",
        gender : "male",
        ID : 109,
        city : "MUMBAI"
    },
]

//print those student belong from city hydrabad
for(var i=0;i<student.length;i++){
    if(student[i].city=="hydrabad"){
        console.log(student[i])
    }
}

//print only male student
for(var i=0;i<student.length;i++){
    if(student[i].gender=="male"){
        console.log(student[i])
    }
}

//print only female student
for(var i=0;i<student.length;i++){
    if(student[i].gender=="female"){
        console.log(student[i])
    }
}

//print those student belong from city hydrabad or pune 

for(var i=0;i<student.length;i++){
    if(student[i].city=="hydrabad" || student[i].city=="pune"){
        console.log(student[i])
    }
}


//print all student name,city
for(var i=0;i<student.length;i++){
    console.log("name : ",student[i].name ," city : " ,student[i].city)

}