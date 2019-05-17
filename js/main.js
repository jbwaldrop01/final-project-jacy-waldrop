$(function () {
  let studios

  $.ajax({
    url: '../studios.json',
    dataType: 'json',
    async: false
  }).done(function (data) {
    console.log('studios', data)
    studios = data
  }).fail(function (a, b, error) {
    console.log(error)
  })

  // loop through studios list and generate card for
  // each studio and display on the screen
  studios.forEach(function (studio) {
    let cardHtml = generateCard(studio)
    $('.flex-hub-container').append(cardHtml)
  })

  // This function is responsible for
  // generating the card html for each event
  function generateCard (event) {
    return (
      `<div class="hub-card v2">
        <div class="hvr-bounce-to-bottom-pink">
          <img src="images/pattern-2.png">

          <a href=${event.url}>

            <div class="ontop">
              <div class="day">
                <h1>Thursday</h1>
              </div>

              <div class="date">
                <h3>May 30 | ${event.time}</h3>
              </div>

              <div class="location">
                <h4>New York, NY</h4>
              </div>

              <div class="title">
                <h2>${event.eventTitle}</h2>
              </div>
            </div>
          </a>
        </div>
      </div>`)
  }
})
