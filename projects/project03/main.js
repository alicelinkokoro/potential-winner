const records = [
    {
      title: 'Skala',
      releaseYear: 2011,
      artist: 'Mathias Eick',
      link: '01Skala.html',
    },
      {
        title: 'Last Leaf',
        releaseYear: 2011,
        artist: 'Danish String Quartet',
        link: '02Last Leaf.html',
    },
  ]
  
  const recordThumbnail = document.querySelector('.record_thumbnail');
  
    function openAlbumPage(){
      // logic 
      records.link
    }
    
    
  recordThumbnail.addEventListener("click", openAlbumPage)