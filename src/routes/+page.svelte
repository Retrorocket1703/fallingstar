<script>
  import { products } from "../components/Product";
  import Product from "../components/Product.svelte";
  import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<div id="header-box" class="m-2">
  <!-- <h1>The Forge for Your Creativity</h1> -->
  <!-- <input type="text" placeholder="Search" id="search" /> -->
  <div id="logo"><p>logo</p></div>
  <img class="rounded" src="images/header.jpg" alt="none" />
</div>

<h2 class="m-2">Filter</h2>

<div class="control">
  <div class="btn-group">
    <div class="btn-subgroup">
      <input type="image" class="btn" data-filter="all" src="" alt="none" />
      <p>All</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn btn-clicked"
        data-filter="miniatures"
        src="images/product-images/amazonidlebow.jpg"
        alt="none"
      />
      <p>Miniatures</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="monsters"
        src="images/product-images/resize-heavenly-ophidian-2.jpg"
        alt="none"
      />
      <p>Monsters</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="terrain"
        src="images/product-images/720X720-dragon-gates-square.jpg"
        alt="none"
      />
      <p>Terrain</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="vehicles"
        src="images/product-images/720X720-1138-balloon-air-ship-1.jpg"
        alt="none"
      />
      <p>Vehicles</p>
    </div>
    <div class="btn-subgroup">
      <input
        type="image"
        class="btn"
        data-filter="other"
        src="images/product-images/720X720-witchbust-gift.jpg"
        alt="none"
      />
      <p>Other</p>
    </div>
  </div>
</div>

<br />

<div class="container" id="#container">
  {#each products as product}
    <Product {product} />
  {/each}
</div>
