
const supabaseUrl = 'https://wejcgylojzxxgftzjeew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlamNneWxvanp4eGdmdHpqZWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MzI2ODgsImV4cCI6MjA2NjUwODY4OH0.iSE-gDfdqpmSY4VBCeGJc22kJiLIh9lg3KW5FJwMxw8';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('postContent').value;
    const { data, error } = await supabase
        .from('posts')
        .insert([{ content }]);
    if (error) console.error(error);
    else loadPosts();
});

async function loadPosts() {
    const { data, error } = await supabase
        .from('posts')
        .select('*');
    if (error) console.error(error);
    else {
        const postList = document.getElementById('postList');
        postList.innerHTML = '';
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.textContent = post.content;
            postList.appendChild(postElement);
        });
    }
}

document.getElementById('messageForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('messageContent').value;
    // Logic to send message will go here
});
