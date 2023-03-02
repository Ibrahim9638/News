const loadNews = async ()=>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    const rel = await fetch(url);
    const data =  await (rel.json());
    displayLoadNew(data.data);
}

const displayLoadNew = (news)=>{
    // console.log(news.news_category);
    const newsContainer = document.getElementById('news-portal-section');
    news.news_category.forEach(news=>{
        // console.log(news);

        const div =  document.createElement('div');
        div.innerHTML  = `
        <a class="nav-link" href="#" onclick="SingleCategory('${news.category_id}', '${news.category_name}')">${news.category_name}</a>
        
        `
        newsContainer.appendChild(div);

    })
}

const SingleCategory = (category_id, category_name)=>{
    console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayAllCategory(data.data, category_name))
}

const displayAllCategory = (data, category_name)=>{
    console.log(data, category_name);
    document.getElementById('news-count').innerText = data.length;
    document.getElementById('news-update').innerText = category_name;
}