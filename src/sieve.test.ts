import {sieve} from './utilities/sieve';

test('Returns 2, 3, 5, 7 for range 1-10', () => {
    const a : number[] = sieve(1, 10)
    expect(a).toContain(2)
    expect(a).toContain(3)
    expect(a).toContain(5)
    expect(a).toContain(7)
  });

  test('Returns 11, 13, 17, 19 for range 10-20', () => {
    const b : number[] = sieve(10, 20)
    expect(b).toContain(11)
    expect(b).toContain(13)
    expect(b).toContain(17)
    expect(b).toContain(19)
  });

// TODO add tests covering negative numbers, large numbers, etc. Haven't added them in the intrests of time 
