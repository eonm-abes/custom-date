interface dateConfig {
  month?: number;
  year?: number;
}

export class customDate {
  date: Date;

  constructor({ month = 0, year = 0 }: dateConfig = {}) {
    let date = new Date(Date.now());
    this.date = date;

    this.month(month);
    this.year(year);

    return this;
  }

  tweak({ month = 0, year = 0 }: dateConfig): customDate {
    this.month(month);
    this.year(year);

    return this;
  }

  month(month: number): customDate {
    this.date.setMonth(this.date.getMonth() + month);
    return this;
  }

  year(year: number): customDate {
    this.date.setFullYear(this.date.getFullYear() + year);
    return this;
  }

  to_string(): string {
    return this.date.toISOString().split("T")[0];
  }
}

// playground: https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgCJ0gYQPYhsAc2QG8AoZZASAFtcwALAfgC5kQBXagI2gG5yqATwhwoLNpx5R+AX1KkEAGzgBnFckzsVYbNXSQSAygBMMEVvoj8jCXNqjsEOqAApiyWuHrIAvMgAMADTIwqK+AcgyyBZmOHiE4cQyAJSGlBQUihBgyKYGfiAQAO5oZi6WAHQg2EUuycnW6Rl5EBUq2QCydPQuLRUEnd11yADUHt0NAhQmZm3ZAGLsiooAmiKufQNgi8trosNjoVCTpE0UDMAqFS3hLfzTcqc6APr2oAR1rG8gRGQZVFBsuwoCBkBcrn0dABJADKAHkYWAoO86m0AA6KYBgFwAIgAKjjkgBtfwAXX4lDkjwUdmwWQqimwH0KJU02l0llRL2+H3q-FsIBUdNajOZxQ0Wh0ejKxE8DFYAFoAMwpCrcpEovk0wXChlMlwsiXs6WQNxHRUAVmCcvorAATKr1cifnVJkA
// console.log(new CustomDate().to_string());
// console.log(new CustomDate({month: -3}).to_string());
// console.log(new CustomDate({year: -5, month: 2}).to_string());
