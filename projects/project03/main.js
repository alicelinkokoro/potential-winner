console.log ("this works")


const records = [
    {
      title: 'Skala',
      releaseYear: 2011,
      artist: 'Mathias Eick',
      image: ['https://user-images.githubusercontent.com/101160183/235358677-02d94bb6-d409-4c10-a61f-cf9c1c3b2f28.jpg', 'https://user-images.githubusercontent.com/101160183/235358697-ae8a762a-f63e-44cc-9318-e5c8f36cd3f8.jpg','https://user-images.githubusercontent.com/101160183/235358915-c5ba30d5-d47f-4039-b018-77897458b8e2.jpg','https://user-images.githubusercontent.com/101160183/235358932-04e96860-ca96-4069-b5ab-bb8dc21de921.jpg', 'https://user-images.githubusercontent.com/101160183/235359041-9cac8165-135a-416e-b202-b959fb4cf412.jpg', 'https://user-images.githubusercontent.com/101160183/235359051-33e78a18-57b3-4854-8c16-947092ef05ff.jpg'],
      link: 'https://alicelinkokoro.github.io/potential-winner/projects/project03/01Skala.html',
      audio: 'https://alicelinkokoro.github.io/potential-winner/projects/project03/media/Mathias Eick - Skala.mp3',
    },

      {
        title: 'LastLeaf',
        releaseYear: 2017,
        artist: 'Danish String Quartet',
        image: ['https://user-images.githubusercontent.com/101160183/235360611-3fe393b4-1e89-40ea-ad2b-17978ea273f9.jpg', 'https://user-images.githubusercontent.com/101160183/235360631-87867eb7-1ee9-41f7-9fd3-cd3badd4db73.jpg','https://user-images.githubusercontent.com/101160183/235360643-b07e5267-1c1d-4297-b90d-450b05abd255.jpg','https://user-images.githubusercontent.com/101160183/235360704-b7043871-6ddc-44be-8764-f05777670e5f.jpg','https://user-images.githubusercontent.com/101160183/235360721-a9bdb65a-5661-4b78-a218-851523647cca.jpg'],
        link: 'https://alicelinkokoro.github.io/potential-winner/projects/project03/02Last%20Leaf.html',
        audio: 'http://docs.google.com/uc?export=open&id=1PVRtwBearsPvu_s7A7Lwy5HuItIC6Sdz',
    },

    {
      title: 'Khmer',
      releaseYear: 2019,
      artist: 'Nils Petter Molvaer',
      image: ['https://user-images.githubusercontent.com/101160183/235360757-2af0675b-fb81-44f0-8217-16a66242ea18.jpg', 'https://user-images.githubusercontent.com/101160183/235360790-d853148f-f7a1-4319-8297-708515876e61.jpg', 'https://user-images.githubusercontent.com/101160183/235360809-2bee19a8-14d6-414d-a368-30bdd51984c3.jpg', 'https://user-images.githubusercontent.com/101160183/235360819-df84ac7a-4ab6-433c-bcf0-7a9081e28885.jpg','https://user-images.githubusercontent.com/101160183/235360837-dd690c7c-76ab-408d-a776-268a3870edc4.jpg','https://user-images.githubusercontent.com/101160183/235361016-c24fd175-d846-4bfa-9693-1c6aefa647e1.jpg','https://user-images.githubusercontent.com/101160183/235361028-2b83f546-9796-43b1-8159-ce24fe250e90.jpg'],
      link: 'https://alicelinkokoro.github.io/potential-winner/projects/project03/03Khmer.html',
      audio:  'http://docs.google.com/uc?export=open&id=1Nb3cOz-fxD8r_s5GbnutXeiV3ryoIFr5',
  },
     {
     title: 'ChangingPlaces',
     releaseYear: 2003,
     artist: 'Tord Gustavsen Trio',
     image: ['https://user-images.githubusercontent.com/101160183/235361054-f0dd8790-5bc7-4fda-b141-95de4a37acdf.jpg', 'https://user-images.githubusercontent.com/101160183/235361084-84a77e56-adbf-4e57-8b1f-03adfc20e718.jpg','https://user-images.githubusercontent.com/101160183/235361098-57cad074-39c6-432c-9fc6-dd91921b7543.jpg','https://user-images.githubusercontent.com/101160183/235361189-37be63d3-d072-4b75-bbf0-7921da75a298.jpg', 'https://user-images.githubusercontent.com/101160183/235361200-558cb491-b584-45ed-b003-7f2e0996139e.jpg','https://user-images.githubusercontent.com/101160183/235361249-f4b69a0b-770b-4a7c-bba0-e67af68aa11d.jpg','https://user-images.githubusercontent.com/101160183/235361256-e8c99163-aa4a-4d81-8870-84359de4c911.jpg'],
     link: 'https://alicelinkokoro.github.io/potential-winner/projects/project03/04Changing%20Places.html',
     audio: 'http://docs.google.com/uc?export=open&id=1vVyflfrhK9D8_UZtHMHuJwzEFK9GPWA5',
  }
]


  
  //render all images to page
  

  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");

    const flexContainer = ".flexContainer"
 
    function renderRecordsToPage(records) {
      for (let i = 0; i < records.length; i++) {
        let list_item = document.createElement("p");
        list_item.classList.add(records[i].title, "title");

        for (let h = 0; h <records[i].image.length; h++) {
    

        image = document.createElement("img");
        image.setAttribute("src", records[i].image[h]);    
        
        // I tried to add anchor to the images to link to sub-webpages but didn't manage to do it lol
        a = document.createElement("a");
        a.appendChild(image);
        a.href = records[i].link;
        document.body.append(a);
          

        if (records[i].title === 'Skala') {
          one.appendChild(list_item);
          list_item.appendChild(a);
        }

        if (records[i].title === 'LastLeaf') {
          two.appendChild(list_item);
          list_item.appendChild(a);
        }
        if (records[i].title === 'Khmer') {
          three.appendChild(list_item);
          list_item.appendChild(a);
        }
        if (records[i].title === 'ChangingPlaces') {
          four.appendChild(list_item);
          list_item.appendChild(a);
          }

          

          let element = image.getBoundingClientRect();

          image.animate(
            [
              // keyframes
              { transform: "translateX(0px)", opacity: 1},
              { transform: "translateX(" + Math.random()*element.left + "px)  translateY(" + Math.random()*element.bottom + "px)"  },
              { transform: "translateY(" + Math.random()*i + "px)", opacity: 0.1 },
              // scale(" + Math.random()*i + ")
            ],
            {
              // timing options
              duration: 20000,
              iterations: Infinity,
            }
          )
  
        }
        

    }
  }


    window.addEventListener('load', renderRecordsToPage(records));

    // image.addEventListener('click', triggerAlbumPage);







    



// filter and audio


let filterBtns = document.querySelector('.filters');
 let titles = document.querySelectorAll(".title");
 let audio = document.createElement("audio");
 

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains("filter-btn")){
    // select the current active button
    let activeBtn = filterBtns.querySelector(".active")

    // apply the active class to the target
    event.target.classList.add("active")

    const filterValue = event.target.getAttribute('data-filter') 

    for(let i = 0; i < records.length; i++){
      if(titles[i].classList.contains(filterValue) || filterValue === 'all'){
        titles[i].classList.remove('hide')
        titles[i].classList.add('show') 
       
        audio.setAttribute("src", records[i].audio);
        audio.play()

      

      } else {
        titles[i].classList.remove('show')
        titles[i].classList.add('hide')
      }

    }
  
    
  }
}

filterBtns.addEventListener("click", filterFn);
















      
  