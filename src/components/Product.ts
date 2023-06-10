// import { Carousel, CarouselTransition } from "flowbite-svelte";

export interface Product {
  trigger: string;
  title: string;
  data: string;
  price: number;
  size: string;
  boxImgSrc: string;
  popOverImgSrc1: string;
  popOverImgSrc2: string;
  summary: string;
}
// export interface productImgSrcSet {
//   src: {
//     id: number;
//     imgurl: string;
//   };
// }

// export const images = [
//   {
//     id: 0,
//     imgurl: "images/header-2.jpg",
//   },
//   {
//     id: 1,
//     imgurl: "/images/header.jpg",
//   },
// ];

// export let productSrcSet: productImgSrcSet[]={
//   src: {
//     id:0,
//     imgurl:"blank",
//   }
// }

export let products: Product[] = [
  {
    trigger: "",
    title: "Amazon Aim",
    data: "miniatures",
    price: 5.99,
    size: "x by x by x",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "images/product-images/amazons/resize-amazonbird.jpg",
    popOverImgSrc2: "images/product-images/amazons/resize-amazonaim.jpg",
    summary: "blank",
  },
  {
    trigger: "",
    title: "blank",
    data: "blank",
    price: 0,
    size: "blank",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc2: "blank",
    summary: "blank",
  },
  {
    trigger: "",
    title: "blank",
    data: "blank",
    price: 0,
    size: "blank",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc2: "blank",
    summary: "blank",
  },
  {
    trigger: "",
    title: "blank",
    data: "blank",
    price: 0,
    size: "blank",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "blank",
    popOverImgSrc2: "blank",
    summary: "blank",
  },
  {
    trigger: "",
    title: "blank",
    data: "blank",
    price: 0,
    size: "blank",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "blank",
    popOverImgSrc2: "blank",
    summary: "blank",
  },
  {
    trigger: "",
    title: "blank",
    data: "miniatures",
    price: 0,
    size: "blank",
    boxImgSrc: "images/product-images/amazons/resize-amazonaim.jpg",
    popOverImgSrc1: "blank",
    popOverImgSrc2: "blank",
    summary: "blank",
  },
];
