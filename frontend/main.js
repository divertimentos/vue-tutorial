var app  = new Vue({
    el: '#app', 
    data: {
        product: 'Socks',
        description: 'White socks with a heart-shaped leaf inside it!',
        image: 'vmSocks-green-onWhite.jpg',
    }
})

var details = new Vue({
    el: '#details-page',
    data: {
        productdetails: 'lorem ipsum dolor veritasium ensiferum et piper refrescus est.',
    }
})
