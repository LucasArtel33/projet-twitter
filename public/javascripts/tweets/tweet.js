window.addEventListener('DOMContentLoaded', () => {
  bindTweet();
})

function bindTweet () {
  const elements = document.querySelectorAll('.fa-trash-alt');
  const tweetContainer = document.querySelector('#tweet-container');

  elements.forEach( e => {
    e.addEventListener('click', ($event) => {
      const tweetId = $event.target.getAttribute('tweetid');
      axios.delete('/tweets/' + tweetId)
           .then( response => {
             tweetContainer.innerHTML = response.data;
             bindTweet();
           })
           .catch(e => {console.log(e);});
    }) 
  })
}