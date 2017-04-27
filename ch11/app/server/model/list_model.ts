import Item from "../../common/types/Item";

export default class ItemList {

    getList(): Item[] {
        let arr: Item[] = [];
        arr.push({ title: "최신 타입스크립트", intro: "타입스크립트를 초보자도 쉽게 이해할 수 있게 설명한 책이다.", url: "http://wikibook.co.kr" })
        arr.push({ title: "시작하세요! 타입스크립트", intro: "타입스크립트는 새로운 패러다임을 제시하는 언어다.", url: "http://wikibook.co.kr" })
        arr.push({ title: "타입스크립트 실무 프로그래밍", intro: "타입스크립트은 대규모 애플리케이션 개발에 적합한 언어다.", url: "http://wikibook.co.kr" })
        arr.push({ title: "타입스크립트 프로그래밍", intro: "타입스크립트는 마이크로소프트가 만든 차세대 자바스크립트다.", url: "http://wikibook.co.kr" })
        return arr;
    }
}