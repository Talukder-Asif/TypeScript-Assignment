{
    // 
    function getProperty<t, x extends keyof t>(obj:t, key: x) : t[x]{
        return obj[key];
    }


    const person = {
        name: "Asif",
        age: 23,
        city: "Dhaka"
    }
    console.log(getProperty(person, "name"));

    // 
}