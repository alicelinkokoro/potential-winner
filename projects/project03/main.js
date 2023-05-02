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
        image: ['https://user-images.githubusercontent.com/101160183/235358677-02d94bb6-d409-4c10-a61f-cf9c1c3b2f28.jpg', 'https://user-images.githubusercontent.com/101160183/235358697-ae8a762a-f63e-44cc-9318-e5c8f36cd3f8.jpg']
        link: '02Last Leaf.html',
    },

    {
      title: 'Khmer',
      releaseYear: 2019,
      artist: 'Nils Petter Molvaer',
      image: ['https://user-images.githubusercontent.com/101160183/235358677-02d94bb6-d409-4c10-a61f-cf9c1c3b2f28.jpg', 'https://user-images.githubusercontent.com/101160183/235358697-ae8a762a-f63e-44cc-9318-e5c8f36cd3f8.jpg']
      link: '03Khmer.html',
  },
     {
     title: 'Changing Places',
     releaseYear: 2003,
     artist: 'Tord Gustavsen Trio',
     image: ['https://user-images.githubusercontent.com/101160183/235358677-02d94bb6-d409-4c10-a61f-cf9c1c3b2f28.jpg', 'https://user-images.githubusercontent.com/101160183/235358697-ae8a762a-f63e-44cc-9318-e5c8f36cd3f8.jpg']
     link: '04Changing Places.html',
  },
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

    renderRecordsToPage(records);
    
    
  //recordThumbnail.addEventListener("click", openAlbumPage)