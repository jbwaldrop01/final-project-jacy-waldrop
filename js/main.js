$(function () {
  let studios
  let versions = [1, 2, 3]

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

  displayEvents()

  // loop through studios list and generate card for
  // each studio and display on the screen
  function displayEvents () {
    let version
    let versionIndex = 0

    studios.forEach(function (studio) {
      if (studio.studioName !== '') {
        version = 4
      } else {
        // ensure same pattern is not selected twice in a row
        if (versionIndex >= 3) {
          // reset versionIndex to 0
          // if index is equal to or greater than 3
          versionIndex = 0
        }

        version = versions[versionIndex]
        versionIndex = versionIndex + 1
      }

      console.log('version', version)

      let cardHtml = generateCard(studio, version)
      $('.flex-hub-container').append(cardHtml)
    })
  }

  // This function is responsible for
  // generating the card html for each event
  function generateCard (event, version) {
    let name

    // if a studio name exists then use that name
    // else use the event title
    if (event.studioName !== '') {
      name = event.studioName
    } else {
      name = event.eventTitle
    }

    return (
      `<div class="hub-card v${version}">
        <div class="hvr-bounce-to-bottom-pink">
          <img src="images/pattern_${version}.png">

          <a href=${event.url}>

            <div class="ontop">
              <div class="day">
                <h1>${event.dayOfWeek}</h1>
              </div>

              <div class="date">
                <h3>May 30 | ${event.time}</h3>
              </div>

              <div class="location">
                <h4>${event.city}</h4>
              </div>

              <div class="title">
                <h2>${name}</h2>
              </div>
            </div>
          </a>
        </div>
      </div>`)
  }
})
