describe("#transformPhotoObj()", function () {
  it('should take a photo object and return an object with just title and <abbr title="uniform resource locator">URL</abbr>', function () {
    var input = {
        id: "25373736106",
        owner: "99117316@N03",
        secret: "146731fcb7",
        server: "1669",
        farm: 2,
        title: "Dog goes to desperate measure to avoid walking on a leash",
        ispublic: 1,
        isfriend: 0,
        isfamily: 0,
      },
      expected = {
        title: "Dog goes to desperate measure to avoid walking on a leash",
        url: "https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg",
      },
      actual = FlickrFetcher.transformPhotoObj(input);
    expect(actual).to.eql(expected);

    input = {
      id: "24765033584",
      owner: "27294864@N02",
      secret: "3c190c104e",
      server: "1514",
      farm: 2,
      title: "the other cate",
      ispublic: 1,
      isfriend: 0,
      isfamily: 0,
    };
    expected = {
      title: "the other cate",
      url: "https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg",
    };
    actual = FlickrFetcher.transformPhotoObj(input);
    expect(actual).to.eql(expected);
  });
});
