async function getPosts(){
    try {
        let response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
                
        data.forEach(post => {
            document.body.innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;
        });
    } catch (error) {
        console.log(error);
        
    }  
}
