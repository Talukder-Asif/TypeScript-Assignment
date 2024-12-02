{
    // 
    function validateKeys<T>( obj : T, keys : (typeof T)[]) : boolean  {
        // console.log("names" in obj)
        for(const key of keys) {
            // console.log(key)
            if (!(key in obj)) {
                return false;  // Return false as soon as a key is missing
            }
        }
        return true;
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };

    console.log(validateKeys(person, ["name", "age"]));

    // 
}