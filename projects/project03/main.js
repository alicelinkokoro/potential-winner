const records = [
    {
      title: 'Skala',
      releaseYear: 2011,
      artist: 'Mathias Eick',
      image: ['https://user-images.githubusercontent.com/101160183/235358677-02d94bb6-d409-4c10-a61f-cf9c1c3b2f28.jpg', 'https://user-images.githubusercontent.com/101160183/235358697-ae8a762a-f63e-44cc-9318-e5c8f36cd3f8.jpg']
      link: '01Skala.html',
    },
      {
        title: 'Last Leaf',
        releaseYear: 2017,
        artist: 'Danish String Quartet',
        image: ['https://user-images.githubusercontent.com/101160183/235360611-3fe393b4-1e89-40ea-ad2b-17978ea273f9.jpg', 'https://user-images.githubusercontent.com/101160183/235360631-87867eb7-1ee9-41f7-9fd3-cd3badd4db73.jpg']
        link: '02Last Leaf.html',
    },

    {
      title: 'Khmer',
      releaseYear: 2019,
      artist: 'Nils Petter Molvaer',
      image: ['https://user-images.githubusercontent.com/101160183/235360757-2af0675b-fb81-44f0-8217-16a66242ea18.jpg', 'https://user-images.githubusercontent.com/101160183/235360790-d853148f-f7a1-4319-8297-708515876e61.jpg']
      link: '03Khmer.html',
  },
     {
     title: 'Changing Places',
     releaseYear: 2003,
     artist: 'Tord Gustavsen Trio',
     image: ['https://user-images.githubusercontent.com/101160183/235361054-f0dd8790-5bc7-4fda-b141-95de4a37acdf.jpg', 'https://user-images.githubusercontent.com/101160183/235361084-84a77e56-adbf-4e57-8b1f-03adfc20e718.jpg']
     link: '04Changing Places.html',
  }
]

  
  // const recordThumbnail = document.querySelector('.record_thumbnail');
  



    function renderRecordsToPage(records) {
      for (let i = 0; i < records.length; i++) {
        let list_item = document.createElement("li");
        list_item.classList.add(records[i].title, "title");

        let image = document.createElement("img");
        image.setAttribute("src", records[i].image);

        ul.appendChild(list_item);
        list_item.appendChild(image);
  
    }
  }

    renderRecordsToPage(records);
    

    let screenWidth = window.screen.width
    let screenHeight = window.screen.height

    if (screenWidth < window.screen.width/2, screenHeight< window.screen.height) {
      appendChild (record[0].image)
    }
    if (screenWidth > window.screen.width/2, screenHeight< window.screen.height) {
      appendChild (record[1].image)
    }
    if (screenWidth < window.screen.width/2, screenHeight> window.screen.height) {
      appendChild (record[2].image)
    }
    if (screenWidth > window.screen.width/2, screenHeight> window.screen.height) {
      appendChild (record[3].image)
    }
    
  //recordThumbnail.addEventListener("click", openAlbumPage)