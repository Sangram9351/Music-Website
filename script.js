const music = new Audio('7.mp3');
// music.play();

const songs =[
    {
        id:1,
        songName:'1',
        poster:"img/16.jpg"
    },
    {
        id:2,
        songName:'2',
        poster:"img/2.jpg"
    },
    {
        id:3,
        songName:'3',
        poster:"img/3.jpg"
    },
    {
        id:4,
        songName:'4',
        poster:"img/4.jpg"
    },
    {
        id:5,
        songName:'5 ',
        poster:"img/5.jpg"
    },
    {
        id:6,
        songName:'6',
        poster:"img/6.jpg"
    },
    {
        id:7,
        songName:'7',
        poster:"img/7.jpg"
    },
    {
        id:8,
        songName:'8',
        poster:"img/8.jpg"
    },
    {
        id:9,
        songName:'9',
        poster:"img/9.jpg"
    },
    {
        id:10,
        songName:'10',
        poster:"img/10.jpg"
    },
    {
        id:11,
        songName:'11',
        poster:"img/11.jpg"
    },
    {
        id:12,
        songName:'12',
        poster:"img/12.jpg"
    },
    {
        id:13,
        songName:'13',
        poster:"img/13.jpg"
    },
    {
        id:14,
        songName:'14',
        poster:"img/14.jpg"
    },
    {
        id:15,
        songName:'15',
        poster:"img/15.jpg"
    }, 
    {
        id:16,
        songName:'5',
        poster:"img/6.jpg"
    }, 
    {
        id:17,
        songName:'10',
        poster:"img/1.jpg"
    }, 
    {
        id:18,
        songName:'9',
        poster:"img/15.jpg"
    }, 
    {
        id:19,
        songName:'4',
        poster:"img/4.jpg"
    }, 
    {
        id:20,
        songName:'1',
        poster:"img/7.jpg"
    }, 
    {
        id:21,
        songName:'2',
        poster:"img/16.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let master_Play=document.getElementById('master_Play');
let wave= document.getElementById('wave')[0];
master_Play.addEventListener('click',()=>{
    if (music.pused || music.currentTime <=0){
        music.play;
        master_Play.classList.remove('bi-play-fill');
        master_Play.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }
    else{
       music.pause();
       master_Play.classList.add('bi-play-fill');
       master_Play.classList.remove('bi-pause-fill');
       wave.classList.remove('active2');
    }
});

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');  
    })
}

const makeAllBackground = ()=>{
        Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
                el.style.background ='rgb(105, 105, 105,.0)';
     })
 }
 
 let index=0;
 let poster_master_play=document.getElementById('poster_master_play');
 let title = document.getElementsByClassName('title');
 Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
     e.addEventListener('click', (e)=>{
         index=e.target.id;
         makeAllplays();
         // console.log(index);
         e.target.classList.remove('bi-play-circle-fill');
         e.targetay.classList.add('bi-pause-circle-fill');
         music.src='music/${index}.mp3'; 
         poster_master_play.src= 'img/${index}.jpg' ; 
         music.play();
        let songTitles = songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
        let{songName /*, poster*/}=ele;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
        });
    
        master_Play.classList.remove(bi-play-fill);
        master_Play.classList.add(bi-pause-fill);
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            master_Play.classList.add(bi-play-fill);
        master_Play.classList.remove(bi-pause-fill);
        wave.classList.remove('active2');
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))['${index-1}'].style.background= "rgb(105,105,170, .1)";
 })
})



// let title=document.getElementById('title');
let currentTime  =document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    
    let min1= Math.floor(music_dur/60);
    let sec1= Math.floor(music_dur%60);
    
    // console.log(min1);
    
    if (sec1<10){
        sec1= `0${sec1}`
    }
    currentend.innerText= '${min1}:${sec1}';

    let min2= Math.floor(music_curr/60);
    let sec2= Math.floor(music_curr%60);

    if (sec2<10){
        sec2= `0${sec2}`
    }

        currentstart.innerText= `${min2}:${sec2}`
        let progressBar=parseInt((music_curr/music_duration)*100);
        seek.value= progressBar;
        // console.log(seek); 
        let seekbar= seek.value;
        bar2.style.width= `${seekbar}%`;
        dot.style.left= `${seekbar}%`;
    })
seek.addEventListener('change',()=>{
    music.currentTime= seek.value*music_duration/100;
}) 

music.addEventListener('ended',()=>{
    master_Play.classList.add(bi-play-fill);
master_Play.classList.remove(bi-pause-fill);
wave.classList.remove('active2');
})

let vol_icon= document.getElementById('vol_icon');
let vol= document.getElementById('vol');
let vol_dot= document.getElementById('vol_dot');
let vol_bar= document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    
    }

    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }

    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_bar.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');
// index= Array.from(document.getElementsByClassName('songItem')),length;
// console.log(index)

back.addEventListener('click', ()=>{
    index -= 1; 
    if(index < 1){
        index= Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`music/${index}.mp3`; 
         poster_master_play.src= `img/${index}.jpg`; 
         music.play();
        //  masterPlay.classList.remove('bi-play-fill');
        //  masterPlay.classList.add('bi-pause-fill');
        // let songTitles = songs.filter((els)=>{
        //     return els.id==index;
        // });
        song_titles.forEach(elss =>{
        let{songName /*, poster*/}=ele;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
        })
    
    // makeAllBackground();
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 105,.1)";
})

next.addEventListener('click', ()=>{
    index -=0;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')),length){
        index = 1;
    }

    music.src=`music/${index}.mp3`; 
         poster_master_play.src= `img/${index}.jpg` ; 
         music.play();
        //  masterPlay.classList.remove('bi-play-fill');
        //  masterPlay.classList.add('bi-pause-fill');
        let songTitles = songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(elss =>{
            let{songName /*, poster*/}=ele;
            title.innerHTML = songName;
            // poster_master_play.src = poster;
        });
    
    // makeAllBackground();
    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105,.1)";
    //  wave.classList.add('active1');
})

// left_scroll = document.getElementById('left_scroll');


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_artr_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330;
});

pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330;
});

// seek.addEventListener('change',()=>{
//         music.currentTime= seek.value=music_dur/100;
//     }) ;
