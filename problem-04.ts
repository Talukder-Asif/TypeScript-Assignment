{
    // 
        type Circle = {
            shape : 'Circle',
            radius : number
        }
        type Rectangle = {
            shape : 'Rectangle',
            width : number,
            height : number
        }
        type Shape = Circle | Rectangle;
        
        function calculateShapeArea(shape : Shape) : number| string {

            if (shape.shape === 'Circle') {
                return (Math.PI * shape.radius * shape.radius).toFixed(2);
            }else if (shape.shape === 'Rectangle') {
                return (shape.height * shape.width);
            }else{
                return `404 error`;
            }
        }


        const circleArea  = calculateShapeArea({
            shape : 'Circle',
            radius : 5
        })
        console.log(circleArea)
        const rectangleArea = calculateShapeArea({
            shape: "Rectangle",
            width: 4,
            height: 6,
          });
          console.log(rectangleArea)


    // 
}