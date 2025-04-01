document.addEventListener('DOMContentLoaded', () => {
    // Simulated User (for demo purposes)
    const currentUser = {
        name: 'John',
        role: 'Member'
    };
    document.querySelector('.user-info span').textContent = `Welcome, ${currentUser.name} (${currentUser.role})`;

    // Language Toggle (Simulated)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const lang = e.target.value;
        alert(`Language switched to ${lang === 'en' ? 'English' : 'Luganda'}. Translation not implemented in this demo.`);
    });

    // Logout Button (Simulated)
    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Logging out...');
        // In a real app, this would redirect to a login page
    });

    // Post Form
    const postForm = document.getElementById('post-form');
    const feedPosts = document.getElementById('feed-posts');
    let postIdCounter = 2; // Start after the sample post (ID 1)

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = document.getElementById('post-content').value.trim();
        if (!content) {
            alert('Please enter some content to post.');
            return;
        }

        // Simulate posting
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.setAttribute('data-id', postIdCounter++);
        const timestamp = new Date().toLocaleString();
        newPost.innerHTML = `
            <div class="post-header">
                <span class="post-user">${currentUser.name} (${currentUser.role})</span>
                <span class="post-timestamp">${timestamp}</span>
            </div>
            <div class="post-content">
                <p>${content}</p>
            </div>
            <div class="post-actions">
                <button class="like-btn">Like (0)</button>
                <button class="comment-btn">Comment</button>
                <button class="repost-btn">Repost</button>
            </div>
            <div class="comments-section" style="display: none;">
                <h3>Comments</h3>
                <ul class="comments-list"></ul>
                <form class="comment-form">
                    <input type="text" class="comment-input" placeholder="Add a comment..." required>
                    <button type="submit">Comment</button>
                </form>
            </div>
        `;
        feedPosts.prepend(newPost); // Add new post to the top
        postForm.reset();
        // In a real app, this would save the post to a database
    });

    // Handle Likes, Comments, and Reposts (Delegate events for dynamic posts)
    feedPosts.addEventListener('click', (e) => {
        const target = e.target;
        const post = target.closest('.post');
        if (!post) return;

        // Like Button
        if (target.classList.contains('like-btn')) {
            const likeCount = parseInt(target.textContent.match(/\d+/)[0]) || 0;
            target.textContent = `Like (${likeCount + 1})`;
            // In a real app, this would update the like count in the database
        }

        // Comment Button (Toggle Comments Section)
        if (target.classList.contains('comment-btn')) {
            const commentsSection = post.querySelector('.comments-section');
            commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
        }

        // Repost Button
        if (target.classList.contains('repost-btn')) {
            const postContent = post.querySelector('.post-content p').textContent;
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.setAttribute('data-id', postIdCounter++);
            const timestamp = new Date().toLocaleString();
            newPost.innerHTML = `
                <div class="post-header">
                    <span class="post-user">${currentUser.name} (${currentUser.role})</span>
                    <span class="post-timestamp">${timestamp}</span>
                </div>
                <div class="post-content">
                    <p>Reposted: ${postContent}</p>
                </div>
                <div class="post-actions">
                    <button class="like-btn">Like (0)</button>
                    <button class="comment-btn">Comment</button>
                    <button class="repost-btn">Repost</button>
                </div>
                <div class="comments-section" style="display: none;">
                    <h3>Comments</h3>
                    <ul class="comments-list"></ul>
                    <form class="comment-form">
                        <input type="text" class="comment-input" placeholder="Add a comment..." required>
                        <button type="submit">Comment</button>
                    </form>
                </div>
            `;
            feedPosts.prepend(newPost);
            // In a real app, this would save the repost to the database
        }
    });

    // Handle Comments (Delegate events for dynamic comment forms)
    feedPosts.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target;
        if (!target.classList.contains('comment-form')) return;

        const commentInput = target.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        if (!commentText) {
            alert('Please enter a comment.');
            return;
        }

        const commentsList = target.previousElementSibling;
        const newComment = document.createElement('li');
        newComment.textContent = `${currentUser.name}: ${commentText}`;
        commentsList.appendChild(newComment);
        commentInput.value = '';
        // In a real app, this would save the comment to the database
    });
});