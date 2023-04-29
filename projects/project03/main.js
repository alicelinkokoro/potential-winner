const records = [
    {
      title: 'Skala',
      releaseYear: 2011,
      artist: 'Mathias Eick',
      link: '01Skala.html',
    },
      {
        title: 'Last Leaf',
        releaseYear: 2017,
        artist: 'Danish String Quartet',
        link: '02Last Leaf.html',
    },

    {
      title: 'Khmer',
      releaseYear: 2019,
      artist: 'Nils Petter Molvaer',
      link: '03Khmer.html',
  },
     {
     title: 'Changing Places',
     releaseYear: 2003,
     artist: 'Tord Gustavsen Trio',
     link: '04Changing Places.html',
  },
]

  
  const recordThumbnail = document.querySelector('.record_thumbnail');
  
    function openAlbumPage(){
      // logic 
      records.link
    }
    
    
  recordThumbnail.addEventListener("click", openAlbumPage)