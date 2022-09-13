import {writable} from "svelte/store";

//store 에서 export 하는 객체는 기본적으로 수정이 불가능하다
//writable 을 통해 쓰기가능한 형태로 내보내기 가능
export let userName=writable('기동이');