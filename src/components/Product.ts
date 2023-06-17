// import { Carousel, CarouselTransition } from "flowbite-svelte";

export interface Product {
  trigger: string;
  title: string;
  data: string;
  price: string;
  size: string;
  productKey: string;
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
    title: "Escort, Female Halberd",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0001-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0001-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0001-28-ESCORT.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0001-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Male Warhammer",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0002-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0002-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0002-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0002-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Male Sword (Relaxed)",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0003-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0003-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0003-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0003-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Male Sword (Walking)",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0004-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0004-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0004-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0004-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Male Sword (Standing)",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0005-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0005-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0005-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0005-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Queen",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0006-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0006-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0006-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0006-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Geist",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0007-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0007-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0007-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0007-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Mage",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0008-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0008-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0008-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0008-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Tiefling Warrior",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0009-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0009-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0009-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0009-28-ESCORT.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Escort, Kitsune Spear Wielder",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0010-ESCORT",
    boxImgSrc: "images/product-images/Galaad/Escort/0010-28-ESCORT.jpg",
    popOverImgSrc1:
      "images/product-images/Galaad/Escort/Back/0010-28-ESCORT_Back.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Escort/0010-28-ESCORT.jpg",
    summary: "blank",
  },

  //Magus
  {
    trigger: "",
    title: "Magus, Tiefling Shaman",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0001-MAGUS",
    boxImgSrc: "images/product-images/Galaad/Magus/0001-MAGUS.jpg",
    popOverImgSrc1: "images/product-images/Galaad/Magus/0001-MAGUS.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Magus/0001-MAGUS.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Magus, Summoner",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0002-MAGUS",
    boxImgSrc: "images/product-images/Galaad/Magus/0002-MAGUS.jpg",
    popOverImgSrc1: "images/product-images/Galaad/Magus/0002-MAGUS.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Magus/0002-MAGUS.jpg",
    summary: "blank",
  },

  {
    trigger: "",
    title: "Magus, Pyrokineticist",
    data: "miniatures",
    price: "5.99",
    size: "32mm",
    productKey: "0003-MAGUS",
    boxImgSrc: "images/product-images/Galaad/Magus/0003-MAGUS.jpg",
    popOverImgSrc1: "images/product-images/Galaad/Magus/0003-MAGUS.jpg",
    popOverImgSrc2: "images/product-images/Galaad/Magus/0003-MAGUS.jpg",
    summary: "blank",
  },
];
