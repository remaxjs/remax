Component({
  data: {
    list: [],
  },
  onInit() {
    this.setData({
      list: [
        {
          name: '1',
          price: 1,
        },
        {
          name: '2',
          price: 2,
        },
        {
          name: '3',
          price: 3,
        },
      ],
    });
  },
});
