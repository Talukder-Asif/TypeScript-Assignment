{
    // 
    class Car {
        constructor(public make: string, public model: string, public year: number){
            make = "Toyota";
            model = "Camry";
            year = 2021;
        }

        public getCarAge() {
            const currentYear = new Date().getFullYear();
            console.log(currentYear - this.year + ` (assuming current year is ${currentYear})`)
        }
    }

    const car = new Car("Honda", "Civic", 2018)

    car.getCarAge();




    // 
}