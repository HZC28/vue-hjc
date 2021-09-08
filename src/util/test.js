class parent{
    constructor(x,y){
        this.x=x;
        this.y=y
    }
    getX(){
        console.log(this.x)
    }
    setX(){
        console.log(this.y)
    }
}
class children extends parent{
    constructor(x,y,z){
        super(x,y)
        this.z=z
    }
    getSum(){
        return this.x+this.y+this.z
        console.log(this.x+this.y+this.z)
    }
}
export default children
