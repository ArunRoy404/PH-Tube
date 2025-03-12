const getCategory = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(r => r.json())
        .then(data => loadCategoryButtons(data.categories))
}
const loadCategoryButtons = (categories) => {
    const btnContainer = document.getElementById('cat-button-container')
    categories.forEach(cat => {
        // console.log(cat)
        btnContainer.innerHTML += `
        <button onclick=handleCatBtn(${cat.category_id}) id='cat-${cat.category_id}' class="btn hover:bg-red-500 hover:text-white">
            ${cat.category}
        </button>
        `
    });
    // console.log(btnContainer)
}

const getVideo = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(r => r.json())
        .then(data => loadVideo(data.videos))
}

const getCategoryVideo = (cat) =>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${cat}`
    fetch(url)
        .then(r => r.json())
        .then(data => loadVideo(data.category))
}

const loadVideo = (videos) => {
    const videoContainer = document.getElementById('video-container')
    videoContainer.innerHTML = ""

    videos.forEach(video => {
        videoContainer.innerHTML += `
        <div class="card bg-base-100 shadow-sm">
            <!-- thumbnail  -->
            <figure class="">
                <img class="rounded-lg h-52 w-full object-cover"
                    src='${video.thumbnail}' alt="Shoes" />
            </figure>

            <!-- video details  -->
            <div class="px-2 my-5 flex gap-4">
                <!-- avatar container  -->
                <div>
                    <!-- avatar  -->
                    <div class="avatar">
                        <div class="w-10 rounded-full">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>

                <!-- detail container  -->
                <div>
                    <h1 class="text-[#171717] font-bold">${video.title}</h1>
                    <h2 class="flex gap-2 text-[#171717B3] text-sm">${video.authors[0].profile_name} <img class="w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></h2>
                    <p class="text-[#171717B3] text-sm">${video.others.views} views</p>
                </div>
            </div>
        </div>
        `
    })
}


const removeActiveAll = () =>{
    const activeBtn = document.querySelectorAll('.active-btn')
    activeBtn.forEach(btn => btn.classList.remove('active-btn'))
}

const selectActiveBtn = (cat) =>{
    const btn = document.getElementById(`cat-${cat}`)
    btn.classList.add('active-btn')
}

const handleCatBtn = (cat) => {
    removeActiveAll()
    if(cat === "all"){
        getVideo()
    }else{
        getCategoryVideo(cat)
    }
    selectActiveBtn(cat)
}

getCategory()
handleCatBtn("all")