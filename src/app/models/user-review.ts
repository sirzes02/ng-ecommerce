export type UserReview = {
  id: string;
  productId: string;
  userName: string;
  userImageUrl: string;
  rating: number;
  title: string;
  comment: string;
  reviewDate: Date;
};

export type AddReviewParams = Pick<UserReview, 'title' | 'comment' | 'rating'>;

export const sampleUserReviews: UserReview[] = [
  {
    id: 'r1',
    productId: '1',
    userName: 'Ana Torres',
    userImageUrl: 'https://i.pravatar.cc/300?img=1',
    rating: 5,
    title: 'Excellent product',
    comment: 'Very comfortable and high quality. I definitely recommend it.',
    reviewDate: new Date('2026-06-10'),
  },
  {
    id: 'r2',
    productId: '1',
    userName: 'Miguel Rivera',
    userImageUrl: 'https://i.pravatar.cc/300?img=8',
    rating: 4,
    title: 'Great sound for the price',
    comment:
      'The headphones feel solid and the noise cancellation works well in busy places. Battery life is good too, although the ear pads can warm up after long use.',
    reviewDate: new Date('2026-07-01'),
  },
  {
    id: 'r3',
    productId: '2',
    userName: 'Carlos Mena',
    userImageUrl: 'https://i.pravatar.cc/300?img=2',
    rating: 4,
    title: 'Great value for money',
    comment: 'Looks good and works properly. I wish it were a bit more durable.',
    reviewDate: new Date('2026-06-15'),
  },
  {
    id: 'r4',
    productId: '3',
    userName: 'Lucía Pérez',
    userImageUrl: 'https://i.pravatar.cc/300?img=3',
    rating: 5,
    title: 'Very satisfied',
    comment: 'Fast delivery and the product meets everything promised.',
    reviewDate: new Date('2026-06-18'),
  },
  {
    id: 'r5',
    productId: '3',
    userName: 'Ethan Clark',
    userImageUrl: 'https://i.pravatar.cc/300?img=9',
    rating: 4,
    title: 'Comfortable and stylish',
    comment:
      'The chair is comfortable and looks great in my home office. It could use better lumbar support, but overall it is a worthwhile purchase.',
    reviewDate: new Date('2026-07-02'),
  },
  {
    id: 'r6',
    productId: '4',
    userName: 'Diego Sánchez',
    userImageUrl: 'https://i.pravatar.cc/300?img=4',
    rating: 3,
    title: 'Decent',
    comment: 'It is okay, but I expected a slightly better finish.',
    reviewDate: new Date('2026-06-20'),
  },
  {
    id: 'r7',
    productId: '5',
    userName: 'Mariana Díaz',
    userImageUrl: 'https://i.pravatar.cc/300?img=5',
    rating: 4,
    title: 'Very good purchase',
    comment: 'The design is nice and daily use is comfortable.',
    reviewDate: new Date('2026-06-22'),
  },
  {
    id: 'r8',
    productId: '6',
    userName: 'Javier Gómez',
    userImageUrl: 'https://i.pravatar.cc/300?img=6',
    rating: 5,
    title: 'Perfect gift',
    comment: 'I bought it for a birthday and it was a total success.',
    reviewDate: new Date('2026-06-25'),
  },
  {
    id: 'r9',
    productId: '7',
    userName: 'Paula Martínez',
    userImageUrl: 'https://i.pravatar.cc/300?img=7',
    rating: 5,
    title: 'Highly recommended',
    comment: 'Excellent shopping experience and a very versatile product.',
    reviewDate: new Date('2026-06-28'),
  },
  {
    id: 'r10',
    productId: '8',
    userName: 'Olivia West',
    userImageUrl: 'https://i.pravatar.cc/300?img=10',
    rating: 4,
    title: 'Nice scent and packaging',
    comment:
      'The candles arrived quickly and smell lovely. The packaging is attractive, and the scent lasts longer than expected.',
    reviewDate: new Date('2026-07-03'),
  },
  {
    id: 'r11',
    productId: '9',
    userName: 'Sophia Lee',
    userImageUrl: 'https://i.pravatar.cc/300?img=11',
    rating: 4,
    title: 'Solid daily backpack',
    comment:
      'Good size for work and gym items, with a clean design. It would be better if it had more internal pockets.',
    reviewDate: new Date('2026-07-04'),
  },
  {
    id: 'r12',
    productId: '10',
    userName: 'Noah Carter',
    userImageUrl: 'https://i.pravatar.cc/300?img=12',
    rating: 5,
    title: 'Amazing display quality',
    comment:
      'The monitor delivers crisp colors and excellent sharpness. It transformed my home office setup and feels premium.',
    reviewDate: new Date('2026-07-05'),
  },
  {
    id: 'r13',
    productId: '10',
    userName: 'Mia Brooks',
    userImageUrl: 'https://i.pravatar.cc/300?img=13',
    rating: 5,
    title: 'Great for movies and work',
    comment:
      'I love the clarity and brightness. It handles both gaming and productivity really well, and the stand is very sturdy.',
    reviewDate: new Date('2026-07-06'),
  },
  {
    id: 'r14',
    productId: '10',
    userName: 'Liam Parker',
    userImageUrl: 'https://i.pravatar.cc/300?img=14',
    rating: 4,
    title: 'Excellent performance',
    comment:
      'Excellent performance for work and entertainment, though I wish it had more USB ports.',
    reviewDate: new Date('2026-07-07'),
  },
  {
    id: 'r15',
    productId: '10',
    userName: 'Emma Foster',
    userImageUrl: 'https://i.pravatar.cc/300?img=15',
    rating: 5,
    title: 'Beautiful colors',
    comment:
      'The colors are vivid and the screen is bright. It makes video editing much easier and more enjoyable.',
    reviewDate: new Date('2026-07-08'),
  },
  {
    id: 'r16',
    productId: '10',
    userName: 'Noah Reed',
    userImageUrl: 'https://i.pravatar.cc/300?img=16',
    rating: 5,
    title: 'Very happy with this monitor',
    comment:
      'Very happy with this monitor: fast response, crisp image, and a clean design that fits my desk perfectly.',
    reviewDate: new Date('2026-07-09'),
  },
  {
    id: 'r17',
    productId: '1',
    userName: 'Sophie Adams',
    userImageUrl: 'https://i.pravatar.cc/300?img=17',
    rating: 5,
    title: 'Outstanding audio',
    comment:
      'The audio quality is outstanding and the design feels premium. Great for long listening sessions.',
    reviewDate: new Date('2026-07-10'),
  },
  {
    id: 'r18',
    productId: '3',
    userName: 'Evan Green',
    userImageUrl: 'https://i.pravatar.cc/300?img=18',
    rating: 4,
    title: 'Very ergonomic',
    comment:
      'The chair is very ergonomic and the materials feel durable. I would recommend it for anyone working from home.',
    reviewDate: new Date('2026-07-11'),
  },
];
