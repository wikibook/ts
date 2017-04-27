interface Point{    
    readonly x: number;
    readonly y: number;
}
type Point2 = {
    x: number;
    readonly y: number;
};
var point: Point = { x: 10, y: 20 };
var point2: Point2 = { x: 10, y: 20 };

//point.x=100; // x가 readonly 이므로 재할당이 불가능합니다.
point2.x=100; // readonly가 없으므로 할당이 가능
console.log(point);
console.log(point2);