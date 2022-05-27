import { csv } from "d3-fetch"

function germanize(val) {
  let value = parseFloat(val)
  if (!isNaN(value)) {
    return value.toFixed(2).replace(".", ",")
  }
  return "unbekannt"
}

export function fetchData() {
  const DATA_URL = `https://apps.maxspuling.de/assets/bfq/data/BFQ_berlin_food_quartets%20-%20quartets.csv`
  return csv(DATA_URL)
}

export function makePlayingCards(data) {
  let playingCards = []
  data.forEach((item) => {
    let stats = [
      {
        name: "price",
        value: parseFloat(item.price) || 0,
        displayValue: prettyPrice(item.price),
        info: item.priceInfo,
        highestWins: false,
      },
      {
        name: "duration",
        value: parseInt(item.duration) || 0,
        unit: "min",
        highestWins: true,
      },
      {
        name: "yearOpening",
        value: parseInt(item.yearOpening) || 0,
        info: item.yearOpeningInfo,
        highestWins: false,
      },
      {
        name: "noOfStores",
        value: parseInt(item.noOfStores) || 0,
        info: item.noOfStoresInfo,
        highestWins: true,
      },
      {
        name: "hipness",
        value: parseInt(item.hipness) || 0,
        highestWins: true,
      },
    ]

    playingCards.push({
      stats,
      index: item.index,
      category: item.category,
      dish: item.dish,
      location: item.location,
      website: item.website,
      instagram: item.instagram,
      streetAddress: item.streetAddress,
      district: item.district,
      images: item.images,
    })
  })
  return playingCards
}

// courtesy of https://codepen.io/kallil-belmonte/pen/KKKRoyx
export function checkIfImageExists(url, callback) {
  const img = new Image()
  img.src = url

  if (img.complete) {
    callback(true)
  } else {
    img.onload = () => {
      callback(true)
    }
    img.onerror = () => {
      callback(false)
    }
  }
}

function prettyPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price)
}
