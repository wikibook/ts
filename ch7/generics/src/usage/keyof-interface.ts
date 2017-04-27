interface INumber {
    one: number;
    two: number;  
}
type numberType = keyof INumber;
var myNum:numberType="one";
//var myNum2:numberType="three";