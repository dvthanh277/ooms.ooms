$(function () {
  const carData = [
    {
      carName: "VF3",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwaa27a00c/images/mega-menu/car/VF3_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwd0b654ea/images/mega-menu/car/VF3.png",
      musicUrl: "./sounds/welcome_vf3.mp3",
    },
    {
      carName: "VF5",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw89e7b6ae/images/mega-menu/car/VF5_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw7d9d746e/images/mega-menu/car/VF5.png",
      musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      carName: "VF6",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw97863970/images/mega-menu/car/VF6_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw8a95b6e7/images/mega-menu/car/VF6.png",
      musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      carName: "VF7",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw1192a5fc/images/mega-menu/car/VF7_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw44ef384f/images/mega-menu/car/VF7.png",
      musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      carName: "VF8",
      imageUrlHover:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw56a40f9e/images/mega-menu/car/VF8_hover.png",
      imageUrl:
        "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwfedf86ff/images/mega-menu/car/VF8.png",
      musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    // {
    //   carName: "VF9",
    //   imageUrlHover:
    //     "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw42729c23/images/mega-menu/car/VF9_hover.png",
    //   imageUrl:
    //     "https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw9a247c2c/images/mega-menu/car/VF9.png",
    //   musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    // },
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

  // Initial render
  renderCars(carData);

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
    const keyword = $(this).val().toLowerCase().trim();
    if (keyword === "") {
      renderCars(carData); // Show all cars when search is empty
    } else {
      const filtered = carData.filter((car) =>
        car.carName.toLowerCase().includes(keyword)
      );
      renderCars(filtered);
    }
  });

  // Download button
  $(document).on("click", ".download-btn", function () {
    const url = $(this).data("music");
    showPopup(url);
  });
  function renderLink(url) {
    $("#link_download").html(`<a href="${url}" download>Tải xuống</a>`);
  }

  function showPopup(url) {
    const $popup = $("#downloadPopup");
    let timeLeft = 5;
    $("#countdown").text(timeLeft);
    $popup.fadeIn(200);
    $popup.css("display", "flex");

    const timer = setInterval(() => {
      timeLeft--;
      $("#countdown").text(timeLeft);
      if (timeLeft <= 0) {
        clearInterval(timer);
        // window.location.href = url;
        renderLink(url);
      }
    }, 1000);
  }
});
