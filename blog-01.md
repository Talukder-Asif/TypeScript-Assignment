# What is Union (|) in TS?
-> Union type is one kind of OR operator used when a value can be more then one type.

# Give a example of Union (|) in TS.
-> 
____Code____
function numOrString(abc: string | number) // Here the abc can be a string or a number
    { 
        console.log(abc);
    }


# What is Intersection (&) in TS?
-> In TS, Intersection Types are one kind of AND operator  to create new types by combining multiple types into a single type.

# Give a example of Union (|) in TS.
-> 
____Code____
interface ExampleData {
	data?: any; // Creating a new instance
}

interface ExampleError {
	error?: any;  // Creating a new instance
}

type ExampleType = ExampleData & ExampleError; // Creating a new type by combining multiple interface

const example: ExampleType = { data: 'content' };