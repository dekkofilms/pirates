
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('pirates').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('pirates').insert({id: 1, name: 'Anne Bonney', poison: 'Rum', accessory: 'hot temper', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
        knex('pirates').insert({id: 2, name: 'One Eyed Willie', poison: 'Whiskey', accessory: 'eye patch', image_url: 'http://2.bp.blogspot.com/_g3JaR47c2Ms/TJydOa3Wr1I/AAAAAAAAABg/3qyo0UtkYM8/s1600/oneeyedwillie.jpg'}),
        knex('pirates').insert({id: 3, name: 'Blackbeard', poison: 'Rum', accessory: 'peg leg', image_url: 'http://thumbs.media.smithsonianmag.com//filer/af/df/afdf8162-c200-48fd-ace5-848f521a4148/01-blackbeard-drawing.jpg__800x600_q85_crop_subject_location-530,301.jpg'}),
      ]);
    });
};
