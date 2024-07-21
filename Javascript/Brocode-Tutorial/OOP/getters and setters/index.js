class Rectangle{
constructor(width,height){
    this.width=width;
    this.height=height;
}

set width(newWidth){
    if(newWidth> 0){
        this._width = newWidth;
    } else{
        console.error("Width must be a positive number");
    }
}


set height(newHeight){
    if(newHeight> 0){
        this._height = newHeight;
    } else{
        console.error("Height must be a positive number");
    }
}
}

const rectangle = new Rectangle(-1000000,"pizza");

console.log(rectangle.width);
console.log(rectangle.height);