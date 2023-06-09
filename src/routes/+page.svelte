<script>
  import { products } from "../components/Product";
  import Product from "../components/Product.svelte";
</script>

<svelte:head>
  <script src="js/nav-bar.js"></script>
</svelte:head>
<!-- <div id="nav">
  <div id="open-sidebar">
    <button class="openbtn" onclick="openNav()"
      ><i class="fa-solid fa-bars" style="color: #ffffff;" /></button
    >
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
  </div>

  <div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
      >&times;</a
    >
    <a href="#"><i class="fa-solid fa-book-open" /> Catalog</a><br />
    <a href="#"><i class="fa-solid fa-scroll" /> Order Form</a><br />
    <a href="#"><i class="fa-solid fa-envelope" /> Contact</a><br />
  </div>
</div> -->

<div id="header-box" class="m-2">
  <h1>The Forge for Your Creativity</h1>
  <input type="text" placeholder="Search" id="search" />
  <div id="logo"><p>logo</p></div>
  <img class="rounded" src="images/header.jpg" alt="none" />
</div>

<h2 class="m-2">Filter</h2>

<div class="control">
  <div class="btn-group">
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn btn-clicked"
        data-filter="featured"
        src=""
        alt="none"
      />
      <p>Featured</p>
    </div>
    <div class="btn-subgroup">
      <input type="image" class="btn" data-filter="all" src="" alt="none" />
      <p>All</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="miniatures"
        src=""
        alt="none"
      />
      <p>Miniatures</p>
    </div>
    <div class="btn-subgroup">
      <input type="image" class="btn" data-filter="terrain" src="" alt="none" />
      <p>Terrain</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="vehicles"
        src=""
        alt="none"
      />
      <p>Vehicles</p>
    </div>
    <div class="btn-subgroup">
      <input type="image" class="btn" data-filter="other" src="" alt="none" />
      <p>Other</p>
    </div>
  </div>
</div>

<div class="container" id="#container">
  {#each products as product}
    <Product {product} />
  {/each}
</div>
