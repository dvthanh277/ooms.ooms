$(function () {
  const carData = [
    {
      carName: "Tất cả xe",
      imageUrlHover: "./images/allcar.png",
      imageUrl: "./images/allcar.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_all.mp3",
      category: "Tiếng Anh Trước",
      brand: "Xe",
    },
    {
      carName: "Tất cả xe (Tiếng Việt Trước)",
      imageUrlHover: "./images/allcar.png",
      imageUrl: "./images/allcar.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_all_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Xe",
    },
    {
      carName: "VF3",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwaa27a00c/images/mega-menu/car/VF3_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwd0b654ea/images/mega-menu/car/VF3.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf3.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF5",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw89e7b6ae/images/mega-menu/car/VF5_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw7d9d746e/images/mega-menu/car/VF5.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf5.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF6",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw97863970/images/mega-menu/car/VF6_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw8a95b6e7/images/mega-menu/car/VF6.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf6.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF7",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw1192a5fc/images/mega-menu/car/VF7_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw44ef384f/images/mega-menu/car/VF7.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf7.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF8",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw56a40f9e/images/mega-menu/car/VF8_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwfedf86ff/images/mega-menu/car/VF8.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf8.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF9",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw42729c23/images/mega-menu/car/VF9_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9a247c2c/images/mega-menu/car/VF9.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf9.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF Fadil",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9ad4801e/images/mega-menu/car/Fadil_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf28b901a/images/mega-menu/car/Fadil.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vffadil.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF LUX A",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa53eb41c/images/mega-menu/car/Lux-A2.0_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb0f5a2a7/images/mega-menu/car/Lux-A2.0.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vfluxa.mp3",
      category: "Tiếng Anh Trước",
      brand: "Vinfast",
    },
    {
      carName: "Toyota Innova",
      imageUrlHover:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_744,h_294/https://toyotabacninh.org/wp-content/uploads/2019/03/Bac-1D6-min.png",
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_744,h_294/https://toyotabacninh.org/wp-content/uploads/2019/03/Bac-1D6-min.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_innova.mp3",
      category: "Tiếng Anh Trước",
      brand: "Toyota",
    },
    {
      carName: "Hyundai Tucson",
      imageUrlHover:
        "https://hyundaidongsaigon.vn/thumbs/600x400x2/upload/product/hyundai-tucson-trang-6452.png",
      imageUrl:
        "https://hyundaidongsaigon.vn/thumbs/600x400x2/upload/product/hyundai-tucson-trang-6452.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_tucson.mp3",
      category: "Hyundai",
      brand: "Hyundai",
    },
    {
      carName: "Mazda CX30",
      imageUrlHover:
        "https://mazdamotors.vn/media/el0dnn52/cx-30_dmlm_dgdblac_46v_d2b_ext_360_24_transparentpng_0024.png?width=248",
      imageUrl:
        "https://mazdamotors.vn/media/el0dnn52/cx-30_dmlm_dgdblac_46v_d2b_ext_360_24_transparentpng_0024.png?width=248",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_mazdacx30.mp3",
      category: "Tiếng Anh Trước",
      brand: "Mazda",
    },
    {
      carName: "MG5",
      imageUrlHover:
        "https://mgmotor.vn/wp-content/uploads/2023/08/MG5_White.2-min5.png",
      imageUrl:
        "https://mgmotor.vn/wp-content/uploads/2023/08/MG5_White.2-min5.png",
      musicUrl: "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_mg5.mp3",
      category: "Tiếng Anh Trước",
      brand: "MG",
    },

    // Tiếng Việt Trước
    {
      carName: "VF3 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwaa27a00c/images/mega-menu/car/VF3_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwd0b654ea/images/mega-menu/car/VF3.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf3_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF5 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw89e7b6ae/images/mega-menu/car/VF5_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw7d9d746e/images/mega-menu/car/VF5.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf5_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF6 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw97863970/images/mega-menu/car/VF6_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw8a95b6e7/images/mega-menu/car/VF6.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf6_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF7 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw1192a5fc/images/mega-menu/car/VF7_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw44ef384f/images/mega-menu/car/VF7.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf7_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF8 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw56a40f9e/images/mega-menu/car/VF8_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwfedf86ff/images/mega-menu/car/VF8.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf8_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF9 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw42729c23/images/mega-menu/car/VF9_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9a247c2c/images/mega-menu/car/VF9.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vf9_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF Fadil (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9ad4801e/images/mega-menu/car/Fadil_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwf28b901a/images/mega-menu/car/Fadil.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vffadil_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "VF LUX A (Tiếng Việt Trước)",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwa53eb41c/images/mega-menu/car/Lux-A2.0_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb0f5a2a7/images/mega-menu/car/Lux-A2.0.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_vfluxa_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Vinfast",
    },
    {
      carName: "Toyota Innova (Tiếng Việt Trước)",
      imageUrlHover:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_744,h_294/https://toyotabacninh.org/wp-content/uploads/2019/03/Bac-1D6-min.png",
      imageUrl:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_744,h_294/https://toyotabacninh.org/wp-content/uploads/2019/03/Bac-1D6-min.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_innova_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Toyota",
    },
    {
      carName: "Hyundai Tucson (Tiếng Việt Trước)",
      imageUrlHover:
        "https://hyundaidongsaigon.vn/thumbs/600x400x2/upload/product/hyundai-tucson-trang-6452.png",
      imageUrl:
        "https://hyundaidongsaigon.vn/thumbs/600x400x2/upload/product/hyundai-tucson-trang-6452.png",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_tucson_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Hyundai",
    },
    {
      carName: "Mazda CX30 (Tiếng Việt Trước)",
      imageUrlHover:
        "https://mazdamotors.vn/media/el0dnn52/cx-30_dmlm_dgdblac_46v_d2b_ext_360_24_transparentpng_0024.png?width=248",
      imageUrl:
        "https://mazdamotors.vn/media/el0dnn52/cx-30_dmlm_dgdblac_46v_d2b_ext_360_24_transparentpng_0024.png?width=248",
      musicUrl:
        "https://dvthanh277.github.io/ooms.ooms/sounds/welcome_mazdacx30_vi.mp3",
      category: "Tiếng Việt Trước",
      brand: "Mazda",
    },
  ];

  // Function to render cars based on data
  function renderCars(data) {
    const $list = $("#carList");
    $list.empty();

    if (data.length === 0) {
      $list.html(
        "<p style='text-align:center; opacity:0.7; padding:20px;'>No cars found.</p>"
      );
      return;
    }

    data.forEach((car, i) => {
      const card = $(`
        <div class="car-card" data-index="${i}">
          <img class="car-img" src="${car.imageUrl}" alt="${car.carName}" />
          <img class="car-img-hover" src="${car.imageUrlHover}" alt="${car.carName}" />


          <div class="car-info">
            <h3>${car.carName}</h3>
            
          </div>

          <div class="controls">
            <button class="btn-circle play-btn" data-index="${i}" title="Play / Pause">
              <i class="fa-solid fa-play"></i>
            </button>
            <button class="btn-circle download-btn" data-music="${car.musicUrl}">
              <i class="fa-solid fa-download"></i> 
            </button>

         
           
          </div>

          <audio id="audio-${i}" src="${car.musicUrl}" preload="none"></audio>
        </div>
      `);

      $list.append(card);
    });

    // Bind events to the newly created elements
    bindPlayEvents();
  }

  // Track the currently selected category and brand
  let currentCategory = "all";
  let currentBrand = "all";

  // Function to render category filters
  function renderCategories() {
    const categories = [...new Set(carData.map((car) => car.category))];
    const $categoryList = $("#categoryList");
    $categoryList.empty();

    // Add "All" category
    const allCategory = $(
      `<button class="category-item active" data-category="all">Tất cả</button>`
    );
    $categoryList.append(allCategory);

    // Add other categories
    categories.forEach((category) => {
      const categoryBtn = $(
        `<button class="category-item" data-category="${category}">${category}</button>`
      );
      $categoryList.append(categoryBtn);
    });
  }

  // Function to render brand filters
  function renderBrands() {
    const brands = [...new Set(carData.map((car) => car.brand))];
    const $brandList = $("#brandList");
    $brandList.empty();

    // Add "All" brand
    const allBrand = $(
      `<button class="brand-item active" data-brand="all">Tất cả</button>`
    );
    $brandList.append(allBrand);

    // Add other brands
    brands.forEach((brand) => {
      const brandBtn = $(
        `<button class="brand-item" data-brand="${brand}">${brand}</button>`
      );
      $brandList.append(brandBtn);
    });
  }

  // Helper function to apply both filters
  function applyFilters() {
    const searchKeyword = $("#searchInput").val().toLowerCase().trim();

    let filtered = carData;

    // Apply category filter
    if (currentCategory !== "all") {
      filtered = filtered.filter((car) => car.category === currentCategory);
    }

    // Apply brand filter
    if (currentBrand !== "all") {
      filtered = filtered.filter((car) => car.brand === currentBrand);
    }

    // Apply search filter
    if (searchKeyword !== "") {
      filtered = filtered.filter((car) =>
        car.carName.toLowerCase().includes(searchKeyword)
      );
    }

    renderCars(filtered);
  }

  // Initial render
  renderCars(carData);
  renderCategories();
  renderBrands();

  // Bind category click events
  $(document).on("click", ".category-item", function () {
    $(".category-item").removeClass("active");
    $(this).addClass("active");

    currentCategory = $(this).data("category");

    // Apply all filters
    applyFilters();
  });

  // Bind brand click events
  $(document).on("click", ".brand-item", function () {
    $(".brand-item").removeClass("active");
    $(this).addClass("active");

    currentBrand = $(this).data("brand");

    // Apply all filters
    applyFilters();
  });

  // Bind play events function
  function bindPlayEvents() {
    $(".play-btn")
      .off("click")
      .on("click", function () {
        const idx = $(this).data("index");
        const audio = document.getElementById(`audio-${idx}`);
        const $card = $(`.car-card[data-index="${idx}"]`);
        const $icon = $(this).find("i");

        // pause others
        $("audio").each((_, a) => {
          if (a.id !== `audio-${idx}`) {
            a.currentTime = 0;
            a.pause();

            const otherIdx = a.id.split("-")[1];
            const $otherCard = $(`.car-card[data-index="${otherIdx}"]`);
            $otherCard.removeClass("playing");
            $otherCard
              .find(".play-btn i")
              .removeClass("fa-pause")
              .addClass("fa-play");
          }
        });

        if (audio.paused) {
          // If audio has ended, restart it from the beginning
          if (audio.currentTime === audio.duration) {
            audio.currentTime = 0;
          }
          audio.play();
          $card.addClass("playing");
          $icon.removeClass("fa-play").addClass("fa-pause");
        } else {
          audio.pause();
          $card.removeClass("playing");
          $icon.removeClass("fa-pause").addClass("fa-play");
        }

        audio.onended = function () {
          $card.removeClass("playing");
          $icon.removeClass("fa-pause").addClass("fa-play");
        };
      });
  }

  // Search functionality
  $("#searchInput").on("input", function () {
    applyFilters();
  });

  // Download button
  $(document).on("click", ".download-btn", function () {
    const url = $(this).data("music");
    showPopup(url);
  });

  function renderLink(url) {
    $("#link_download").html(
      `<a href="${url}" class="download-link" target="_blank" download>Tải xuống</a>`
    );
  }

  // Variable to store the active timer
  let activeTimer = null;

  function showPopup(url) {
    const $popup = $("#downloadPopup");
    let timeLeft = 5;

    // Clear any existing timer to prevent multiple timers running
    if (activeTimer) {
      clearInterval(activeTimer);
      activeTimer = null;
    }

    $("#countdown").text(timeLeft);
    $("#link_download").html(
      `Chờ một chút <span id="countdown">5</span> giây.`
    );
    $popup.fadeIn(200);
    $popup.css("display", "flex");

    activeTimer = setInterval(() => {
      timeLeft--;
      $("#countdown").text(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(activeTimer);
        activeTimer = null;
        // window.location.href = url;
        renderLink(url);
      }
    }, 1000);

    // Close popup when clicking outside
    $(document)
      .off("click.popupOutside")
      .on("click.popupOutside", function (e) {
        if ($(e.target).closest(".popup").length === 0) {
          $popup.fadeOut(200);
          $(document).off("click.popupOutside");
          // Clear the timer when closing the popup
          if (activeTimer) {
            clearInterval(activeTimer);
            activeTimer = null;
          }
        }
      });
  }
});
