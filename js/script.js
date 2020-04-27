function car(name, model, owner, year, phone, image) {
  return {name, model, owner, year, phone, image };
}

const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
  car("ford", "focus", "Макс", 2016, "+7 929 123 45 67", "img/focus.jpg"),
  car("ford", "mondeo", "Влад", 2018, "+7 923 124 45 66", "img/mondeo.jpg"),
  car("porshe", "panamera", "Алексей", 2019, "+7 909 123 45 77", "img/panamera.jpg"),
  car("opel", "astra", "Даниил", 2016, "+7 929 123 45 67", "img/astra.jpg"),
  car("toyota", "camri", "Сергей", 2018, "+7 923 124 45 66", "img/camri.jpg"),
  car("mazda", "rx-8", "Владимир", 2020, "+7 923 124 45 66", "img/rx8.jpg"),
];



new Vue({
  el: "#app",
  data: {
    cars: cars,
    car: cars[0],
    logs: [],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: "",
    modalVisibility: false,
  },
  methods: {
    selectCar(index) {
      this.car = cars[index];
      this.selectedCarIndex = index;
    },
    newOrder(){
      this.modalVisibility = false
      this.logs.push(
        log(`Заказ произведен: ${this.car.name} - ${this.car.model}`, 'ok')
      )
    },

    cancelOrder: function(){
      this.modalVisibility = false
      this.logs.push(
        log(`Отмена заказа: ${this.car.name} - ${this.car.model}`, 'cnl')
      )
    },
  },
  computed: {
    phoneBtnText: function () {
      return this.phoneVisibility ? "Скрыть телефон" : "Показать телефон";
    },
    filteredCars: function () {
      return this.cars.filter((car) => {
        return (
          car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
        );
      });
    },
  },
 filters:{
   date(value){
     return value.toLocaleString()
   }
 }
});
