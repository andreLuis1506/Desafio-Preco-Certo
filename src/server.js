import {Server } from 'miragejs'

new Server({
  seeds(server) {
    server.db.loadData({
      next: [
        {"next": null }
      ],
      previous: [
        {"previous": null}
      ],
      products: [
        {
          "id": 5069894,
          "code": "7891356073403",  
          "name": "Aspirador de Pó Vertical 2x1 Britânia Dust Off BAS1000V 220v",
          "cost": 12.5, 
          "price": 75.5, 
          "south_shipping": 45.9, 
          "north_shipping": 59.9 
        },
        {
          "id": 5069892,
          "code": "7891356093333",  
          "name": "Fritadeira Air Fry Philco PFR18TI Titanium 4,6L 1500W 220v",
          "cost": 26.6, 
          "price": 150.6, 
          "south_shipping": 21.9, 
          "north_shipping": 35.9 
        },
        {
          "id": 5069888,
          "code": "8710103950585",  
          "name": "Liquidificador Philips Walita RI2240/40 Vermelho 1200W 220V",  
          "cost": 15.5, 
          "price": 78.5, 
          "south_shipping": 15.9, 
          "north_shipping": 25.9
        }
      ]
    })
  },
  routes() {
    this.get('https://sys.precocerto.co/api/products', (schema) => {

      const data ={
        total: schema.db.products.length,
        next: schema.db.next[0].next,
        previous: schema.db.previous[0].previous,
        rows: schema.db.products
      }

      return data
    })
  }
})