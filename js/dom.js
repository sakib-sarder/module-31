document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue'
    }
});

document.getElementById('center-third').addEventListener('click', function () {
    document.getElementById('third-friend').style.textAlign = 'center';
});

document.getElementById('add-new').addEventListener('click', function () {
    const parent = document.getElementById('friends');
    console.log(parent);

    const div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Something New Added</p>
    `;
    parent.appendChild(div);
})