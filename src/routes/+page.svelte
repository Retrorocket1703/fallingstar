<script>
  import manager from "../components/product-manager.svelte";
</script>

  <div id="header-box" class="m-2">
    <h1>The Forge for Your Creativity</h1>
    <input type="text" placeholder="Search" id="search" />
    <div id="logo"><p>logo</p></div>
    <img class="rounded" src="images/header.jpg" alt="none"/>
    
  </div>

  <h2 class="m-2">Filter</h2>

  <manager></manager>

  <div class="control">
    <div class="btn-group">
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn btn-clicked"
          data-filter="featured"
          src="" alt="none"
        />
        <p>Featured</p>
      </div>
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn"
          data-filter="all"
          src="" alt="none"
        />
        <p>All</p>
      </div>
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn"
          data-filter="miniatures"
          src="" alt="none"
        /> 
        <p>Miniatures</p>
      </div>
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn"
          data-filter="terrain"
          src="" alt="none"
        />
        <p>Terrain</p>
      </div>
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn"
          data-filter="vehicles"
          src="" alt="none"
        />
        <p>Vehicles</p>
      </div>
      <div class="btn-subgroup">
        <input
          type="image"
          class="btn"
          data-filter="other"
          src="" alt="none"
        />
        <p>Other</p>
      </div>
    </div>
  </div>

  <div class="container" id="#container">
    <div class="box" data-item="miniatures">
     <img src="images/product-images/amazons/resize-amazonaim.jpg" alt="none"/>
      
    </div>
    <div class="box" data-item="cake">
      <img src="images/61.jpg" alt="none" />
    </div>
    <div class="box" data-item="pizza">
      <img src="images/81.jpg" alt="none"/>
    </div>

    <div class="box" data-item="miniatures">
      <img src="images/product-images/amazons/resize-amazonbird.jpg" alt="none"/>
    </div>
    <div class="box" data-item="cake">
      <img src="images/62.jpg" alt="none"/>
    </div>
    <div class="box" data-item="pizza">
      <img src="images/82.jpg" alt="none"/>
    </div>

    <div class="box" data-item="miniatures">
      <img src="images/product-images/amazons/resize-nagaamazonshaman.jpg" alt="none"/>
    </div>
    <div class="box" data-item="cake">
      <img src="images/63.jpg" alt="none"/>
    </div>
    <div class="box" data-item="pizza">
      <img src="images/83.jpg" alt="none"/>
    </div>

    <div class="box" data-item="miniatures">
      <img src="images/44.jpg" alt="none"/>
    </div>
    <div class="box" data-item="cake">
      <img src="images/64.jpg" alt="none"/>
    </div>
    <div class="box" data-item="pizza">
      <img src="images/84.jpg" alt="none"/>
    </div>

    <div class="box" data-item="miniatures">
      <img src="images/45.jpg" alt="none"/>
    </div>
    <div class="box" data-item="cake">
      <img src="images/65.jpg" alt="none"/>
    </div>
    <div class="box" data-item="pizza">
      <img src="images/85.jpg" alt="none"/>
    </div>
  </div>


